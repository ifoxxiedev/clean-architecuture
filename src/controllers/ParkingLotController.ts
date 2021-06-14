import { ParkingLotMemmoryRepository } from '../infra/repository/ParkingLotMemmoryRepository'
import { EnterParkngLotUseCase } from '../core/usecase/EnterParkingLotUseCase'

export class ParkingLotController {
  static async parkCar(params, body) {

    const repository = new ParkingLotMemmoryRepository()
    const useCase = new EnterParkngLotUseCase(repository)
    const result = await useCase.execute({ code: body.code, date: new Date(body.date), plate: body.plate })

    return result;
  }
}