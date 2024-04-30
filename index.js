const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const PORT = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/price/get-list', (req, res) => {
    res.status(200)
    res.send(
        [
            {
                nameService: 'Простая укладка',
                additionalService: '+ окрашивание',
                priceService: '500 ₽',
            },

            {
                nameService: 'Event-укладка',
                additionalService: '+ завивка',
                priceService: '700 ₽',
            },
            {
                nameService: 'Стрижка',
                additionalService: '+ выпрямление',
                priceService: '1500 ₽',
            },
            {
                nameService: 'Женская укладка',
                additionalService: '+ обработка кончинков волос',
                priceService: '4000₽',
            },
            {
                nameService: 'Женская укладка',
                additionalService: '+ обработка кончинков волос',
                priceService: '5000₽',
            },

            {
                nameService: 'Женская укладка',
                additionalService: '+ обработка кончинков волос',
                priceService: '6000₽',
            },
            {
                nameService: 'Женская укладка',
                additionalService: '+ обработка кончинков волос',
                priceService: '7000₽',
            },
            {
                nameService: 'Женская укладка',
                additionalService: '+ обработка кончинков волос',
                priceService: '8000₽',
            },
            {
                nameService: 'Женская укладка',
                additionalService: '+ обработка кончинков волос',
                priceService: '9000₽',
            },
            {
                nameService: 'Женская укладка',
                additionalService: '+ обработка кончинков волос',
                priceService: '10000₽',
            },
            {
                nameService: 'Женская укладка',
                additionalService: '+ обработка кончинков волос',
                priceService: '11000₽',
            },
            {
                nameService: 'Женская укладка',
                additionalService: '+ обработка кончинков волос',
                priceService: '12000₽',
            }
        ]
    )
});

app.listen(PORT, () => {
    console.log("Сервер запущен...")
});