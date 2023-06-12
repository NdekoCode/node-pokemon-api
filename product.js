export function getProducts() {
  return new Promise((resolve, reject) => {
    const products = ["Tomates", "Onions", "oil", "Rice", "salt"].map(
      (val, i) => ({ id: i + 1, name: val })
    );
    resolve(products);
  });
}
