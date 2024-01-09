import { Button, Table, TableBody, TableCell, TableHead, TableRow, styled } from "@mui/material";
import { useEffect, useState } from "react";
import { getUsers , deleteUser } from "../Service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
    width: 90%;
    margin: 50px 0 0 50px;
`;

const THead = styled(TableRow)`
    & > th {
        font-size: 20px;
        background: #000000;
        color: #FFFFFF;
    }
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;




const AllUser =() => {

    const [users , setUsers] = useState([]);

    useEffect(()=>{
        getAllUsers();
    },[]);
//component did mount condition of useEffect an empty array

    
    const getAllUsers = async () =>{
        let response = await getUsers();
        let userdata = response.data;
        setUsers(userdata);
    }

    const DeleteUser= async(id)=>{
        await deleteUser(id);
        getAllUsers();
    }

    return (
        <>
            <StyledTable>
                <TableHead>
                    <THead>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>UserName</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell></TableCell>
                    </THead>
                </TableHead>

                <TableBody>
                { users.map( user => (
                    <TRow key={user._id}>
                        <TableCell>{user._id}</TableCell> 
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.username}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                        <TableCell>
                            <Button variant="contained" style={{marginRight : 10}} component={Link} to={`/editUser/${user._id}`}>EDIT</Button>
                            <Button variant="contained" color="secondary" onClick={()=>DeleteUser(user._id)}>DELETE</Button>
                        </TableCell>
                    </TRow>
                ))}

                </TableBody>
            </StyledTable>
        </>
    )
}

export default AllUser;