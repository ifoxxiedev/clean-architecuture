
import { ParkingLot } from "../entity/ParkingLot";
import { IParkingLotRepository } from "../repository/protocols/IParkingLotRepository";

interface IGetParkingLotExecuteData {
  code: string,
}

export class GetParkingLotUseCase {
  parkingLotRepository: IParkingLotRepository;
  
  constructor(parkingLotRepository: IParkingLotRepository) {
    this.parkingLotRepository = parkingLotRepository;
  }

  execute({ code }: IGetParkingLotExecuteData): Promise<ParkingLot> {
    return this.parkingLotRepository.getParkingLotByCode(code);
  }
}