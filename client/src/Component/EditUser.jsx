import { Button, FormControl, FormGroup, Input, InputLabel,  Typography, styled } from "@mui/material";
import {editUser, getUser } from "../Service/api";
import  {  useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";

const Container = styled(FormGroup)`
width:50%;
margin: 5% auto 0 auto;
& > div {
    margin-top:20px
}
`

const DefValue = {
    name: "",
    username: "",
    email: "",
    phone:"",
}


const EditUser = () => 
{
    const [user,setUser] = useState(DefValue);
  
    const navigate = useNavigate();

    const {id} = useParams();

    useEffect(()=>{
        loadDetails();
    },[]);

    const loadDetails = async () => {
        const response = await getUser(id);
        setUser(response.data);
    }

    const onValueCHnage = (e) => {
        setUser({...user , [e.target.name] : e.target.value})
    }

    const editUserDetails= async () => {
        await editUser(user,id);
        navigate("/alluser");
    }

    return (
            <Container>
                <Typography varient="h1">Edit User</Typography>
                <FormControl>
                    <InputLabel>Name :</InputLabel>
                    <Input onChange={(e)=> onValueCHnage(e)  } name="name" value= {user.name}/>
                </FormControl>

                <FormControl>
                    <InputLabel>UserName :</InputLabel>
                    <Input onChange={(e)=> onValueCHnage(e) }name="username" value= {user.username}/>
                </FormControl>

                <FormControl>
                    <InputLabel>Email :</InputLabel>
                    <Input onChange={(e)=> onValueCHnage(e) }name="email" value= {user.email}/>
                </FormControl>

                <FormControl>
                    <InputLabel>Phone :</InputLabel>
                    <Input onChange={(e)=> onValueCHnage(e) }name="phone" value= {user.phone}/>
                </FormControl>

                <FormControl>
                    <Button varient="contained" onClick={() => editUserDetails()}>Edit User</Button>
                </FormControl>

            </Container>
    )
}

export default EditUser;