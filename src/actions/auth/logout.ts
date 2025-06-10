"use server";

import { _createServerClient } from "@/utils/supabase/server";
import { getErrorMessage } from "@/utils/errors/get-error-message";

const logout = async () => {
    try {
        const supabase = await _createServerClient();
        const { error } = await supabase.auth.signOut({ scope: "global" });

        if (error) throw error;

        return {
            success: true,
            data: null,
            message: "Logged out successfully",
        };
    } catch (err) {
        return {
            success: false,
            data: null,
            message: getErrorMessage(err),
        };
    }
};

export default logout;
