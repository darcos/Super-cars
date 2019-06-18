import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
        'Client-ID 217f34b402406177eab56c9bf181dd1c8e1f5740bd8ea576e0fa725691ea5551'
                 }

});