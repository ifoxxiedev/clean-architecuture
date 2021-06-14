import express from 'express'
import { ExpressAdapter } from '../../adapter/ExpressAdapter'
import { GetParkingLotController } from '../../controllers/GetParkingLotController'
import { ParkingLotController } from '../../controllers/ParkingLotController'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.post('/parkingLots/parkCar', ExpressAdapter.call(ParkingLotController.parkCar))
app.get('/parkingLots/:code', ExpressAdapter.call(GetParkingLotController.getParkingLot))

app.listen(3333, () => console.log('App is running'))