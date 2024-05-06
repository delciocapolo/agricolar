import { z } from "zod";

export function ValidateEmail(email: string) {
    const obj = z.string().email({ message: `Email ${email} invalido!` });

    const validate = obj.safeParse(email);
    if (!validate.success) {
        return { message: validate.error.message, success: false };
    }
    return { message: "Email valido", success: true };
}