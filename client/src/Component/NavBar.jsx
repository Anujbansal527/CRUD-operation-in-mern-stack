import {AppBar, Toolbar, styled} from "@mui/material";
import  { NavLink } from "react-router-dom";
 

const Header = styled(AppBar)`
    background:#111111
`

const Tabs = styled('p')`
    font-Size: 20px ;
    margin-right: 20px
`
const Nav = styled(NavLink)`
    font-Size: 20px ;
    margin-right: 20px;
    color : white;
    text-decoration:none;
`

const NavBar = () => {
    return(
        <>
            <Header position="relative">
                <Toolbar>
                    <Nav to='/'><Tabs>CRUD Opretions</Tabs></Nav>
                    <Nav to='/alluser'><Tabs>All Users</Tabs></Nav>
                    <Nav to='/adduser'><Tabs>Add User</Tabs></Nav>
              </Toolbar>
            </Header>
        </>
    )
}

export default NavBar;