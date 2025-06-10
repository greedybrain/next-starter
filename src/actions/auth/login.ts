"use server";

import { SignInWithPasswordCredentials } from "@supabase/supabase-js";
import { _createServerClient } from "@/utils/supabase/server";
import { getErrorMessage } from "@/utils/errors/get-error-message";

const login = async (credentials: SignInWithPasswordCredentials) => {
    try {
        const supabase = await _createServerClient();
        const {
            data: { user },
            error,
        } = await supabase.auth.signInWithPassword(credentials);

        if (error) throw error;
        if (!user) throw new Error("Failed to log in user");

        return {
            success: true,
            data: user,
            message: "Logged in successfully",
        };
    } catch (err) {
        return {
            success: false,
            data: null,
            message: getErrorMessage(err),
        };
    }
};

export default login;
