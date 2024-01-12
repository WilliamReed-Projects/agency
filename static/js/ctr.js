
function addToCart(product_id) {
  const quantity = 1; // You can modify this based on user input
  fetch('/add-to-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      product_id,
      quantity,
    }),
  })
  .then(response => response.text())
  .then(message => {
    //alert(message);
    updateCartDisplay();
  });
}

function deleteFromCart(product_id) {
  fetch('/delete-from-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      product_id,
    }),
  })
  .then(response => response.text())
  .then(message => {
    //alert(message);
    updateCartDisplay();
  });
}

function addToCart(product_id) {
  const quantity = 1; // You can modify this based on user input
  fetch('/add-to-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      product_id,
      quantity,
    }),
  })
  .then(response => response.text())
  .then(message => {
    //alert(message);
    updateCartDisplay();
  });
}

function deleteFromCart(product_id) {
  fetch('/delete-from-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      product_id,
    }),
  })
  .then(response => response.text())
  .then(message => {
    //alert(message);
    updateCartDisplay();
  });
}
// Mapping of product IDs to names
const productNames = {
  'product1': 'Stone Island Black Sweat Size XS',
  'product2': 'Stone Island Black Sweat Size S',
  'product3': 'Stone Island Black Sweat Size M',
  'product4': 'Stone Island Black Sweat Size L',
  'product5': 'Stone Island Black Sweat Size XL',
  'product6': 'Stone Island Crewneck Black Sweat Size XS',
  'product7': 'Stone Island Crewneck Black Sweat Size XS',
  'product8': 'Stone Island Crewneck Black Sweat Size XS',
  'product9': 'Stone Island Crewneck Black Sweat Size XS',
  'product10': 'Stone Island Crewneck Black Sweat Size XS',
  'product11': 'Stone Island Crewneck Black Sweat Size XS',
  'product12': 'Stone Island Crewneck Black Sweat Size XS',
  'product13': 'Stone Island Crewneck Black Sweat Size XS',
  'product14': 'Stone Island Crewneck Black Sweat Size XS',
  'product15': 'Stone Island Crewneck Black Sweat Size XS',
  'product16': 'Stone Island Crewneck Black Sweat Size XS',
  // Add more products as needed
};
// Modified updateCartDisplay function
function updateCartDisplay() {
  fetch('/get-cart', {
      method: 'GET',
  })
  .then(response => response.json())
  .then(cartItems => {
      const cartList = document.getElementById('cart-list');
      cartList.innerHTML = '';

      cartItems.forEach(item => {
          const listItem = document.createElement('li');
          const productName = productNames[item.product_id] || 'Unknown Product';
          listItem.innerHTML = `<img src="${getProductImage(item.product_id)}" alt="${productName}" width="50" height="50"> ${productName} - Quantity: ${item.quantity}`;

          // Add delete button for each item in the cart
          const deleteButton = document.createElement('button');
          deleteButton.textContent = 'Delete';
          deleteButton.onclick = () => deleteFromCart(item.product_id);
          deleteButton.classList.add('delete-button');

          listItem.appendChild(deleteButton);
          cartList.appendChild(listItem);
      });
  });
}



function updateCart() {
  const updatedCart = [
    { product_id: 'product1', quantity: 2 },
    // Add more items as needed
  ];
  fetch('/update-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      cart: updatedCart,
    }),
  })
  .then(response => response.text())
  .then(message => {
    //alert(message);
    updateCartDisplay();
  });
}

function clearCart() {
  fetch('/clear-cart', {
    method: 'POST',
  })
  .then(response => response.text())
  .then(message => {
    alert(message);
    updateCartDisplay();
  });
}

// Update the cart display when the page loads
updateCartDisplay();


function toggleCart() {
  var cartContainer = document.getElementById('cart-system');
  if (cartContainer) {
      cartContainer.style.display = cartContainer.style.display === 'none' ? 'grid' : 'none';
  } else {
      console.error('Cart container not found.');
  }
}

//Function to update the shopping cart content (you may need to customize this)
function updateCartContent(cartItems) {
  var cartContent = document.getElementById('cart-content');
  if (cartContent) {
      cartContent.innerHTML = '<h4>Cart Items:</h4>';

      // Loop through cart items and display them
      cartItems.forEach(function (item) {
          var itemElement = document.createElement('div');
          itemElement.innerHTML = `<p>${item.product_id} - Quantity: ${item.quantity}</p>`;
          cartContent.appendChild(itemElement);
      });
  } else {
      console.error('Cart content container not found.');
  }
}

function updateCart() {
  const updatedCart = [
    { product_id: 'product1', quantity: 2 },
    // Add more items as needed
  ];
  fetch('/update-cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      cart: updatedCart,
    }),
  })
  .then(response => response.text())
  .then(message => {
    alert(message);
    updateCartDisplay();
  });
}

function clearCart() {
  fetch('/clear-cart', {
    method: 'POST',
  })
  .then(response => response.text())
  .then(message => {
    alert(message);
    updateCartDisplay();
  });
}

// Update the cart display when the page loads
updateCartDisplay();


function toggleCart() {
  var cartContainer = document.getElementById('cart-system');
  if (cartContainer) {
      cartContainer.style.display = cartContainer.style.display === 'none' ? 'grid' : 'none';
  } else {
      console.error('Cart container not found.');
  }
}

//Function to update the shopping cart content (you may need to customize this)
function updateCartContent(cartItems) {
  var cartContent = document.getElementById('cart-content');
  if (cartContent) {
      cartContent.innerHTML = '<h4>Cart Items:</h4>';

      // Loop through cart items and display them
      cartItems.forEach(function (item) {
          var itemElement = document.createElement('div');
          itemElement.innerHTML = `<p>${item.product_id} - Quantity: ${item.quantity}</p>`;
          cartContent.appendChild(itemElement);
      });
  } else {
      console.error('Cart content container not found.');
  }
}
