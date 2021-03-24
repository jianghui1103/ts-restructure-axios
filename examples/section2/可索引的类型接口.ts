// 可索引的类型
interface StringArray {
    [index: number]: string
    // 当使用索引地址去获取参数时， 会得到一个string 类型的返回值
}

let myArray: StringArray;
myArray = ['objb','222'];
let myStr: string = myArray[1]

interface Number {
    [index: string] : number // 这个时候所有值都为number
    length: number
    name: number // 若给name 定义为string 就不可编译通过
}

interface Readonly1 {
    readonly [index: number] : string // 索引签名为只读的
}
let myArray2: Readonly1 = ['2','3']
myArray2