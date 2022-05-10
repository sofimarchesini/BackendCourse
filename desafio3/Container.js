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
        this.readFile();
        var contId = 0;
        for (let i = 0; i < this.cont.length; i++) {contId+=1;}
        prod["id"] = contId+1;
        this.cont.push(prod);
        this.writeFile();  
        return prod["id"]
    }

    getById(id) {
        try { return this.cont.find(obj => obj.id === id || null);}
        catch(error) {console.log("The id is not correct");}
    }

    getAll() {
      this.readFile();
      return this.cont}

    deleteById(id){
        var removeIndex = this.cont.map(item => item.id).indexOf(id);
        ~removeIndex && this.cont.splice(removeIndex, 1);    
    }

    deleteAll() {
        this.cont = ""
        this.writeFile()
    }

    updateById(id,prod) { 
        try { this.cont[this.cont.findIndex(obj => obj.id === id)] = prod;}
        catch(error) {console.log(error, ":producto no encontrado");}
    }
}


module.exports = Container;