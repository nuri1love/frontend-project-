import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from './../Navigation/Navigation';
import leftwidget from '../../assets/img/left_widget_img.jpg'
const LeftWidget = () => {

    const [widgetInfo, setWidgetInfo] = useState({})

    useEffect(() => {
        fetch(`https://demo-api.vsdev.space/api/brom/left_widget`)
            .then(res => res.json())
            // .then(res => console.log(res))
            .then(data => setWidgetInfo(data))

    }, []);

    return (
        <Box position={'fixed'} sx={{ left: 0, top: 0, height: '100vh', width: 256, backgroundColor: '#42aaff',
        display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }} >
            <Navigation />
            <Box>
                <Typography variant="h5">
                    Количество объявлений в базе brom.ru
                </Typography>
                <Typography variant="h5">
                    Автомобили: {widgetInfo.cars}
                </Typography>
                <Typography variant="h5">
                    Квартиры: {widgetInfo.apartments}
                </Typography>
            </Box>
            <Box sx={{marginBottom: '100px'}}>
                <Typography align="center" variant="h6">
                    Наша база ежедневно пополняется десятками самых хороших объявлений по лучшей цене
                </Typography>
                <img src={leftwidget} />
            </Box>
        </Box>
    );
};

export default LeftWidget;