const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}


document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  fetch('products.json')
      .then(response => response.json())
      .then(products => {
          const product = products.find(p => p.id == productId);
          if (product) {
              document.getElementById('product-name').textContent = product.name;
              document.getElementById('product-image').src = product.image;
              document.getElementById('smallimg-1').src = product.smallimg[0];
              document.getElementById('smallimg-2').src = product.smallimg[1];
              document.getElementById('product-discription').textContent = product.description;
              document.getElementById('product-price').textContent = product.price;
              
          } else {
              document.getElementById('product-container').textContent = 'Product not found';
          }
      })
      .catch(error => console.error('Error fetching product data:', error));
});