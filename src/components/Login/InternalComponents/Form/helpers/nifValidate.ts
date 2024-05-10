import { z } from "zod";

export default function NIFValidate(nif: string) {
    const message = 'NIF inválido';
    const schema = z.string().trim().refine((arg) => (arg.match(/^\d{9}[A-Za-z]{2}\d{3}$/)), {
        message
    });
    const validate = schema.safeParse(nif);

    if (!validate.success) {
        return {
            message,
            success: false,
        };
    }

    return {
        message: 'NIF válido',
        success: true,
    }
}