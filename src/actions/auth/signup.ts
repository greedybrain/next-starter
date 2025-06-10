"use server";

import { SignUpWithPasswordCredentials } from "@supabase/supabase-js";
import { _createServerClient } from "@/utils/supabase/server";
import { getErrorMessage } from "@/utils/errors/get-error-message";

const signup = async (credentials: SignUpWithPasswordCredentials) => {
    try {
        const supabase = await _createServerClient();
        const {
            data: { user },
            error,
        } = await supabase.auth.signUp(credentials);

        if (error) throw error;
        if (!user) throw new Error("Failed to sign up user");

        return {
            success: true,
            data: user,
            message: "Signed up user successfully",
        };
    } catch (err) {
        return {
            success: false,
            data: null,
            message: getErrorMessage(err),
        };
    }
};

export default signup;
