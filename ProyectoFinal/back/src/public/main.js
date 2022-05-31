
const socket = io();
const divMessages = document.querySelector("#messages");
const divProducts = document.querySelector("#products")
const buttonProduct = document.querySelector("#buttonAddProd")
const buttonChat = document.querySelector("#buttonAddUser")


buttonProduct.addEventListener("click", (event) =>{
    const nombreProd = document.querySelector("#nombreProducto").value
    const nombrePrecio = document.querySelector("#nombrePrecio").value
    const nombreFoto = document.querySelector("#nombreFoto").value
    const nombreDescripcion = document.querySelector("#nombreDescripcion").value
    const nombreStock = document.querySelector("#nombreStock").value
    const nombreCodigo = document.querySelector("#nombreCodigo").value
    var date = new Date()

    const prod = {
        "title":nombreProd,
        "price":nombrePrecio,
        "thumbnail":nombreFoto,
        "description":nombreDescripcion,
        "stock":nombreStock,
        "code":nombreCodigo,
        "timestamp": date
    };
    socket.emit("newProduct",prod);
})

socket.on("products",(products)=>{
    console.log(products)
    if(products.length != 0){
        products.map(product =>{  
            divProducts.innerHTML =   `<div class="card" style="width: 350px; margin: 30px">
                    <div class="row">
                        <div class="col-7">
                        <div class="card-image" style="padding: 15px">
                            <figure class="image is-4by3">
                            <img style="width:100%" src=${product.thumbnail} alt="Placeholder image" />
                            </figure>
                        </div>
                        </div>  
                        <div class="col-3">
                        <div class="card-content">
                            <div class="media">
                            <div class="media-content">
                                <p class="title is-4">${product.title}</p>
                                <p class="subtitle is-6">${product.price}</p>
                                <p class="subtitle is-6">${product.description}</p>
                                <p class="subtitle is-6">${product.stock}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>`  
        })
    }else{
        `<div style=" text-align: center">No products</div>`
    }
})

buttonChat.addEventListener("click", (event) =>{
    const author = document.querySelector("#email").value
    const text = document.querySelector("#textToSend").value
    const message = {"author":author, "text": text};
    socket.emit("newMessage",message);
})

socket.on("messages",(messages)=>{

    if(messages.length>0){
        const div = document.createElement("div")
        messages.forEach(message =>{
            div.innerHTML =  `<div class="row" style="width:100%" >
            <strong class="p-3"style="color:blue">${message.author}</strong>
            <p class="p-3" style="color:brown">${message.date}</p>
            <p class="p-3" style="color:green">${message.text}</p>
        </div>`
            divMessages.appendChild(div)
        })
    }
    else{
        divMessages.innerHTML = ''
    }
})