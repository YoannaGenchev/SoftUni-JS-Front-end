document.addEventListener('DOMContentLoaded', solve);

function solve()
{
   const addButtons = document.querySelectorAll('.add-product');
   const checkoutButton = document.querySelector('.checkout');
   const output = document.querySelector('textarea');

   const products = new Set();
   let totalPrice = 0;

   addButtons.forEach(button => {
      button.addEventListener('click', function () {
         const productDiv = button.closest('.product');
         const name = productDiv.querySelector('.product-title').textContent;
         const price = parseFloat(productDiv.querySelector('.product-line-price').textContent);

         products.add(name);
         totalPrice += price;

         output.value += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      });
   });

   checkoutButton.addEventListener('click', function () {
      const list = Array.from(products).join(', ');
      output.value += `You bought ${list} for ${totalPrice.toFixed(2)}.`;

      addButtons.forEach(button => button.disabled = true);
      checkoutButton.disabled = true;
   });
}
