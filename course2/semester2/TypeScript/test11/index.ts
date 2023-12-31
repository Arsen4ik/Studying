class GUI { }

class Rectangle {
    private gui: GUI
    constructor() {
        this.gui = new GUI
    }
    draw(): GUI {
        return this.gui
    }
    area() { }
}
class CGA {
    private rect: Rectangle;
    constructor() {
        this.rect = new Rectangle();
    }
    createRect() {
        return this.rect.draw()
    }
}

class Order { }
// class OrderReport {
//   public getOrderInfo(startDate: Date, endDate: Date): Order{}
//   protected getOrdersFromDb(startDate: Date, endDate: Date): Order[]{}
//   protected format(orders: Order[]): void {}
// }
class OrderStore {
    getOrdersFromDb(startDate: Date, endDate: Date): Order[] { }
    setOrdersFromDb(order: Order): boolean { }
}
class Formatter {
    format(order: Order): void { }
}

class OrderReport {
    private store: OrdersStore
    private formatter: Formatter
    constructor(store: OrdersStore, formatter: Formatter) {
        this.store = store
        this.formatter = formatter
    }
    getOrderInfo(startDate: Date, endDate: Date): Order { }
}

class Invoice {
    calculateTotal()
    saveToFile()
    printInvoice()
}