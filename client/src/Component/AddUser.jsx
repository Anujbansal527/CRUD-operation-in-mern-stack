import { Button, FormControl, FormGroup, Input, InputLabel,  Typography, styled } from "@mui/material";
import { addUser } from "../Service/api";
import  {  useState } from 'react';
import { useNavigate } from "react-router-dom";

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


const AddUser = () => 
{
    const [user,setUser] = useState(DefValue);
  
    const navigate = useNavigate();

    const onValueCHnage = (e) => {
        setUser({...user , [e.target.name] : e.target.value})
    }

    const addUserDetails= async () => {
        await addUser(user);
        navigate("/alluser");
    }

    return (
            <Container>
                <Typography varient="h1">ADD USERS</Typography>
                <FormControl>
                    <InputLabel>Name :</InputLabel>
                    <Input onChange={(e)=> onValueCHnage(e)  } name="name" />
                </FormControl>

                <FormControl>
                    <InputLabel>UserName :</InputLabel>
                    <Input onChange={(e)=> onValueCHnage(e) }name="username"/>
                </FormControl>

                <FormControl>
                    <InputLabel>Email :</InputLabel>
                    <Input onChange={(e)=> onValueCHnage(e) }name="email"/>
                </FormControl>

                <FormControl>
                    <InputLabel>Phone :</InputLabel>
                    <Input onChange={(e)=> onValueCHnage(e) }name="phone"/>
                </FormControl>

                <FormControl>
                    <Button varient="contained" onClick={() => addUserDetails()}>Add User</Button>
                </FormControl>

            </Container>
    )
}

export default AddUser;