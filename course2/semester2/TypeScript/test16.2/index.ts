class TypeAOutlet {
    typeAElec() {
        return "15A"
    }
    typeAVoltage() {
        return '127-200'
    }
}
class TypeAPlug {
    electricity: string | null;
    voltage: string | null;
    constructor() {
        this.electricity = null
        this.voltage = null
    }
    plugInto(outlet: TypeAOutlet) {
        this.electricity = outlet.typeAElec()
        this.voltage = outlet.typeAVoltage()
        return 'Plugged!'
    }
}
const outletA = new TypeAOutlet()
const plugA = new TypeAPlug()
console.log(plugA.plugInto(outletA))

class TypeCOutlet {
    typeCElec() {
        return "2.5A"
    }
    typeCVoltage() {
        return '220-240'
    }
}

class A2CAdapter extends TypeAOutlet {
    typeCOutlet: TypeCOutlet
    constructor(typeCOutlet) {
        super()
        this.typeCOutlet = typeCOutlet
    }
    typeAElec() {
        return this.typeCOutlet.typeCElec()
    }
    typeCVoltage() {
        return this.typeCOutlet.typeCVoltage()
    }
}

const outletC = new TypeCOutlet()
// console.log(plugA.plugInto(outletC))
const adapter = new A2CAdapter(outletC)
console.log(plugA.plugInto(adapter))
