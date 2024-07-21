import { z } from "zod";

const cepRegex = /^(?:\d{5}-\d{3}|\d{8})$/;

const addressSchema = z.object({
  code: z
    .string({
      required_error: "CEP obrigatório",
    })
    .min(8, { message: "CEP inválido. Verifique a quantidade de caracteres." })
    .refine((value) => cepRegex.test(value), {
      message: "CEP inválido. O formato deve ser '00000-000' ou '00000000.'",
    }),
});

export default addressSchema;
