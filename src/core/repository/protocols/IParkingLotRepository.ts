import { ParkingLot } from "../../entity/ParkingLot";

export interface IParkingLotRepository {
  getParkingLotByCode(code: string): Promise<ParkingLot>
  parkCar(code: string, plate: string, date: Date): Promise<void>
}