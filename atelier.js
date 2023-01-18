const { addProducts, viewProducts, deleteProduct, updateProduct, sortProducts } = require("./services");
let products = []; // un array des products
addProducts(products);
viewProducts(products);
console.log("product deleted!");
products = deleteProduct("ballon", products);
viewProducts(products);
const p3={
    libelle: "sphere",
    prix: 10,
    quantite: 990,
}
console.log("after updates");
updateProduct(p3,0,products);
addProducts(products);
viewProducts(products);
console.log("after sort");
sortProducts(products);
viewProducts(products);

