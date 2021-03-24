// 实例接口
// interface ClockInterFace { 
//     currentTime: Date
//     setTime(d: Date)
// }
// 构造器接口
// interface ClockContructor {
//     new(hour: number, minute: number)
// }

// class Clock implements ClockInterFace {
//     currentTime: Date
//     constructor(h: number, m:number) {

//     }
//     setTime(d: Date) {
//         this.currentTime = d;
//     }
// }

interface ClockInterFace {
    tick()
}
interface ClockContructor {
    new(hour: number, minute: number): ClockInterFace
}

function createClock( ctor: ClockContructor, hour: number, minute: number): ClockInterFace{
    return new ctor(hour, minute)
}

class DigClock implements ClockInterFace {
    constructor(hour: number, minute: number) {

    }
    tick() {
        console.log('222')
    }
}

class AnClock implements ClockInterFace {
    constructor(hour: number, minute: number) {

    }
    tick() {
        console.log('1111')
    }
}

let di = createClock(DigClock, 12 ,17);
let an = createClock(AnClock,13,21);