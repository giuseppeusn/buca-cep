import api from "@/services/api";
import { CepType } from "@/types/CepType";
import { ResponseType } from "@/types/ResponseType";
import { AxiosError } from "axios";

export default async function getAddress(cep: string) {
  try {
    const response: ResponseType<CepType> = await api.get(`/address/${cep}`);

    return { response: response.data, error: null };
  } catch (error) {
    const { response } = error as unknown as AxiosError;

    const {
      data: { message },
    } = response as ResponseType<CepType>;

    return { response: null, error: message };
  }
}
