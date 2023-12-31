import { getHomepage } from "$lib/services";
import { fail } from "@sveltejs/kit";

export const load = async () => {
    return {
        contents: await getHomepage()
    };
};

export const actions = {
    search:async ({request}) => {
        const data = await request.formData()
        const query = data.get('q')
        if(!query){
            return fail(400,{
                error: 'You have an empty search'
            })
        }
        console.log('called')
    }
};