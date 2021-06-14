import { ParkingLotMemmoryRepository } from '../infra/repository/ParkingLotMemmoryRepository'
import { GetParkingLotUseCase } from '../core/usecase/GetParkingLotUseCase'

export class GetParkingLotController {
  static async getParkingLot(params) {
    const repository = new ParkingLotMemmoryRepository()
    const useCase = new GetParkingLotUseCase(repository)
    const result = await useCase.execute({ code: params.code })

    return result;
  }
}