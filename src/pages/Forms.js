import React from 'react';
import Form from '../components/Form/Form';
import car from '../assets/img/car_img.png'
import apart from '../assets/img/home_img.png'
import { Typography, Box } from '@mui/material';
import CardContent from '@mui/material/CardContent';
const Forms = () => {

    const [json, setJson] = React.useState([])

    React.useEffect(() => {
        fetch(`https://demo-api.vsdev.space/api/brom/sales`)
            .then(res => res.json())
            .then(data => setJson(data))
    }, []);

    return (
        <div className='flex flex-col mx-32 w-full'>
            <Typography variant="h3">Объявления</Typography>
            <Form setJsonAds={setJson} jsonAds={json} />
            <Box sx={{display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'}}>
                {json.map(x =>
                    <React.Fragment key={x.id}>
                        <CardContent variant="outlined">
                            <Box>
                                {x.type === "car" ?
                                    <img style={{ width: '200px' }} src={car} alt="car" /> :
                                    <img style={{ width: '200px' }} src={apart} alt="apart" />}
                            </Box>
                            
                            <div>
                                <div>Адрес: {x.address}</div>
                                {x.type === 'car' ?
                                    <div>
                                        <div>Тип машины: {x.car_type}</div>
                                        <div>Мощность двигателя: {x.engine_power}</div>
                                        <div>Громкость двигателя: {x.engine_volume}</div>
                                        <div>Модель {x.model}</div>
                                    </div>
                                    :
                                    <div>
                                        <div>Количество комнат: {x.rooms}</div>
                                        <div>Площадь: {x.square}</div>
                                    </div>}
                                <div>Телефон {x.phone}</div>
                                <div>Цена: {x.price}</div>
                            </div>
                        </CardContent>
                    </React.Fragment>
                )}
            </Box>
        </div>
    );
};

export default Forms;