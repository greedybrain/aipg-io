"use client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";

import BackToLogin from "@/components/common/back-to-login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RESET_COMPLETE_ROUTE } from "@/constants";
import { cn } from "@/utils/tailwind/tw-merge";
import { notify } from "@/utils/alerts/toast";
import useAuthStore from "@/stores/auth";
import { useTransition } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type TPasswordResetCredentials = {
    password: string;
    confirmPassword: string;
};

const formSchema = z
    .object({
        password: z.string().min(6, "Password is required"),
        confirmPassword: z.string().min(6, "Confirmation password is required"),
    })
    .superRefine((data, ctx) => {
        if (data.confirmPassword !== data.password) {
            ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: "Passwords do not match",
                path: ["confirmPassword"],
            });
        }
    });

const SetNewPasswordForm = () => {
    const searchParams = useSearchParams();
    const { replace } = useRouter();
    const client_updatePassword = useAuthStore(
        (state) => state.client_updatePassword,
    );
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit: SubmitHandler<TPasswordResetCredentials> = (data) => {
        startTransition(async () => {
            const code = searchParams.get("code");

            if (!code) {
                notify({
                    type: "error",
                    message: "Could not detect valid reset in url",
                });
            }

            await client_updatePassword(data.password, code);
            form.reset();

            replace(RESET_COMPLETE_ROUTE);
        });
    };
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn("gap-y-7 flex flex-col w-full mt-8")}
            >
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={cn("text-[16px]")}>
                                Password
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter new password"
                                    type="password"
                                    isError={!!form.formState.errors.password}
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="confirmPassword"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={cn("text-[16px]")}>
                                Confirm password
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter confirmation"
                                    type="password"
                                    isError={
                                        !!form.formState.errors.confirmPassword
                                    }
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    size={"lg"}
                    className={cn(
                        "mt-5 h-[60px] w-full border-2 border-app-tertiary bg-app-primary font-bold text-app-tertiary shadow-neobrut1 transition-all hover:shadow-neobrut2 text-[16px]",
                    )}
                >
                    {isPending ? "Resetting password..." : "Reset password"}
                </Button>
                <BackToLogin />
            </form>
        </Form>
    );
};

export default SetNewPasswordForm;
