const repeatString = function (str, n) {

    let string = str;
    let counter = Number(n)
    let result = []


    for (let i = 0; i < counter; i++) {
        result.push(string)
    }

    
    if (counter >= 0) {
        return result.join('')
    } else {
        return 'ERROR'
    }


}


repeatString('hey', -1)

// Do not edit below this line
module.exports = repeatString;
