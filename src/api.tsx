import axios from 'axios';

export const URL : any = process.env.API_URL;

export function fetchData(method : String, route : String) {
    switch(method) {
        case 'GET':
            axios.get(URL + route)
            break;
        case 'POST':
            axios.post(URL + route)
            break;
        case 'PUT':
            axios.put(URL + route)
            break;
        case 'DELETE':
            axios.delete(URL + route)
            break;
        default:
            console.log('Método não reconhecido');
    }
}