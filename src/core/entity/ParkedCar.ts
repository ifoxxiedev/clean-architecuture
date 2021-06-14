// SOLID ( Coeso, Desacoplado, Objeto Rico, Facilita os testes)
export class ParkedCar {
  code: string;
  plate: string;
  date: Date

  constructor(code: string, plate: string, date: Date) {
    if (!code) throw new Error('Code is required for a parked car')

    if (!/^[A-Z]{3}[-][0-9]{4}/.test(plate)) throw new Error('Invalid plate')
    if (!date) throw new Error('Date is required for a paked car')
    // AAA-2025

    this.code = code;
    this.plate = plate;
    this.date = date;
  }
}