import { getRelatedContent, getVideoComments, getVideoDetails } from '$lib/services';

export const load = async ({params}) => {
    const {videoId} = params
    return {
        details: await getVideoDetails(videoId),
        streamed:{
            comments: await getVideoComments(videoId),
            relatedContent: await getRelatedContent(videoId)
        }
    }
};