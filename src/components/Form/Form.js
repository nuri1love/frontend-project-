import { Button, FormControl, InputLabel, MenuItem, Select, TextField, ToggleButton, ToggleButtonGroup, Typography, Box } from '@mui/material';
import React, { useState } from 'react';

const Form = ({ jsonAds, setJsonAds }) => {

    const [json, setJson] = useState({ fields: { city: { values: [] } } });

    const [alignment, setAlignment] = React.useState('car');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    const [city, setCity] = React.useState('');

    const handleChangeCity = (event) => {
        setCity(event.target.value);
    };

    const [carType, setCarType] = React.useState('');

    const handleChangeTypeCar = (event) => {
        setCarType(event.target.value);
    };

    React.useEffect(() => {
        fetch(`https://demo-api.vsdev.space/api/brom/sales/form`)
            .then(res => res.json())
            .then(data => setJson(data))
    }, []);

    const post = (e) => {
        e.preventDefault();
        const target = e.target;
        let rand = Math.floor(Math.random() * 100000)
        let flag = false;
        let zxc = alignment === 'car' ? 8 : 5;
        for (let i = 0; i < zxc; i++)
            if (target[i].value === '') flag = true;
        if (!flag) {
            let formData = new FormData();
            formData.append('address', target.address.value);
            formData.append('city', city);
            formData.append('phone', target.phone.value);
            formData.append('price', target.price.value);
            formData.append('type', alignment);
            if (alignment === 'car') {
                formData.append('car_type', carType);
                formData.append('engine_power', target.power.value);
                formData.append('engine_volume', target.volume.value);
                formData.append('model', target.model.value);
            }
            else {
                formData.append('rooms', target.roomsQuantity.value);
                formData.append('square', target.area.value);
            }
            fetch(
                `https://demo-api.vsdev.space/api/brom/sales`,
                {
                    method: "POST",
                    headers: {
                        "Accept": 'application/json',
                    },
                    body: formData
                },
            )
                .then(res => res.json())
                .then(() => {
                    if (alignment === 'car')
                        setJsonAds([...jsonAds, {
                            address: target.address.value,
                            car_type: carType,
                            city: city,
                            engine_power: target.power.value,
                            engine_volume: target.volume.value,
                            id: rand,
                            model: target.model.value,
                            phone: target.phone.value,
                            price: target.price.value,
                            type: alignment,
                        }])
                    else setJsonAds([...jsonAds, {
                        address: target.address.value,
                        city: city,
                        id: rand,
                        type: alignment,
                        rooms: target.roomsQuantity.value,
                        square: target.area.value,
                        phone: target.phone.value,
                        price: target.price.value
                    }])
                })
        }
    }

    return (
        <form style={{ marginLeft: '30px' }} onSubmit={(e) => post(e)}>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}>
                <ToggleButton value="car">Добавить машину</ToggleButton>
                <ToggleButton value="apartment">Добавить квартиру</ToggleButton>
            </ToggleButtonGroup>
            <Box>
                <Box sx={{ my: 2, display: 'flex', justifyContent: 'space-between', maxWidth: '1000px' }}>
                    <TextField id="address" placeholder='Адрес' />
                    <FormControl sx={{ width: '250px' }}>
                        <InputLabel id="city">Город</InputLabel>
                        <Select
                            labelId="city"
                            id="city"
                            value={city}
                            label="city"
                            onChange={handleChangeCity}
                        >
                            {json.fields.city.values.map(x => <MenuItem key={x} value={x}>{x}</MenuItem>)}
                        </Select>
                    </FormControl>
                    <TextField type="tel" id="phone" placeholder='Телефон' />
                    <TextField id="price" placeholder='Цена' />
                </Box>
                <Box>
                    {alignment === 'car' ?
                        <Box sx={{ mt: 2 }}>
                            <Typography variant="h5">Добавление машины</Typography>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1000px' }}>
                                <FormControl sx={{ width: '250px' }}>
                                    <InputLabel id="typeCar">Тип машины</InputLabel>
                                    <Select
                                        labelId="typeCar"
                                        id="typeCar"
                                        value={carType}
                                        label="typeCar"
                                        onChange={handleChangeTypeCar}
                                    >
                                        <MenuItem value="Седан">Седан</MenuItem>
                                        <MenuItem value="Внедорожник">Внедорожник</MenuItem>
                                        <MenuItem value="Хетчбек">Хетчбек</MenuItem>
                                        <MenuItem value="Кабриолет">Кабриолет</MenuItem>
                                    </Select>
                                </FormControl>
                                <TextField id="power" placeholder='Мощность двигателя' />
                                <TextField id="volume" placeholder='Объем двигателя' />
                                <TextField id="model" placeholder='Модель' />
                            </Box>
                        </Box>
                        :
                        <Box>
                            <Typography variant="h5">Добавление квартиры</Typography>
                            <Box sx={{display: 'flex', justifyContent: 'space-between', maxWidth: '475px'}}>
                                <TextField id="roomsQuantity" placeholder='Количество комнат' />
                                <TextField id="area" placeholder='Площадь' />
                            </Box>
                        </Box>
                    }
                </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
                <Button variant='contained' type="submit">Отправить</Button>
            </Box>
        </form>
    );
};

export default Form;