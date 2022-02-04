import axios from 'axios';

const API = axios.create({baseURL: 'https://incribobookserver.herokuapp.com/'});



API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile'))
    {
        req.headers.authorization=`Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req; 
});


export const updateData = (user,id)=> API.patch(`user/${id}`,user);
export const signIn = (formData)=>API.post('/user/signin',formData);
export const signUp = (formData)=>API.post('/user/signup',formData);