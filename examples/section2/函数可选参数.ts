function fn(a: string,b?: string):string {
    return a + b;
}

function fn1(a='will',b: string):string {
    return a + b;
}

function fn2(a:string, ...b:string[]):string {
    return a
}

let buildFn: (a: string, ...b: string[]) => string= fn2

let a = fn('a','b')
let b = fn1('a','b')