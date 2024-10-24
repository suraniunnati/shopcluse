function AddToCart(){
    fetch(`http://localhost:3000/cart`)
    .then((r)=>{return r.json()})
    .then((res)=>{
        console.log(res)
        document.getElementById("cartBox").innerHTML=cartView(res)
    })
}

function cartView(arr){
    return arr.map((ele)=>{
        return `
             <div id="main">
         <div id="img">
         <i class="fa-regular fa-heart" style="color: #c2c2c2;" id="like"></i>
         <img src="${ele.img}">
         </div>
        <div id="text">
        <p id="title">${ele.title}</p>
         <i class="fa-solid fa-star fa-2xs" style="color: #e8ba11;"></i>
       <i class="fa-solid fa-star fa-2xs" style="color: #e8ba11;"></i>
       <i class="fa-solid fa-star fa-2xs" style="color: #e8ba11;"></i>
       <i class="fa-solid fa-star fa-2xs" style="color: #e8ba11;"></i>
       <i class="fa-solid fa-star fa-2xs" style="color: #dedede;"></i>
        <img src="https://images.shopclues.com/images/ui/madeinindia.png" id="logomain">
        <span id="price">₹${ele.price}</span>
        <span id="mainPrice">₹${ele.mainPrice}</span>
        <span id="off">${ele.off} Off</span><br><br>

        <button onclick="Addcart(${ele.id} , ${ele.queinty} , 'dec')" id="Add">-</button>
        <input type="text" value="${ele.queinty}" disabled id="quan">
        <button onclick="Addcart(${ele.id} , ${ele.queinty} , 'inc')" id="Add">+</button>
        <br>
        <button onclick="del(${ele.id})">Delete </button>
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
    

    fetch(`http://localhost:3000/cart/${id}`, {
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
    fetch(`http://localhost:3000/cart/${id}`,{
        method :'DELETE',
    })
    .then((res)=>{
        window.location.reload() 
    })
}

AddToCart()