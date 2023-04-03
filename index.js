const PORT = 8000

import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()

app.use(cors())

app.get('/', (req, res) => {
  console.log('h3llo')
})

app.get('/api', (req, res) => {
  const passedCity = req.query.q
  console.log(passedCity)
  const options = {
    method: 'GET',
    url: `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_RAPID_API_KEY}`,
    params: {q: passedCity, days:10}
  }

  axios.request(options)
    .then((response) => {
      res.json(response.data)

    }).catch((error) => {
      console.log(error)
    })
})

app.listen(8000, () => console.log(`Server is running on port ${PORT}`))

