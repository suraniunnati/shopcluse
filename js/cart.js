function AddToCart(){
    fetch(`http://localhost:3000/cart`)
    .then((r)=>{return r.json()})
    .then((res)=>{
        console.log(res)
        document.getElementById("cartBox").innerHTML=cartView(res)
    })
}

function cartView(arr){
    let add = 0;
    return arr.map((ele)=>{
        add+=ele.price*ele.queinty
        document.getElementById("price").innerHTML="Grand Total : ₹" + add.toFixed(2);
        return `
             <div id="main">
         <div id="img">
         <img src="${ele.img}">
         </div>
        <div id="text">
        <p id="title">${ele.title}</p>

        <div>
         <button onclick="Addcart(${ele.id} , ${ele.queinty} , 'dec')" id="Add">-</button>
        <input type="text" value="${ele.queinty}" disabled id="quan">
        <button onclick="Addcart(${ele.id} , ${ele.queinty} , 'inc')" id="Add">+</button>
        <br>
        <button onclick="del(${ele.id})" id="delete"> Remove </button>
        </div>

        <div id="">
         <span id="pr">Price : ₹${ele.mainPrice *  ele.queinty}</span><br>
           <span id="pr">Discount : -₹${(ele.mainPrice * ele.off/100 *  ele.queinty).toFixed(0)}</span>
           <br>
           <span id="pr">Shipping Fee : FREE</span>
        </div>
        <div id="itemTotal">
            <span id="price"> ₹${ele.price * ele.queinty}</span>
            <p id="tex">Inclusive of all the applicable</p>
            <p id="tex">taxes</p>
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