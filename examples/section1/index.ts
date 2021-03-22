enum Color {
    Red = 1,
    Green,
    Blue,
}

let colorName:string = Color[2]


// never 一个从来不会有返回值的函数（如：如果函数内含有 while(true) {}）；
//  一个总是会抛出错误的函数（如：function foo() { throw new Error('Not Implemented') }，foo 的返回类型是 never）；


declare function create(o: object | null): void;
create({prop: 0})
create(null)

// 强制转换类型 将someValue转换成string类型
let someValue: any = 'this.is a string';
// let strLength:number = (<string>someValue).length;
let strlength:number = (someValue as string).length

// 第一个参数为string 第二个参数为可传可不传的number类型
// type C = {a: string, b?: number }
// function f({a,b}: C):viod{}
// f({a: '2'})
// 等价于
function f({a,b = 0} = {a: ''}):viod{}
f({a: '2'})