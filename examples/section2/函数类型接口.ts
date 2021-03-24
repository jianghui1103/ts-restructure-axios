// 函数类型接口
interface SquareFnc {
    (source: string, subString: string): boolean
    // 参数类型                         返回值类型
}

let mySearch: SquareFnc;
// mySearch = function(source: string,subString: string): boolean {
//     return true;
// }
// 会自动推断类型
mySearch = function(source,subString) {
    return true;
}