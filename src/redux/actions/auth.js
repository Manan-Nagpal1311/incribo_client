import {AUTH,UPDATE} from '../actionTypes';
import * as api from '../../api/index';

export const signin=(formData,history)=> async(dispatch)=>{
     try {
        //  //log in user
         const {data}=await api.signIn(formData);
         dispatch({type:AUTH,data});
         history('/myself');
     } catch (error) {
         console.log(error);
     }
} ;

export const signup=(formData,history)=> async(dispatch)=>{
    try {
        //sign up  user
        // console.log(formData);
        const {data}=await api.signUp(formData);
        // console.log({data});
         dispatch({type:'AUTH',data});
        history('/myself');
    } catch (error) {
        console.log(error);
    }
} ;

export const updatedata=(user,id)=> async(dispatch)=>{
    try {
        // console.log(user);
        // console.log(id);
        const {data}=await api.updateData(user,id);
        dispatch({type:'UPDATE',data});
    } catch (error) {
        console.log(error);
    }
}

export const logout1 = ()=> async(dispatch)=>{
    try {
        dispatch({type:'LOGOUT'});
    } catch (error) {
        console.log(error);
    }
}

