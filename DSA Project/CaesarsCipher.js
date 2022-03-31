function rot13(str) {
    const abjad = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (abjad.indexOf(str[i]) === -1) {
            result += str[i]
        } else {

            let posisiAwal = abjad.indexOf(str[i]);
            console.log(posisiAwal)
            let posisiAkhir = (posisiAwal + 13) % 26
            console.log(posisiAkhir)
            result += abjad[posisiAkhir]
        }


    }
    return result
}

console.log(rot13('SERR PBQR PNZC')) //FREE