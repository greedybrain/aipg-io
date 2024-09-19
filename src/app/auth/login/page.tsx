import AuthForm from "@/components/features/auth-form";
import AuthFormContextProvider from "@/contexts/auth-form-context";
import FixedContainer from "@/components/layout/fixed-container";

const LoginPage = () => {
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

export default LoginPage;
