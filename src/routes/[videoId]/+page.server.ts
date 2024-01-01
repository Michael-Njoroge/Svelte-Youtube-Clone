import { getRelatedContent, getVideoComments, getVideoDetails } from '$lib/services.js';

export const load = async ({params}) => {
    const {videId} = params
    return {
        details: await getVideoDetails(videId),
        streamed:{
            comments: await getVideoComments(videId),
            relatedContent: await getRelatedContent(videId)
        }
    }
};