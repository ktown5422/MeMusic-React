import React from 'react'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'


export const NavBar = ({ blue }) => (
    <AppBar color={blue}>
        <Toolbar>
            <Link to="/">
                <Typography variant="h5" color="inherit">
                    MeMusic
                </Typography>
            </Link>
        </Toolbar>
    </AppBar>
    
)