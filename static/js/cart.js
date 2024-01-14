
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
  'product6': 'CP Company Black Jacket Size XS',
  'product7': 'CP Company Black Jacket Size S',
  'product8': 'CP Company Black Jacket Size M',
  'product9': 'CP Company Black Jacket Size L',
  'product10': 'CP Company Black Jacket Size XL',
  'product11': 'Polo Ralph Lauren Zip Hoodie XS',
  'product12': 'Polo Ralph Lauren Zip Hoodie S',
  'product13': 'Polo Ralph Lauren Zip Hoodie M',
  'product14': 'Polo Ralph Lauren Zip Hoodie L',
  'product15': 'Polo Ralph Lauren Zip Hoodie XL',
  'product16': 'The North Face 330 Jacket XS',
  'product17': 'The North Face 330 Jacket S',
  'product18': 'The North Face 330 Jacket M',
  'product19': 'The North Face 330 Jacket L',
  'product20': 'The North Face 330 Jacket XL',
  'product21': 'CP Company White Sweat XS',
  'product22': 'CP Company White Sweat S',
  'product23': 'CP Company White Sweat M',
  'product24': 'CP Company White Sweat L',
  'product25': 'CP Company White Sweat XL',
  'product26': 'Polo Ralph Lauren Zip Joggers XS',
  'product27': 'Polo Ralph Lauren Zip Joggers S',
  'product28': 'Polo Ralph Lauren Zip Joggers M',
  'product29': 'Polo Ralph Lauren Zip Joggers L',
  'product30': 'Polo Ralph Lauren Zip Joggers XL',
  'product31': 'Arcterix Beta Jacket',
  'product32': 'Arcterix Beta Jacket',
  'product33': 'Arcterix Beta Jacket',
  'product34': 'Arcterix Beta Jacket',
  'product35': 'Arcterix Beta Jacket',
  'product36': 'Arcterix Beta Jacket',
  'product37': 'Stone Island T-Shirt',
  'product38': 'Stone Island T-Shirt',
  'product39': 'Stone Island T-Shirt',
  'product40': 'Stone Island T-Shirt',
  'product41': 'Stone Island T-Shirt',
  'product42': 'Corteiz T-Shirt XS',
  'product43': 'Corteiz T-Shirt S',
  'product44': 'Corteiz T-Shirt M',
  'product45': 'Corteiz T-Shirt L',
  'product46': 'Corteiz T-Shirt XL',

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
          listItem.textContent = `${productName} - Quantity: ${item.quantity}`;

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
    console.log('Before click:', cartContainer.style.display);
    
    cartContainer.style.display = cartContainer.style.display === 'none' ? 'grid' : 'none';
    
    console.log('After click:', cartContainer.style.display);
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
