"use client";

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { FormState, SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema, SignupSchema } from "@/types/zod/auth";

import AccountConfirmationPrompt from "./account-confirmation-prompt";
import { Button } from "@/components/ui/button";
import ForgotPassword from "./forgot-password";
import FormHeading from "./form-heading";
import GuideMessage from "./guide-message";
import { HOME_ROUTE } from "@/constants";
import { Input } from "@/components/ui/input";
import OrSeparator from "./or-separator";
import SignInWithOAuthOptions from "../sign-in-with-oauth-options";
import { cn } from "@/utils/tailwind/tw-merge";
import { notify } from "@/utils/alerts/toast";
import useAuthButtonText from "@/hooks/use-auth-button-text";
import useAuthStore from "@/stores/auth";
import useLoginOrSignupCriteria from "@/hooks/use-login-or-signup-criteria";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export type TSignupCredentials = {
    fullName: string;
    email: string;
    password: string;
    confirmPassword: string;
};

export type TLoginCredentials = {
    email: string;
    password: string;
};

const AuthForm = () => {
    const { client_login, client_signup } = useAuthStore((state) => ({
        client_login: state.client_login,
        client_signup: state.client_signup,
    }));
    const { formCriteria } = useLoginOrSignupCriteria();
    const formSchema = formCriteria.isSignupAction ? SignupSchema : LoginSchema;
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            fullName: "",
            password: "",
            confirmPassword: "",
        },
    });
    const [isPending, startTransition] = useTransition();
    const { buttonText } = useAuthButtonText(isPending);
    const { replace } = useRouter();

    const onSubmit: SubmitHandler<TSignupCredentials | TLoginCredentials> = (
        data,
    ) => {
        startTransition(async () => {
            const { email, password, fullName } = data as TLoginCredentials &
                TSignupCredentials;

            const { message, success } = !formCriteria.isSignupAction
                ? await client_login({ email, password })
                : await client_signup({ email, password, fullName });

            if (success) {
                notify({ type: "success", message, id: "auth-success" });
                form.reset();
                replace(HOME_ROUTE);
            } else {
                notify({ type: "error", message, id: "auth-fail" });
            }
        });
    };

    return (
        <div className={cn("mx-auto mt-16 max-w-[450px]")}>
            <div className={cn("text-center")}>
                <FormHeading />
                <GuideMessage />
            </div>
            <SignInWithOAuthOptions />
            <OrSeparator />
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className={cn("space-y-7 flex flex-col")}
                >
                    {formCriteria.isSignupAction && (
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter your full name"
                                            type="text"
                                            isError={
                                                !!(
                                                    form.formState as FormState<TSignupCredentials>
                                                ).errors.fullName
                                            }
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>E-Mail Address</FormLabel>
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
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter a password"
                                        type="password"
                                        isError={
                                            !!form.formState.errors.password
                                        }
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    {formCriteria.isSignupAction && (
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Confirm password"
                                            type="password"
                                            isError={
                                                !!(
                                                    form.formState as FormState<TSignupCredentials>
                                                ).errors.confirmPassword
                                            }
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    <ForgotPassword />
                    <Button
                        type="submit"
                        size={"lg"}
                        className={cn(
                            "my-5 h-[60px] w-full border-2 border-app-tertiary bg-app-primary font-bold text-app-tertiary shadow-neobrut1 transition-all hover:shadow-neobrut2",
                        )}
                    >
                        <span className={cn("text-[16px]")}>{buttonText}</span>
                    </Button>
                    <AccountConfirmationPrompt />
                </form>
            </Form>
        </div>
    );
};

export default AuthForm;

{
}
