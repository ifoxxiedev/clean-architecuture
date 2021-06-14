import { ParkedCar } from '../entity/ParkedCar'
import { ParkingLot } from '../entity/ParkingLot'
import { IParkingLotRepository } from '../repository/protocols/IParkingLotRepository'

interface IEnterParkingExecuteData {
  code: string;
  plate: string;
  date: Date;
}

export class EnterParkngLotUseCase {
  parkingLotRepository: IParkingLotRepository

  // Injeção de Depenência
  constructor(parkingLotRepository: IParkingLotRepository) {
    this.parkingLotRepository = parkingLotRepository
  } 
  async execute({ code, date, plate }: IEnterParkingExecuteData): Promise<ParkingLot> {

    const parkingLot = await this.parkingLotRepository.getParkingLotByCode(code)
    const parkedCar = new ParkedCar(code, plate, date)
    if (!parkingLot.isOpen(parkedCar.date)) throw new Error('The parking lot is closed!')
    if (parkingLot.isFull()) throw new Error('The parking lot is full!')

    await this.parkingLotRepository.parkCar(parkedCar.code, parkedCar.plate, parkedCar.date);
    return parkingLot
  }
}