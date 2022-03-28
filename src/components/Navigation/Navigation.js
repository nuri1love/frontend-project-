import { Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '150px 0 0 60px' }}>
            <Typography variant="h5"><Link color="inherit" href="/">Главная</Link></Typography>
            <Typography variant="h5"><Link color="inherit" href="/about">О нас</Link></Typography>
            <Typography variant="h5"><Link color="inherit" href="/forms">Объявления</Link></Typography>
        </nav>
    );
};

export default Navigation;
