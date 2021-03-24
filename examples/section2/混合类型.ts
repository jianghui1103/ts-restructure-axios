interface Counter {
    (start: number): string //函数

    interval: number
    reset(): void
}

function getCounter(): Counter {
    let counter = (function (star: number){

    }) as Counter

    counter.interval = 123;

    counter.reset = function() {

    }
    return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 123;
