import axios from 'axios';

const HTTP = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/',
    headers:{
        "Accept":"application/json",
        "Content-Type": "application/json"
    }
})

const HTTPDefault = axios.create({
    baseURL: window.location.protocol+ "://",
    headers:{
        "Accept":"application/json",
        "Content-Type": "application/json"
    }
})

export {
    HTTP,
    HTTPDefault
}