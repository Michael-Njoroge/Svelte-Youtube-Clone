import { getHomepage } from "$lib/services";

export const load = async () => {
    return {
        content: getHomepage()
    };
};