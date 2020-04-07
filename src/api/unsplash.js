import axios from 'axios';

export default axios.create ({
    baseURL: 'https://api.unsplash.com/',
    headers: {  
        Authorization: 'Client-ID KSUxx4zF9_yQYR1FaGY6YhqWgJf-Uux8tdLENzWpkTc'
    }
})


