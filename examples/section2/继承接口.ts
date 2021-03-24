interface shape {
    color: string
}
interface penStroke {
    penWidth: number
}

// square接口继承了shape接口
interface square extends shape, penStroke {
    width: number
}

let squre = {} as square;
squre.color = '2'
squre.width = 10
squre.penWidth = 10