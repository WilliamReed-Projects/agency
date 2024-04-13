//const btn = document.getElementById('button');

function SendMail() {
    var params = {
      from_name : document.getElementById("from_name").value,
      email : document.getElementById("email").value,
      tel: document.getElementById("tel").value,
      comp : document.getElementById("comp").value,
      message : document.getElementById("message").value
  
    }
    emailjs.send("service_5h7e63k", "template_au3dy4f", params).then(function (res) {
      alert('Sucess!')
    })
  
  }