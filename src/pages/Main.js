import React from 'react';
import home from '../assets/img/home_page_img.jpg'
import { Box, Typography } from '@mui/material';
const Main = () => {

    const [json, setJson] = React.useState({ text: '' });

    React.useEffect(() => {
        fetch(`https://demo-api.vsdev.space/api/brom/home_page`)
            .then(res => res.json())
            .then(data => setJson(data))

    }, []);

    return (
        <Box>
            <Box sx={{display: 'flex'}}>
                <img style={{maxHeight: '500px'}} src={home} alt="home"/>
                <Typography variant='h6' sx={{margin: '30px'}}>{json.text}</Typography>
            </Box>
        </Box>
    );
};

export default Main;