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
    data.slice(0, 20).forEach((item) => {
      const product = new Product(
        item.title,
        item.price,
        item.description,
        item.image
      );
      productList.push(product);
    });

    const main = document.querySelector("main");

    const productCards = productList.map((product) => {
      const productCard = document.createElement("div");
      productCard.classList.add("product-card");
    
      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.title;
    
      const productTitle = document.createElement("h2");
      productTitle.textContent = product.title;
    
      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;
    
      const productPrice = document.createElement("h3");
      productPrice.textContent = `$${product.price.toFixed(2)}`;
    
      productCard.appendChild(productImage);
      productCard.appendChild(productTitle);
      productCard.appendChild(productDescription);
      productCard.appendChild(productPrice);
    
      return productCard;
    });
    
    main.append(...productCards);
    
    });

