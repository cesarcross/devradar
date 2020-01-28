import axios from 'axios';

const api = axios.create({
    // baseURl da aula e nao do meu Expo
    baseURL: 'http://exp://192.168.15.32:3333',
});

export default api;

