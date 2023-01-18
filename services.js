const addProducts = (products) => {
  //arrow function
  let p1 = {
    libelle: "ballon",
    prix: 500,
    quantite: 50,
  };
  let p2 = {
    libelle: "panthalon",
    prix: 20,
    quantite: 2,
  };
  products.push(p1);
  products.push(p2);
};

const viewProducts = (products) => {
  console.log(products);
};

const deleteProduct = (libelle, products) => {
  const result = products.filter((product) => {
    if (product.libelle !== libelle) {
      return true;
    }
  });
  return result;
};

const updateProduct = (product, index, products) => {
  //if (index<-1 && index<products.length)
  //raisonement else if
  if (!(index < 0 || index > products.length)) {
    products[index] = product;
  }
};

const sortProducts = (products) => {
  let criteria = (p1, p2) => {
    return p2.prix - p1.prix;
  };
  products.sort(criteria);
};

module.exports = {
  addProducts,
  viewProducts,
  deleteProduct,
  updateProduct,
  sortProducts,
};
