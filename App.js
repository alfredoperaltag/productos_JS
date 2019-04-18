class Product {
    constructor(name, price, year) {
        this.name = name;
        this.price = price;
        this.year = year;
    }
}

class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
        <div class="card text-center mb-4">
            <div class="card-body">
                <strong>Nombre del Producto</strong>: ${product.name}
                <strong>Precio del Producto</strong>: ${product.price}
                <strong>Año del Producto</strong>: ${product.year}
            </div>
        </div>`;
        productList.appendChild(element);
    }
    deleteProduct() {

    }
    showMessage() {

    }
}
// DOM Events
document.getElementById('product-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const year = document.getElementById('year').value;

    const product = new Product(name, price, year);
    console.log(product);
    const ui = new UI();
    ui.addProduct(product);



    e.preventDefault();
});