import { z } from "zod";

export default function NIFValidate(nif: string) {
    const schema = z.string().trim().regex(/^\d{9}[A-Za-z]{2}\d{3}$/, "NIF inválido");
    const validate = schema.safeParse(nif);

    if (!validate.success) {
        return {
            message: validate.error.message,
            success: false,
        };
    }

    return {
        message: 'NIF valido',
        success: true,
    }
}