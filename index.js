function sendMail(event) {
  
event.preventDefault()
    var params = {
      name: document.getElementById("name").value,
      date: document.getElementById("date").value,
      doctor: document.getElementById("doctor").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      age: document.getElementById("age").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_bv8gozb";
    const templateID = "template_vhuwgfc";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("date").value="";
          document.getElementById("message").value = "";
          document.getElementById("doctor").value="";
          document.getElementById("age").value="";
          document.getElementById("phone").value="";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  }







  function contactMail(event) {
  
event.preventDefault()
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      subject: document.getElementById("subject").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_bv8gozb";
    const templateID = "template_jmveb5p";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
       
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  }