// number 1

class Point3D {
    x: number;
    y: number;
    z: number;
}
let point1: Point3D = new Point3D()
point1.x = 1;
point1.y = -2;
point1.z = 3;
console.log("point1:", point1)

let point2: Point3D = new Point3D()
point2.x = 7;
point2.y = -8;
point2.z = 9;
console.log("point2:", point2)

let point3: Point3D = new Point3D()
point3.x = 213;
point3.y = -20;
point3.z = 0;
console.log("point3:", point3)

// number 2

class Line {
    start: number;
    finish: number;
}

let line1: Line = new Line()
line1.start = 0;
line1.finish = 100;
console.log("line1:", line1)

let line2: Line = new Line()
line2.start = 4565;
line2.finish = 4569;
console.log("line2:", line2)