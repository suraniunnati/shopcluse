function AddToCart(){
    fetch(`https://render-js02.onrender.com/like`)
    .then((r)=>{return r.json()})
    .then((res)=>{
        console.log(res)
        document.getElementById("likeBox").innerHTML=cartView(res)
    })
}

function cartView(arr){
    return arr.map((ele) => {
        return `
           <div id="main">
         <div id="img">
         <i class="fa-solid fa-heart" style="color: #d10000;" id="like" onclick="del(${ele.id})"></i>
         <img src="${ele.img}">
         </div>
        <div id="text">
        <img src="https://images.shopclues.com/images/ui/madeinindia.png" id="logomain">
        <p id="title">${ele.title}</p>
        <span id="price">₹${ele.price}</span>
        <span id="mainPrice">₹${ele.mainPrice}</span>
        <span id="off">${ele.off}% Off</span><br>
       <i class="fa-solid fa-star fa-2xs" style="color: #e8ba11;"></i>
       <i class="fa-solid fa-star fa-2xs" style="color: #e8ba11;"></i>
       <i class="fa-solid fa-star fa-2xs" style="color: #e8ba11;"></i>
       <i class="fa-solid fa-star fa-2xs" style="color: #e8ba11;"></i>
       <i class="fa-solid fa-star fa-2xs" style="color: #dedede;"></i>
       <h6 id="free"><i class="fa-solid fa-truck"></i> Free Shipping</h6>
    </div>
   </div>
        `
    }).join("")
}

function Addcart(id,queinty, clickbtn) {
    let a = queinty;
    if (clickbtn == 'inc') {
        a = a + 1
    } else if (clickbtn == 'dec') {
        a = a - 1
        if (a < 1) {
          
          document.getElementById("Add").setAttribute("disabled");
        }
    }
    

    fetch(`https://render-js02.onrender.com/like/${id}`, {
        method: "PATCH",
        headers : {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify({queinty : a})
    }).then((res) => {
        return res.json()
    })
        .then((res) => {
            console.log(res)
            window.location.reload()
        })
        .catch((err) => {
            console.log(err)
        })

}

function del(id){
    fetch(`https://render-js02.onrender.com/like/${id}`,{
        method :'DELETE',
    })
    .then((res)=>{
        window.location.reload() 
    })
}

AddToCart()