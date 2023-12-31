interface Logger {
    log(message: string): void;
}

type Point = number;
type Distance = number;
type Angle = number;
type Position = { x: Point; y: Point };
enum CarriageState {
    UP,
    DOWN
}
enum LineColor {
    BLACK = "чорный",
    RED = "красный",
    GREEN = "зелёный"
}
type PlotterState = {
    position: Position;
    angle: Angle;
    color: LineColor;
    carriageState: CarriageState;
};
type Printer = (s: string) => void;

class LogToConsole implements Logger {
    log(message: string): void {
        console.log(message);
    }
}

class Plotter {

    drawLine(prt: Printer, from: Position, to: Position, color: LineColor): void {
        prt(`Чертим линию из (${from.x}, ${from.y}) в (${to.x},${to.y}) используя ${color} цвет.`);
    }
    calcNewPosition(distance: Distance, angle: Angle, current:
        Position): Position {
        const angle_in_rads = angle * (Math.PI / 180.0) * 1.0;
        const x = current.x + distance * Math.cos(angle_in_rads);
        const y = current.y + distance * Math.sin(angle_in_rads);

        return { x: Math.round(x), y: Math.round(y) };
    }
    move(prt: Printer, distance: Distance, state: PlotterState): PlotterState {

        let newPosition = this.calcNewPosition(distance, state.angle, state.position);

        if (state.carriageState === CarriageState.DOWN) {

            this.drawLine(prt, state.position, newPosition, state.color);
        } else {
            prt(`Передвигаем на ${distance} от точки                             (${state.position.x},${state.position.y})`);
        }

        const retState = { ...state };
        retState.position = newPosition;
        return retState;
    }
    turn(prt: Printer, angle: Angle, state: PlotterState): PlotterState {
        prt(`Поворачиваем на ${angle} градусов`);

        const newAngle = (state.angle + angle) % 360.0;

        const retState = { ...state };
        retState.angle = newAngle;
        return retState;
    }
    carriageUp(prt: Printer, state: PlotterState): PlotterState {
        prt("Поднимаем каретку");

        const retState = { ...state };
        retState.carriageState = CarriageState.UP;
        return retState;
    }
    carriageDown(prt: Printer, state: PlotterState): PlotterState {
        prt("Опускаем каретку");

        const retState = { ...state };
        retState.carriageState = CarriageState.DOWN;
        return retState;
    }
    setColor(prt: Printer, color: LineColor, state: PlotterState): PlotterState {
        prt(`Устанавливаем ${color} цвет линии.`);

        const retState = { ...state };
        retState.color = color;
        return retState;
    }
    setPosition(prt: Printer, position: Position, state: PlotterState): PlotterState {
        prt(`Устанавливаем позицию каретки в (${position.x},                 ${position.y}).`);

        const retState = { ...state };
        retState.position = position;
        return retState;
    }
    drawTriangle(prt: Printer, size: number, state: PlotterState): PlotterState {
        state = carriageDown(prt, state);
        for (let i = 0; i < 3; ++i) {
            state = move(prt, size, state);
            state = turn(prt, 120.0, state);
        }
        return carriageUp(prt, state);
    }
    drawSquare(prt: Printer, size: number, state: PlotterState): PlotterState {
        state = carriageDown(prt, state);
        for (let i = 0; i < 4; ++i) {
            state = move(prt, size, state);
            state = turn(prt, 90.0, state);
        }
        return carriageUp(prt, state);
    }
    initializePlotterState(position: Position, angle: Angle, color: LineColor, carriageState: CarriageState): PlotterState {
        return {
            position: position,
            angle: angle,
            color: color,
            carriageState: carriageState
        }
    }
}




function drawTriangle(plt: Plotter, size: Distance, state: PlotterState): void {
    plt.setColor(console.log, LineColor.GREEN, state)
    for (let i = 0; i < 3; ++i) {
        state = plt.carriageDown(console.log, state)
        state = plt.move(console.log, size, state)
        state = plt.carriageUp(console.log, state)
        state = plt.turn(console.log, 120.0, state)
    }
}



const plotter = new Plotter(LogToConsole)
const initialState = plotter.initializePlotterState({ x: 0, y: 0 }, 0, LineColor.GREEN, CarriageState.UP);
drawTriangle(plotter, 100.0, initialState)