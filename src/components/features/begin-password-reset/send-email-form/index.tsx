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

import BackToLogin from "@/components/common/back-to-login";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RESET_LINK_CONFIRMATION_ROUTE } from "@/constants";
import { cn } from "@/utils/tailwind/tw-merge";
import useAuthStore from "@/stores/auth";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type TPasswordResetCredentials = {
    email: string;
};

const formSchema = z.object({
    email: z.string().min(1, "Email is required").email(),
});

const SendEmailForm = () => {
    const { replace } = useRouter();
    const client_resetPassword = useAuthStore(
        (state) => state.client_resetPassword,
    );
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
        },
    });

    const onSubmit: SubmitHandler<TPasswordResetCredentials> = (data) => {
        startTransition(async () => {
            await client_resetPassword(data.email);
            form.reset();

            replace(RESET_LINK_CONFIRMATION_ROUTE);
        });
    };
    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className={cn("flex flex-col w-full mt-8")}
            >
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className={cn("text-[16px]")}>
                                E-Mail Address
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter your email"
                                    type="email"
                                    isError={!!form.formState.errors.email}
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
                        "mt-8 h-[60px] w-full border-2 border-app-tertiary bg-app-primary font-bold text-app-tertiary shadow-neobrut1 transition-all hover:shadow-neobrut2 text-[16px]",
                    )}
                >
                    {isPending ? "Sending reset link..." : "Reset password"}
                </Button>
                <BackToLogin />
            </form>
        </Form>
    );
};

export default SendEmailForm;
