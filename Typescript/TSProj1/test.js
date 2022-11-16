let count = 10
let username = 'zs'

function add(x, y) {
    return x + y
}

function changeDirection(direction) {
    console.log(direction)
}

const formatPoint = point => {
    console.log('position: ', point)
}

export { count, username, add, changeDirection, formatPoint }