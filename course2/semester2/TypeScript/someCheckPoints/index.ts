// class Gadget {
//   par: string;
//   txt: string;
//   isBord: boolean;
//   constructor(){
//     console.log('console - gadget')
//   }
// }

// class Phone extends Gadget {
//   constructor(){
//     super()
//     console.log('console - phone')
//   }
// }
// class Tablet extends Gadget {
//   position: string;
//   size: number;
//     constructor(){
//     super()
//     console.log('console - tablet')
//   }
// }
// class Desctop extends Gadget {
//   position: string;
//   size: number;
//   isFullScreen: boolean;
//     constructor(){
//     super()
//     console.log('console - desctop')
//     }
//   set changeSize(s){
//     this.size = s
//   }
  
// }

// const gadgets: Gadget[] = []
// gadgets[0] = new Phone()
// gadgets[1] = new Tablet()
// gadgets[2] = new Desctop()


// let phone = <Phone>gadgets[0]
// phone.par = "smth"
// phone.txt = 'anth'
// phone.isBord = true

// let tablet = <Tablet>gadgets[1]
// tablet.par = "smth2"
// tablet.txt = 'anth2'
// tablet.isBord = false
// tablet.position = 'vert'
// tablet.size = 500

// let desctop = <Desctop>gadgets[2]
// desctop.par = "smth3"
// desctop.txt = 'anth3'
// desctop.isBord = true
// desctop.position = 'gor'
// desctop.size = 1500
// desctop.isFullScreen = false

// console.log(phone)
// console.log(tablet)
// console.log(desctop)

// desctop.changeSize = 1200
// console.log(desctop)


// class Stationery {
//  price: number;
//  isOnPlace: boolean;
//  ind: number;
//   constructor();
//   constructor(price: number, isOnPlace: boolean, ind: number);
//   constructor(price?: number, isOnPlace?: boolean, ind?: number){
//     this.price = price || -1;
//     this.isOnPlace = isOnPlace || false;
//     this.ind = ind || -1;
//   }
// }

// class Pen extends Stationery {
//   color: string;
//   width: number;
//   constructor();
//   constructor(el1: string, el2: number);
//   constructor(el1?: string, el2?: number){
//    super()
//    this.color = el1 || 'white'
//    this.width = el2 || 12
//  }

//   displayPen(){
//     console.log(`pens info: ${this.ind} ${this.color} ${this.width}`)
//   }
// }
// class Pencil extends Stationery {
//   mat: string;
//   isEraser: boolean;
//   constructor();
//   constructor(el1: string, el2: boolean);
//   constructor(el1?: string, el2?: boolean){
//    super()
//    this.mat = el1 || 'air'
//    this.isEraser = el2 || false
//  }

//     displayPencil(){
//     console.log(`pencils info: ${this.ind} ${this.mat} ${this.isEraser}`)
//   }
// }
// class Notebook extends Stationery {
//   numOfLists: number;
//   height: number;
//   constructor();
//   constructor(el1: number, el2: number);
//   constructor(el1?: number, el2?: number){
//    super()
//    this.numOfLists = el1 || 18
//    this.height = el2 || 16
//  }

//     displayNotebook(){
//     console.log(`notebook info: ${this.ind} ${this.numOfLists} ${this.height}`)
//   }
// }

// const stationeries: Stationery[] = []
// let pen;
// let pencil;
// let notebook;

// stationeries[0] = new Pen('red', 12)
// if(stationeries[0] instanceof Pen){
//   pen = <Pen>stationeries[0]
//   pen.price = 23
//   pen.isOnPlace = true
//   pen.ind = 44
// }

// stationeries[1] = new Pencil('',true)
// if(stationeries[1] instanceof Pencil){
// pencil = <Pencil>stationeries[1]
// pencil.price = 34
// pencil.isOnPlace = true
// pencil.ind = 2
// }
  
// stationeries[2] = new Notebook(4, 20)
// if(stationeries[2] instanceof Notebook){
// notebook = <Notebook>stationeries[2]
// notebook.price = 3490
// // notebook.isOnPlace = true
// // notebook.ind = 2
// }

