// 类的基本实例

// class Greeter {
//     greeting: string

//     constructor(message: string) {
//         this.greeting = message
//     }

//     greet(){
//         return 'hello,' + this.greeting
//     }
// }

// let greeter = new Greeter('jianghui');
// greeter.greet()

// 类的继承
// class Animal {
//     move(distance: number = 0) {
//         console.log(`animal moved ${distance}`)
//     }
// }

// class Dog extends Animal {
//     bark() {
//         console.log('woof')
//     }
// }
// const dog = new Dog()
// dog.bark();
// dog.move(20)

class Animal {
    name: string

    constructor(name: string) {
        this.name = name
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance}`)
    }
}

class Snake extends Animal {
    constructor(name: string){
        super(name)
    }
    move(distance: number = 5) {
        console.log('蛇蛇')
        super.move(distance) // 调用父类的move
    }
}
class Horse extends Animal {
    constructor(name: string){
        super(name)
    }
    move(distance: number = 45) {
        console.log('马马')
        super.move(distance) // 调用父类的move
    }
}
let snake= new Snake('xiaoshe');
let horse: Animal= new Horse('小马');

snake.move()
horse.move(23)