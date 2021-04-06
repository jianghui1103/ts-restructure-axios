class Greeter {
    static s = 'heel'

    greeting: string

    constructor(message?: string) {
        this.greeting = message
    }

    greet() {
        if(this.greeting) {
            return 'hello' + this.greeting
        }else{
            return Greeter.s
        }
    }
}

let greeter: Greeter
greeter = new Greeter()
console.log(greeter.greet())

// 对静态属性修改
let greetMaker: typeof Greeter = Greeter
greetMaker.s = 'hey'

let getters2: Greeter = new greetMaker;
console.log(getters2.greet())

// ts 允许把类当成接口
class Point {
    x: number
    y: number
}

interface Point3d extends Point {
    z: number
}

let point3d: Point3d = { x:1,y:2,z:3 }