// pen.displayPen()
// console.log(pen)

// pencil.displayPencil()
// console.log(pencil)

// notebook.displayNotebook()
// console.log(notebook)


// class Graph {
//   arr: [];
//   name: string;
//   draw(){
//     console.log('based!')
//   }
// }
// class LineGraph extends Graph {
//   draw(){
//     console.log(`линейный график ${this.name} с координатами: ${this.arr}`)
//   }
// }
// class Chart extends Graph {
//   draw(){
//     super.draw()
//     console.log(`круговая диаграмма ${this.name} с координатами: ${this.arr}`)
//   }
// }
// class Bar extends Graph {
//   draw(){
//     console.log(`столбиковый график ${this.name} с координатами: ${this.arr}`)
//   }
// }

// const graphs: Graph[] = []
// graphs[0] = new LineGraph()
// let lineGraph = graphs[0]
// lineGraph.arr = [1,2,3]
// lineGraph.name = 'gr1'
// lineGraph.draw()
// console.log(lineGraph)

// graphs[1] = new Chart()
// let chart = graphs[1]
// chart.arr = [1,2,3,4,5,6]
// chart.name = 'gr2'
// chart.draw()
// console.log(chart)

// graphs[2] = new Bar()
// let bar = graphs[2]
// bar.arr = [1,2,3,7,8,9,0]
// bar.name = 'gr3'
// bar.draw()
// console.log(bar)

// class Nota {
//   private ind: number;
//   private name: string;
//   private time: number;
//   private isDiez: boolean;
//   private isBemol: boolean;
  
//   get getInd(){ return this.ind }
//   get getName(){ return this.name }
//   get getTime(){ return this.time }
//   get getD(){ return this.isDiez }
//   get getB(){ return this.isBemol }

//   set setInd(val: number){ this.ind = val }
//   set setName(val: string){ this.name = val }
//   set setTime(val: number){ this.time = val }
//   set setD(val: boolean){ this.isDiez = val }
//   set setB(val: boolean){ this.isBemol = val }  
// }

// class Do extends Nota {
  
// }
// class Re extends Nota {
  
// }
// class Mi extends Nota {
  
// }
// class Fa extends Nota {
  
// }
// class Sol extends Nota {
  
// }
// class Lya extends Nota {
  
// }
// class Si extends Nota {
  
// }

// const notas: Nota[] = []

// notas[0] = new Do()
// let doo = notas[0]
// console.log(`было ${doo.getName}`)
// doo.setName = 'doo1'
// console.log(`стало ${doo.getName}`)
// doo.setInd = 1001
// doo.setTime = 123
// doo.setB = true
// doo.setD = false
// console.log(doo)

// notas[1] = new Re()
// let re = notas[1]
// re.setName = 'Ree2'
// re.setInd = 2002
// re.setTime = 124
// re.setB = true
// re.setD = true
// console.log(re)


// notas[2] = new Mi()
// let mi = notas[2]
// mi.setName = 'Mii3'
// mi.setInd = 3003
// mi.setTime = 125
// mi.setB = false
// mi.setD = false
// console.log(mi)

// notas[3] = new Fa()
// let fa = notas[3]
// fa.setName = 'Faa4'
// fa.setInd = 4004
// fa.setTime = 126
// fa.setB = true
// fa.setD = true
// console.log(fa)

// notas[4] = new Sol()
// let sol = notas[4]
// sol.setName = 'Sool5'
// sol.setInd = 5005
// sol.setTime = 127
// sol.setB = false
// sol.setD = true
// console.log(sol)

// notas[5] = new Lya()
// let lya = notas[5]
// lya.setName = 'lyaa6'
// lya.setInd = 6006
// lya.setTime = 128
// lya.setB = true
// lya.setD = false
// console.log(lya)

// notas[6] = new Si()
// let si = notas[6]
// si.setName = 'Sii7'
// si.setInd = 7007
// si.setTime = 129
// si.setB = true
// si.setD = true
// console.log(si)


////

