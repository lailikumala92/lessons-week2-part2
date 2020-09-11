

const name = ['abigail', 'alexandra', 'alison',
                        'amanda', 'angela', 'bela',
                        'carol', 'caroline', 'carolyn',
                        'deirdre', 'diana', 'elizabeth',
                        'ella', 'faith', 'olivia', 'penelope']

let newName = []
serachName = (findName, maxArr, callback) => {
    let reg = new RegExp(findName, 'x')
    for(let x =0; x<name.length; x++) {
        if(reg.test(name[x]) === true) {
            newName.push(name[x])
        }
    }
    callback(newName.splice(0, maxArr))
}
callback = (text) => {
    console.log(text);
}
serachName('an', 3, callback)

