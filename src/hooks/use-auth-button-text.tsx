import useLoginOrSignupCriteria from "./use-login-or-signup-criteria";

const useAuthButtonText = (isPending: boolean) => {
    const { formCriteria } = useLoginOrSignupCriteria();

    const getButtonText = () => {
        if (formCriteria.isSignupAction) {
            return isPending ? "Creating account..." : "Signup";
        }
        return isPending ? "Logging in..." : "Login";
    };

    return {
        buttonText: getButtonText(),
    };
};

export default useAuthButtonText;
