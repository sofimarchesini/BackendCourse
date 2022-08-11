import fs from 'fs';

class Container
{
    constructor(fileName)
    {
        this.fileName = fileName,
        this.cont = []
    }

    readFile(){
        try{
            var file = fs.readFileSync(this.fileName, "utf-8")
            if(file) {
                this.cont = file;
                this.cont = JSON.parse(this.cont);
            }
        } catch(error) {console.log(error)}
    }

    async writeFile() { 
        if(this.cont==="") await fs.promises.writeFile(this.fileName, this.cont);
        await fs.promises.writeFile(this.fileName, JSON.stringify(this.cont));
    }

    save(prod){
        console.log(prod)
        this.readFile();
        const data =  this.getAll();
        prod.id =  Math.max(...data.map(prod=>prod.id)) + 1;
        this.cont.push(prod);
        this.writeFile();  
        return prod["id"]
    }

    getById(id) {
        this.readFile();
        return this.cont.find(obj => obj.id == id || null)
    }

    getAll() {
      this.readFile();
      return this.cont}

    deleteById(id){
        try {
            if (this.getById(id)){
                this.readFile()
                let index = this.cont.findIndex(product => product.id == id);
                if(index >= 0) this.cont.splice(index, 1);
                this.writeFile() 
                return id
            }
        }catch(err){
            console.log(err)
        }
    }

    deleteAll() {
        this.readFile()
        this.cont = ""
        this.writeFile()
    }

    updateProd(id,prod) { 
        this.readFile()
        if (this.getById(id)) this.cont[this.cont.findIndex(obj => obj.id == id)] = prod;
        else console.log("error : Product not found")
        this.writeFile()
    }
}

export default Container;