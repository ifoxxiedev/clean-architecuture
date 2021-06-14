import { throws } from "assert";
import { ParkedCar } from "./ParkedCar"

describe('ParkedCar', () => {
  it('Deve criar um carro se os dados estiverem corretos', () => {
    const date = new Date('2021-06-14T19:17:00')
    const parkedCar = new ParkedCar('codigo', 'AAA-1234', date);
    expect(parkedCar.code).toEqual('codigo')
    expect(parkedCar.plate).toEqual('AAA-1234')
    expect(parkedCar.date).toEqual(date)
  })

  it('Deve lançar uma exceção se a codigo do carro estiver incorreto', () => {
    const date = new Date('2021-06-14T19:17:00')
    const createCar = () => new ParkedCar('', 'AABB-1234', date)
    expect(createCar).toThrow(Error)
  })

  it('Deve lançar uma exceção se a placa do carro estiver incorreto', () => {
    const date = new Date('2021-06-14T19:17:00')
    const createCar = () => new ParkedCar('codigo', 'AABB-1234', date)
    expect(createCar).toThrow(Error)
  })

  it('Deve lançar uma exceção se a data de entrada estiver incorreto', () => {
    const createCar = () => new ParkedCar('codigo', 'AABB-1234', undefined)
    expect(createCar).toThrow(Error)
  })
})