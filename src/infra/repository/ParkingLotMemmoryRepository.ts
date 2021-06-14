import { ParkingLot } from "../../core/entity/ParkingLot";
import { IParkingLotRepository } from "../../core/repository/protocols/IParkingLotRepository";

const parkingLots = [
  {
    code: 'shopping', capacity: 5,open_hour: 8, close_hour: 22, occupied_spaces: 0
  }
]

const parkedCars = [

]

export class ParkingLotMemmoryRepository implements IParkingLotRepository {

  async getParkingLotByCode(code: string): Promise<ParkingLot> {
    const parkedLotData = parkingLots.find(parkingLot => parkingLot.code === code);

    return new ParkingLot(
      code,
      parkedLotData.capacity,
      parkedLotData.open_hour,
      parkedLotData.close_hour,
      parkedCars.length
    )
  }

  async parkCar(code: string, plate: string, date: Date): Promise<void> {
    parkedCars.push({ code, plate, date });
  }
  
}