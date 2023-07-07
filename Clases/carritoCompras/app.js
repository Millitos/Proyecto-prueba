
class ProductManager{
    constructor(){
        this._products = [];
    };

    get products(){
        return this._products;
    };

    addProduct(product){
        this._products.push(product);
    };

    removeProduct(index){ 
        //recorre la lista, tomando cada producto(objeto) y el indice de cada objeto en la lista (ind)
        this._products.forEach((product,ind)=>{
            if(product.id === index){//compara el indice del objeto recorrido con el indice del objeto clickeado
                this._products.splice(ind,1); //elimina el objeto segun su indice(ind)
            }
        })
        showProducts(productManager.products);
    }
}

class Product{
    constructor(id,name,price,quantity){
        this._id = id;
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    };

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    get price(){
        return this._price;
    }

    get quantity(){
        return this._quantity;
    }

    set price(newPrice){
        this._price = newPrice;
    }
}

const productManager = new ProductManager();

const form = document.querySelector('#form-productos');
const inputName = document.querySelector('#name');
const inputPrice = document.querySelector('#price');
const inputQuantity = document.querySelector('#quantity');
const tableProducts = document.querySelector('#tbody-products');
const payment = document.querySelector('#howmuch');

form.addEventListener('submit',function(e){
    e.preventDefault();

    if(inputName.value === '' || inputPrice.value === '' || inputQuantity.value === ''){
        alert('You have to fill all the inputs!!!')
        return
    }else{
        let Data = Object.fromEntries(new FormData(e.target));
        const product = new Product(Date.now() ,Data.name, Data.price, Data.quantity);
        productManager.addProduct(product);
        showProducts(productManager.products);
        console.log(product);
        form.reset();
    }

})

function showProducts(products){
    cleanHTML();

    products.forEach((product)=>{
        const {id,name,price,quantity} = product;

        const tr = document.createElement('tr');
        tr.setAttribute('id',id);
        tr.innerHTML = `<th scope="row">${id}</th>
                        <td>${name}</td>
                        <td>${price}</td>
                        <td>${quantity}</td>`;

        const delButton = document.createElement('button');
        delButton.onclick = () => productManager.removeProduct(id);
        delButton.textContent = "Delete"
        delButton.classList.add("btn","btn-danger");
        tr.append(delButton);
        
        tableProducts.appendChild(tr);
    })

}


function total(event){

    // cleanHTML();

    event.preventDefault();
    let totalPrice = 0;
    if(tableProducts.children.length > 0){
        //mostrar total
        const products = productManager.products;
        products.forEach((product)=>{
            totalPrice += product.price * product.quantity
        })
    }else{
        alert('There are no products on your bag yet!');
    }
    
    payment.innerHTML = `You have to pay $${totalPrice} bucks`; 
}


function cleanHTML(){
    tableProducts.innerHTML = '';
}