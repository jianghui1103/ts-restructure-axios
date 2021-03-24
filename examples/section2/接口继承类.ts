class control {
    private state: any
}
interface selectControl extends control {
    select()
}
class Button extends control implements selectControl {
    select(){

    }
}

class text extends control {
    select(){

    }
}

// 报错， 因为image没有继承control
// class image implements selectControl {
//     select() {

//     }
// } 