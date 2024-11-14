let a=document.querySelector("#creataccountmain") 
   let isvalid=true;

      document.querySelector("#signin").addEventListener("click",()=>{
        document.querySelector("#createAccount").style.display="none"
        document.querySelector("#signIn").style.display="block"
     })
       
  document.querySelector("#accountcreate").addEventListener("click",()=>{
     document.querySelector("#createAccount").style.display="block"
     document.querySelector("#signIn").style.display="none"
  })

 a.addEventListener("submit",(e)=>{
    e.preventDefault()
    isvalid=true

   document.querySelector("#emailText").innerHTML=""
    document.querySelector("#passwordText").innerHTML=""

   let username=document.getElementById("username").value
   let email=document.getElementById("email").value
   let password=document.getElementById("password").value

   let emailregex=/[a-zA-Z0-9.*%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}/
   let passwordregex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/;


   if(username.length == 0 ){
      document.querySelector("#usernameText").innerText=" Enter username"
      isvalid=false
   }
   if(emailregex.test(email)==false){
      document.querySelector("#emailText").innerText="  email is unvalid"
      isvalid=false
   }
   if(passwordregex.test(password)==false){
      document.querySelector("#passwordText").innerText=" password is unvalid"
      isvalid=false
   }

   let obj={
        username :username,
        email :email,
        password:password,
   }

   console.log(obj)

   fetch(`https://render-js02.onrender.com/user`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      })

})


document.querySelector("#signInmain").addEventListener("submit",(f)=>{
    f.preventDefault()
 
    let loginEmail=document.getElementById("loginEmail").value
    let loginPassword=document.getElementById("loginPassword").value

    fetch('https://render-js02.onrender.com/user').then((r)=>{
        return r.json()
    })
    .then((res)=>{
      let ans=res.filter(ele =>{
      
         if(ele.email==loginEmail && ele.password==loginPassword){
               return ele;
         }
         });
        console.log(ans)
      if(ans.length>0){
         Swal.fire({
            text: "login successfule",
            icon: "success"
          });
      }
      else{
         Swal.fire({
            text: "login unsuccessfule",
            icon: "error"
          });
      }
      })
      
    .catch((err)=>{
        console.log(err)
    })
})

