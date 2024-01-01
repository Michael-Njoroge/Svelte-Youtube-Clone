import { X_RapidAPI_Key } from "$env/static/private";
import { error } from "@sveltejs/kit";
import Axios from "axios";

const axios = Axios.create({
    baseURL: 'https://youtube138.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': X_RapidAPI_Key,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    },
    params: {
        hl: 'en',
        gl: 'us'
    }
})

export const getHomepage =async () => {
    try {
        const result = await axios('home/')
        return result.data.contents
    } catch (e) {
        throw error(500,{
            message: 'an error occurred'
        })
    }    
}

export const getSearch =async ({query,filter}:{query:string; filter:string}) => {
    try {
        const result = await axios('search/',{
            params:{
            q:query,
            cursor:filter
        }
    })
    return result.data
    } catch (e) {
        throw error(500,{
            message: 'an error occurred'
        })
    }    
}

export const getVideoDetails =async (id:string) => {
    try {
        const result = await axios('video/details/',{
            params:{
                id
            }
        })
        return result.data
    } catch (e) {
        throw error(500,{
            message: 'an error occurred'
        })
    }    
}