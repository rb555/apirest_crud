import { z } from "zod";

export const registerSchema = z.object({
    userName: z.string({
        required_error: 'Username required'
    }),
    email: z.string({required_error:'Email required'}).email({message:'Invalid email'}),
    password: z.string({required_error: 'Password required'}).min(8,{
        message: 'Al least 8 characters required'
    }),
});

export const loginSchema = z.object({
    email: z.string({required_error:'Email required'}).email({message:'Invalid email'}),
    password: z.string({required_error: 'Password required'}).min(8,{
        message: 'Al least 8 characters required'
    }),
});