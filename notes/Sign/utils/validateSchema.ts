import { z } from "zod";

export const validateSchema = z.object({
    name: z.string().transform((arg) => arg.trim()).optional(),
    email: z.string()
        .email({ message: "Please, provied a valide email" })
        .transform((arg) => arg.trim()),
    password: z.string()
        .min(3, { message: 'Password is too short' }),
    confirmPassword: z.string(),
    phone: z.number().positive(),
    gender: z.enum(['M', 'F']).default('M').optional(),
    born: z.string().default(new Date().toLocaleString()).optional(),
    pathImage: z.string().optional(),
    location: z.object({
        state_prov: z.string(),
        city: z.string(),
    }).optional(),
    birthplace: z.string().optional(),
    civilRule: z.enum(['SOLTEIRO', 'SOLTEIRA', 'CASADO', 'CASADA', 'VIÚVO', 'VIÚVA']).default('SOLTEIRO').optional(),
    biSingleNumber: z.string().refine((arg) => arg.match(/^\d{9}[A-Za-z]{2}\d{3}$/), {
        message: 'Your NIF dont match',
        path: ['BI'],
    }).optional(),
    nif: z.string().refine((arg) => arg.match(/^\d{9}[A-Za-z]{2}\d{3}$/), {
        message: 'Your NIF dont match',
        path: ['NIF'],
    }),
    ip: z.string().ip({
        version: 'v4'
    }),
    typeUser: z.enum(['costumer', 'farmer']).optional(),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
});

