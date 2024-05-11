import { z } from "zod";

export function ValidateEmail(email: string) {
    const obj = z.string().trim().email();

    const validate = obj.safeParse(email);
    if (!validate.success) {
        return { message: `Email ${email} inválido`, success: false };
    }
    return { message: "Email valido", success: true };
}