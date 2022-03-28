import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
    return (
        <AppBar>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Typography 
                variant="h4">
                    Brom.ru
                </Typography>
                <Typography 
                variant="h5">
                    Доска объявлений brom.ru
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;