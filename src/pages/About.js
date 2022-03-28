import React from 'react';
import { Box, Typography } from '@mui/material';

const About = () => {

    const [json, setJson] = React.useState({text: ''});

    React.useEffect(() => {
        fetch(`https://demo-api.vsdev.space/api/brom/about_page`)
            .then(res => res.json())
            .then(data => setJson(data))

    }, []);

    return (
        <Box sx={{ margin: '50px' }}>
            <Typography variant="h6">
                {json.text}
            </Typography>
        </Box>
    );
};

export default About;