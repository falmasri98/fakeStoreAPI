class Product {
    constructor(title, price, description, image) {
      this.title = title;
      this.price = price;
      this.description = description;
      this.image = image;
    }
  }
  
  const productList = [];
  
  fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 20; i++) {
        const product = new Product(
          data[i].title,
          data[i].price,
          data[i].description,
          data[i].image
        );
        productList.push(product);
      }
  
      const main = document.querySelector("main");
      main.innerHTML = productList
        .map(
          (product) =>
            `<div class="product-card">
              <img src="${product.image}" alt="${product.title}" />
              <h2>${product.title}</h2>
              <p>${product.description}</p>
              <h3>$${product.price.toFixed(2)}</h3>
            </div>`
        )
        .join("");
    });
  