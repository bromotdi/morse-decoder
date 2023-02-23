const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

const decode = (expr) => {
    let res = ""
    for (let i = 0, j = 10; i < expr.length; i = i + 10, j = j + 10) {
        let num = expr.slice(i, j), sign = ""
        if (num === "**********") sign = sign + " "
        else {
            for (let a = 0, b = 2; a < 10; a = a + 2, b = b + 2) {
                if(num.slice(a, b) === "10") sign = sign + "."
                else if(num.slice(a, b) === "11") sign = sign + "-"
            }
        }
        (sign === " ") ? res = res + " " : res = res + MORSE_TABLE[sign]
    }
    return res
}

module.exports = {
    decode
}
