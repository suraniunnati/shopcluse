document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault()
  
    
  
    let email = document.getElementById("email").value
    let pass = document.getElementById("password").value
  
  
    let obj = {
      ema: email,
      password: pass,
    }

    add(obj)

    function add(obj) {

      fetch('http://localhost:3000/user', {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(obj)
  
      })
        .then((res) => {
          console.log(res.ok)
           console.log(res.status)
          return res.json()
        })
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.log(err)
        })
      window.location.href="INDEX.HTML";

      alert("login succesfull");
  
    }
   
  })
  
  
  
  // document.getElementById("logo").addEventListener("click",()=>{
  //    window.location.href="home.html"
  // })
  
  
  document.getElementById("log").addEventListener("click", () => {
    document.getElementById("s").style.display = "none"
    document.getElementById("l").style.display = "block"
  })
  
  
  document.getElementById("form1").addEventListener("submit", (e) => {
    e.preventDefault()
    var email1 = document.getElementById("em").value;
    var pass1 = document.getElementById("p").value;
    console.log(email1)
    
    fetch(`http://localhost:3000/user?ema=${email1}`)
    .then((res)=>{
      return res.json()
    })
    .then((res)=>{
      if(res[0].password==pass1)
      {
        window.location.href="INDEX.HTML"
      }
      else
      {
        document.querySelector(".e1").innerText="Please enter the email"
  
        
      }
    })
  
  })
