// interface IBird {
//   // fly(){
//   //   console.log('flying!!!')
//   // }
//   eat(): void
//   walk(): void
//   chirp(): void
// }
// interface IFlyingBird extends IBird {
//   fly(): void
// }
// function flying(bird: IFlyingBird){
//   bird.fly()
// }

// class Eagle implements IFlyingBird {
//   // eat(): void {}
//   // walk(): void {}
//   // chirp(): void {}
//   // fly(): void
// }
// const eagle = new Eagle()
// flying(eagle)

// class Ostrich implements IBird {
//   //   eat(): void {}
//   // walk(): void {}
//   // chirp(): void {}
// }
// const ostrich = new Ostrich()
// // flying(ostrich)


// interface Workable {
//   work(): void
// }
// interface Sleepable {
//   sleep(): void
// }

// class HumanWorker implements Workable, Sleepable {
//   work(): void {}
//   sleep(): void {}
// }
// class RobotWorker implements Workable {
//     work(): void {}
// }


// class Car{}
// interface ParkingLot {}
// interface FreeParkingLot extends ParkingLot {
//   parkCar(): void
//   unparkCar(): void
//   getCapacity(): number
// }
// interface PaidParkingLot extends ParkingLot {
//   calculateFee(car: Car): number
//   doPayment(car: Car): void
// }
// class PaidParking implements PaidParkingLot{}
// class FreeParking implements FreeParkingLot{}

// interface HourlyParjingLot extends PaidParkingLot{}
// interface ConstParkingLot extends PaidParkingLot



