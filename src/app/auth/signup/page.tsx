import AuthForm from "@/components/features/auth-form";
import AuthFormContextProvider from "@/contexts/auth-form-context";
import FixedContainer from "@/components/layout/fixed-container";

const SignupPage = () => {
    return (
        <main className="min-h-screen">
            <FixedContainer>
                <AuthFormContextProvider>
                    <AuthForm />
                </AuthFormContextProvider>
            </FixedContainer>
        </main>
    );
};

export default SignupPage;
