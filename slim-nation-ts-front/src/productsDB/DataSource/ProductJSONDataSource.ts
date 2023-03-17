const jsonfile = require('jsonfile')
const file = "../products.json"

export function getAll() {
    try {
        let data =[]
        const dataString = jsonfile.readFileSync(file);
        if (dataString) { data = JSON.parse(dataString) }
        return Promise.resolve({ error: null, result:data})
    } catch (err:any) {
       return Promise.resolve({error: err.message,result:null}) 
    }
}