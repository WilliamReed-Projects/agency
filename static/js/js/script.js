//hide Marquee Animation when scrolling
const scrollText = document.querySelector('.marqueespan');

  window.addEventListener('scroll', () => {
    if (window.scrollY > window.innerHeight) {
      scrollText.classList.add('hidden');
    } else {
      scrollText.classList.remove('hidden');
    }
  });

const timeline = gsap.timeline({ defaults: { duration: 0.5 }})
timeline
    .fromTo('.shop',  { opacity: 0, y:'100' }, { opacity: 1, y:'0' ,delay: 0})
    .fromTo('.choix', { opacity: 0 }, { opacity: 1})
const timeline2 = gsap.timeline({ defaults: { duration: 0.2 }})
timeline
        .fromTo('.bestseller',  { opacity: 0, x:'-100' }, { opacity: 1, x:'0' ,})
    


// ===============================================PRELOADER ACTUAL ANIMATION=====================================
document.addEventListener('DOMContentLoaded', function() {
  const divElement = document.querySelector('.brand-scroller');

setTimeout(function() {
    divElement.style.display = 'none';
  }, 10); // 4 seconds in milliseconds
});

//Filter Brands
function filterDiv(filter) {
  const divs = document.querySelectorAll('.stussy, .corteiz');
  for (const div of divs) {
      if (div.classList.contains(filter)) {
          div.style.display = 'block';
      } else {
          div.style.display = 'none';
      }
  }
}

function showAll() {
  const divs = document.querySelectorAll('.stussy, .corteiz');
  for (const div of divs) {
      div.style.display = 'block';
  }
}


//CHATBOX

const chatbotToggler = document.querySelector(".chatbot-toggler");
const closeBtn = document.querySelector(".close-btn");
const chatbox = document.querySelector(".chatbox");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatImage = document.querySelector(".fa-solid.fa-circle-xmark")

let userMessage = null; // Variable to store user's message
const API_KEY = "PASTE-YOUR-API-KEY"; // Paste your API key here
const inputInitHeight = chatInput.scrollHeight;

const createChatLi = (message, className) => {
    // Create a chat <li> element with passed message and className
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", `${className}`);
    let chatContent = className === "outgoing" ? `<p></p>` : `<p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi; // return chat <li> element
}

const generateResponse = (chatElement) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
    const messageElement = chatElement.querySelector("p");

    // Define the properties and message for the API request
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{role: "user", content: userMessage}],
        })
    }

    // Send POST request to API, get response and set the reponse as paragraph text
    fetch(API_URL, requestOptions).then(res => res.json()).then(data => {
        messageElement.textContent = data.choices[0].message.content.trim();
    }).catch(() => {
        messageElement.classList.add("error");
        messageElement.textContent = "Thank you for reaching out! Kindly send me an email detailing the issue at info.trendz.shopping@gmail.com We will review your message and get back to you as soon as possible. Looking forward to assisting you further through email.";
    }).finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = chatInput.value.trim(); // Get user entered message and remove extra whitespace
    if(!userMessage) return;

    // Clear the input textarea and set its height to default
    chatInput.value = "";
    chatInput.style.height = `${inputInitHeight}px`;

    // Append the user's message to the chatbox
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    setTimeout(() => {
        // Display "Thinking..." message while waiting for the response
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

chatInput.addEventListener("input", () => {
    // Adjust the height of the input textarea based on its content
    chatInput.style.height = `${inputInitHeight}px`;
    chatInput.style.height = `${chatInput.scrollHeight}px`;
});

chatInput.addEventListener("keydown", (e) => {
    // If Enter key is pressed without Shift key and the window 
    // width is greater than 800px, handle the chat
    if(e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
closeBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () =>{
  document.body.classList.toggle("show-chatbot");
  chatImage.style.visibility = "visible";
});




//SOCIAL MEDIA
const input = document.getElementById("text");
const copyButton = document.getElementById("copy");

const copyText = (e) => {
  // window.getSelection().selectAllChildren(textElement);
  input.select(); //select input value
  document.execCommand("copy");
  e.currentTarget.setAttribute("tooltip", "Copied!");
};

const resetTooltip = (e) => {
  e.currentTarget.setAttribute("tooltip", "Copy to clipboard");
};

copyButton.addEventListener("click", (e) => copyText(e));
copyButton.addEventListener("mouseover", (e) => resetTooltip(e));


const menuIcon = document.querySelector('#menu-icon')




