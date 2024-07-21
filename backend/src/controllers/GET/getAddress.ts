import { Request, Response } from "express";
import addressSchema from "../../schemas/addressSchema";
import { CepApiType, CepType } from "../../types/CepType";

export default async function getAddress(req: Request, res: Response) {
  const params = addressSchema.safeParse(req.params);

  if (params.error) {
    const { message } = params.error.issues[0];

    return res.status(400).json({ status: false, error: message });
  }

  try {
    const url = `https://ws.apicep.com/cep.json?code=${params.data.code}`;
    const response = await fetch(url);

    const data: CepApiType = await response.json();

    if (!data.ok) {
      return res
        .status(404)
        .json({ status: false, error: "CEP não encontrado" });
    }

    const sanitizedData: CepType = {
      code: data.code,
      address: data.address,
      district: data.district,
      city: data.city,
      state: data.state,
    };

    return res.status(200).json({ status: true, data: sanitizedData });
  } catch (error) {
    return res.status(400).json({ status: false, error });
  }
}