interface PersonInterface {
    abstract getInfo(): void;
    abstract getStatus(): void;
    abstract getFIO(): void;
  }
  
  // interface Job extends PersonInterface {
  //   getInfo(): void;
  //   getStatus(): void;
  //   getFIO(): void;
  // }
  
  
  class Supervisers implements PersonInterface  {
        FIO: string
      BirthYear: number
      address: string
    status: string
    place: string
    phone: number
    constructor(FIO: string, status: string, BirthYear: number, place: string, phone: number, address: string){
      this.FIO = FIO
      this.status = status
      this.BirthYear = BirthYear
      this.place = place
      this.phone = phone
      this.address = address
    }
    getInfo(): void {
      console.log(this.place, this.phone,           this.BirthYear, this.address)
    }
    getStatus(): void {
      console.log(this.status)
    }
    getFIO(): void {
     console.log(this.FIO) 
  }
  }
  
  class Jobs implements PersonInterface {
    FIO: string
    status: string
    BirthYear: number
    place: string
    phone: number
    address: string
    constructor(FIO: string, status: string, BirthYear: number, place: string, phone: number, address: string){
      this.FIO = FIO
      this.status = status
      this.BirthYear = BirthYear
      this.place = place
      this.phone = phone
      this.address = address
    }
      getInfo(): void {
      console.log(this.place, this.phone,           this.BirthYear, this.address)
    }
    getStatus(): void {
      console.log(this.status)
    }
    getFIO(): void {
     console.log(this.FIO) 
  }
  }
  
  class Clients implements PersonInterface {
    FIO: string
    status: string
    BirthYear: number
    place: string
    phone: number
    address: string
    constructor(FIO: string, status: string, BirthYear: number, place: string, phone: number, address: string){
      this.FIO = FIO
      this.status = status
      this.BirthYear = BirthYear
      this.place = place
      this.phone = phone
      this.address = address
    }
      getInfo(): void {
      console.log(this.place, this.phone,           this.BirthYear, this.address)
    }
    getStatus(): void {
      console.log(this.status)
    }
    getFIO(): void {
     console.log(this.FIO) 
  }
  }
  
  const boss = new Supervisers('FFF', 'rule', 1234, 'center', 77777, 'ul.Pushkina')
  console.log(boss)
  boss.getFIO()
  boss.getStatus()
  boss.getInfo()
  
  const job = new Jobs('AAA', 'work', 5678, 'no-center', 99999, 'ul.Lenina')
  console.log(job)
  job.getFIO()
  job.getStatus()
  job.getInfo()
  
  const client = new Clients('BBB', 'see', 2222, 'home', 111111, 'ul.Gagarina')
  console.log(client)
  client.getFIO()
  client.getStatus()
  client.getInfo()
  
  ///
  
  // interface PersonInterface {
  //   abstract getInfo(): void;
  //   abstract getStatus(): void;
  //   abstract getFIO(): void;
  // }
  
  // // interface Job extends PersonInterface {
  // //   getInfo(): void;
  // //   getStatus(): void;
  // //   getFIO(): void;
  // // }
  // class Persons {
  //   FIO: string
  //   BirthYear: number
  //   address: string
  //   static count: number = 0
  //   static count_clients: number = 0
  // }
  
  // class Supervisers extends Persons implements PersonInterface {
  //   status: string
  //   place: string
  //   phone: number
  //   constructor(FIO: string, status: string, BirthYear: number, place: string, phone: number, address: string){
  //     super()
  //     this.FIO = FIO
  //     this.status = status
  //     this.BirthYear = BirthYear
  //     this.place = place
  //     this.phone = phone
  //     this.address = address
  //     Persons.count++
  //   }
  //   getInfo(): void {
  //     console.log(this.place, this.phone,           this.BirthYear, this.address)
  //   }
  //   getStatus(): void {
  //     console.log(this.status)
  //   }
  //   getFIO(): void {
  //    console.log(this.FIO) 
  // }
  // }
  
  // class Jobs extends Persons implements PersonInterface {
  //   FIO: string
  //   status: string
  //   BirthYear: number
  //   place: string
  //   phone: number
  //   address: string
  //   constructor(FIO: string, status: string, BirthYear: number, place: string, phone: number, address: string){
  //     super()
  //     this.FIO = FIO
  //     this.status = status
  //     this.BirthYear = BirthYear
  //     this.place = place
  //     this.phone = phone
  //     this.address = address
  //     Persons.count++
  //   }
  //     getInfo(): void {
  //     console.log(this.place, this.phone,           this.BirthYear, this.address)
  //   }
  //   getStatus(): void {
  //     console.log(this.status)
  //   }
  //   getFIO(): void {
  //    console.log(this.FIO) 
  // }
  // }
  
  // class Clients extends Persons implements PersonInterface {
  //   FIO: string
  //   status: string
  //   BirthYear: number
  //   place: string
  //   phone: number
  //   address: string
  //   constructor(FIO: string, status: string, BirthYear: number, place: string, phone: number, address: string){
  //     super()
  //     this.FIO = FIO
  //     this.status = status
  //     this.BirthYear = BirthYear
  //     this.place = place
  //     this.phone = phone
  //     this.address = address
  //     Persons.count_clients++
  //   }
  //     getInfo(): void {
  //     console.log(this.place, this.phone,           this.BirthYear, this.address)
  //   }
  //   getStatus(): void {
  //     console.log(this.status)
  //   }
  //   getFIO(): void {
  //    console.log(this.FIO) 
  // }
  // }
  
  // const boss = new Supervisers('FFF', 'rule', 1234, 'center', 77777, 'ul.Pushkina')
  // console.log(boss)
  // boss.getFIO()
  // boss.getStatus()
  // boss.getInfo()
  
  // const job = new Jobs('AAA', 'work', 5678, 'no-center', 99999, 'ul.Lenina')
  // console.log(job)
  // job.getFIO()
  // job.getStatus()
  // job.getInfo()
  
  // const job1 = new Jobs('AAA1', 'work1', 56781, 'no-center1', 999991, 'ul.Lenina1')
  // console.log(job1)
  // job1.getFIO()
  // job1.getStatus()
  // job1.getInfo()
  
  // const client = new Clients('BBB', 'see', 2222, 'home', 111111, 'ul.Gagarina')
  // console.log(client)
  // client.getFIO()
  // client.getStatus()
  // client.getInfo()
  
  
  // console.log(Persons.count)
  // console.log(Persons.count_clients)