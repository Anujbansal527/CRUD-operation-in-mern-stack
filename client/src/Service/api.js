
import axios from "axios";


const URL="http://localhost:8080";

export const addUser = async (data) => 
{
    try {
        //post api
        return await axios.post(`${URL}/adduser`,data);
        
    } 
    catch (error) {
        console.log(`error while calling api ${error}`);
    }
}

export const getUsers = async () => {
    try {
        //get api
        return await axios.get(`${URL}/alluser`) 
    } catch (error) {
        console.log(`error while calling api ${error}`);
    }
}

export const getUser = async (id) => {
    try {
        //get api
        return await axios.get(`${URL}/${id}`) 
    } catch (error) {
        console.log(`error while calling api ${error}`);
    }
}

export const editUser = async (user,id) => {
    try {
        //get api
        return await axios.put(`${URL}/${id}`,user); 
    } catch (error) {
        console.log(`error while calling api ${error}`);
    }
}

export const deleteUser = async (id) => {
    try {
        console.log(id);
        return await axios.delete(`${URL}/${id}`); 
    } catch (error) {
        console.log(`error while calling api ${error}`);
    }
}