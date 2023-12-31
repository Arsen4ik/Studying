class Student {
    name: string;
    constructor(name: string) {
        this.name = name
    }
}
class Group {
    name: string;
    private students: Student[] = [];
    constructor(name: string) {
        this.name = name
    }
    addStudent(student: Student): void {
        this.students.push(student);
    }
}

let group = new Group('2Р2')
const arsen = new Student('Арсен')
const timur = new Student('Тимур')
group.addStudent(arsen)
group.addStudent(timur)
console.log(group)
group = new Group('')
console.log(group)


class Room {
    area: number;
    name: string;
    constructor(area: number) {
        this.area = area
    }
}

class Flat {
    private rooms: Room[] = []

    constructor(roomAreas: number[]) {
        for (let area of roomAreas) {
            this.rooms.push(new Room(area))
        }
    }
}
let flat = new Flat([18, 14, 22])
console.log(flat)