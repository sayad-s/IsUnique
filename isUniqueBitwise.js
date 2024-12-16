function isUnique_bitwise(str) {
    const unicodeSize = 155063;
    const size = Math.ceil(155063 / 32);
    let arr = new Array(size).fill(0);
    for (let i = 0; i < str.length; ++i) {
        let code = str.codePointAt(i);
        let place = 0;
        if (code % 32 === 0) {
            place = Math.floor(code / 32) - 1;
        }

        let bit = Math.pow(2, code % 32);

        if ((arr[place] >> code % 32) & 1 == 1) {
            return false;
        }
        arr[place] |= bit;
    }

    return true;
}

// console.log(isUnique_bitwise('bitws@e&$'));