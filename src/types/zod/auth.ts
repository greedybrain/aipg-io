"use client";

import { z } from "zod";

export const LoginSchema = z.object({
    email: z.string().email().min(1),
    password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const SignupSchema = z
    .object({
        fullName: z.string().min(1, "Full name is required"),
        email: z.string().email().min(1),
        password: z
            .string()
            .min(6, "Password must be at least 6 characters long"),
        confirmPassword: z
            .string()
            .min(
                6,
                "Password must be at least 6 characters long, and must match",
            ),
    })
    .superRefine((data, ctx) => {
        if (data.password !== data.confirmPassword) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Passwords don't match",
                path: ["confirmPassword"],
            });
        }
    });
