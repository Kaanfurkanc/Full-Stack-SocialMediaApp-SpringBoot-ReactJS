import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
    let userId = 1;
    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left'}}>
                        <Link to="/" style={{ textAlign: 'left', textDecoration: 'none', color: 'white'}}>Home</Link>
                    </Typography>
                    <Link to={`/users/${userId}`} style={{ textDecoration: 'none', color: 'white', fontSize:20, marginRight:50}}>User</Link>
                    <Button color="inherit">Login</Button>

                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Navbar;
