abstract class depart {
    name: string
    constructor(name: string) {
        this.name = name
    }

    printName():void {
        console.log('Name' + this.name)
    }

    abstract printMeet():void 
}

class count extends depart {
    constructor() {
        super('22')
    }
    printMeet():void {
        console.log('count')
    }

    genter():void {
        console.log('genter')
    }
}

let dp: depart
// 抽象类不能被实例化
dp = new count()
dp.printName()
dp.printMeet()