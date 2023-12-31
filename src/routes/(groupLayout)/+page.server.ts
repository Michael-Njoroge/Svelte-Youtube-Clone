import { getHomepage } from "$lib/services";

export const load = async () => {
    return {
        contents: await getHomepage()
    };
};