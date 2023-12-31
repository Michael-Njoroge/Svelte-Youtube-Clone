import { X_RapidAPI_Key } from "$env/static/private";
import Axios from "axios";

const axios = Axios.create({
    baseURL: 'youtube138.p.rapidapi.com',
    headers: {
        'X-RapidAPI-Key': X_RapidAPI_Key,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    },
    params: {
        hl: 'en',
        gl: 'us'
    }
})