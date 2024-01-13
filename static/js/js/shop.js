const timelineshop = gsap.timeline({ defaults: { duration: 0.7 }})
timelineshop
  .fromTo('.product-card', { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1 })

const paypop = document.querySelector(".pay");

  function handleScroll() {
    if (window.scrollY > 100) {
      gsap.to(paypop, { left: -300, opacity: 0, duration: 0.5 });
    } else {
      gsap.to(paypop, { left: 0, opacity: 1, duration: 0.5 });
    }
  
    if (window.innerWidth > 480) {
      paypop.style.display = "none";
    } else {
      paypop.style.display = "block";
    }
  }
  
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', handleScroll);

// SCROLL DOWN DIV
//const slideText = document.querySelector('.buy-now');
//const newText = document.querySelector('.box-down');

//function slideAndShowText() {
  //gsap.to(slideText, { marginLeft: '-200px', duration: 0.5 });
  //gsap.to(newText, { marginLeft:'-100px',opacity:'1', display: 'block', duration: 1 });
//}

// Start the sliding and showing effect after 3 seconds
//setTimeout(slideAndShowText, 3000);


//=====================NEWSLETTER=====================================================
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_2ixgrql';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});

//=====================TOAST MESSAGE=====================================================
const notifications = document.querySelector(".notifications"),
buttons = document.querySelectorAll("#error");

// Object containing details for different types of toasts
const toastDetails = {
    timer: 5000,
    success: {
        icon: 'fa-circle-check',
        text: 'Success: This is a success toast.',
    },
    error: {
        icon: 'fa-circle-xmark',
        text: 'Error: Sorry this item is out of stock.',
    },
    warning: {
        icon: 'fa-triangle-exclamation',
        text: 'Warning: This is a warning toast.',
    },
    info: {
        icon: 'fa-circle-info',
        text: 'Info: This is an information toast.',
    }
}

const removeToast = (toast) => {
    toast.classList.add("hide");
    if(toast.timeoutId) clearTimeout(toast.timeoutId); // Clearing the timeout for the toast
    setTimeout(() => toast.remove(), 500); // Removing the toast after 500ms
}

const createToast = (id) => {
    // Getting the icon and text for the toast based on the id passed
    const { icon, text } = toastDetails[id];
    const toast = document.createElement("li"); // Creating a new 'li' element for the toast
    toast.className = `toast ${id}`; // Setting the classes for the toast
    // Setting the inner HTML for the toast
    toast.innerHTML = `<div class="column">
                         <i class="fa-solid ${icon}"></i>
                         <span>${text}</span>
                      </div>
                      <i class="fa-solid fa-xmark" onclick="removeToast(this.parentElement)"></i>`;
    notifications.appendChild(toast); // Append the toast to the notification ul
    // Setting a timeout to remove the toast after the specified duration
    toast.timeoutId = setTimeout(() => removeToast(toast), toastDetails.timer);
}

// Adding a click event listener to each button to create a toast when clicked
buttons.forEach(btn => {
    btn.addEventListener("click", () => createToast(btn.id));
});










// Function to get the value of a query parameter by its name
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Function to filter products based on the query parameter
function applyFilter() {
  const filterValue = getQueryParam('filter');

  if (filterValue === 'hoodie') {
    // Call your filterDiv function with the 'hoodie' filter
    filterDiv('hoodie');
  }
  if (filterValue === 'tshirt') {
    // Call your filterDiv function with the 'hoodie' filter
    filterDiv('t-shirt');
  }
  if (filterValue === 'swim') {
    // Call your filterDiv function with the 'hoodie' filter
    filterDiv('swim');
  }
  if (filterValue === 'shoe') {
    // Call your filterDiv function with the 'hoodie' filter
    filterDiv('shoe');
  }
  if (filterValue === 'short') {
    // Call your filterDiv function with the 'hoodie' filter
    filterDiv('short');
  }
  // Add more conditions for other filters if needed

  // You can also handle the case when no filter parameter is provided
  // and display all products or a default behavior.
}

// Call the applyFilter function when the page loads
window.onload = applyFilter;





// Open button
const openButton = document.getElementById("openButton");
const slidingDiv = document.getElementById("slidingDiv");

openButton.addEventListener("click", () => {
  gsap.to(slidingDiv, { top: 0, duration: 0.5, display: "block" });
});

// Close button
const closeButton = document.getElementById("closeButton");

closeButton.addEventListener("click", () => {
  gsap.to(slidingDiv, { top: "-100%", duration: 0.5, display: "none" });
});








