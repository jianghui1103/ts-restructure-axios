// interface接口 
interface LabelledValue {
    lable : string
}

function printLabel(labelObj: LabelledValue) {
    console.log(labelObj.lable)
}
let obj = {size:10 , lable: '2222'}
printLabel(obj)

// 接口可选属性
interface Square {
    color: string,
    area: number
}
interface SquareConfig {
    color?: string,
    width?: number
}

function createSquare(config: SquareConfig): Square {
    let newSquare = { color: '#fff', area: 10 };
    if(config.color) {
        newSquare.color = config.color
    }
    if(config.width) {
        newSquare.area = config.width * config.width  
    }
    return newSquare
}

// 接口只读属性 在创建时定义
interface Point {
    readonly x: number
    readonly y: number
}
let p1: Point = {x:10, y:20} // 只允许在这个时候创建
// p1.x = 100 此时会报错