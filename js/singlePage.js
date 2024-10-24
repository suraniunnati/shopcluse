function singlrPage(){
    let data = new URLSearchParams(window.location.search);
    let id = data.get("id");

    fetch(`http://localhost:3000/product/${id}`)
    .then((r)=>{
        return r.json()
    })
    .then((res)=>{
        console.log(res)
        document.getElementById("singleBox").innerHTML= singlePageView(res)
        document.getElementById("cart").addEventListener("click",()=>{
            AddCart(res)
          })
    })
}

function singlePageView(ele){
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
        <span id="mainPrice">MRP: ₹${ele.mainPrice}</span>
        <span id="off">${ele.off} Off</span><br><br>
        <p id="title">Select Size Men's Upper</p>
          <button id="size">M</button>
          <button id="size">L</button>
          <button id="size">XL</button>
          <button id="off">size chart</button>
          <br>
          <button id="cart" >ADD TO CART</button>
           <button id="buy" >BUY NOW</button>

       <h6 id="free"><i class="fa-solid fa-truck"></i> Free Shipping</h6>
      <p id="pay"><i class="fa-regular fa-share-from-square"></i> Easy Replacement Only</p>
      <p id="pay"><i class="fa-regular fa-credit-card"></i> Payment Options: (Credit Card , Debit Card , Net Banking , Wallets , COD)</p>
    </div>
    `
}

function AddCart(res){

    fetch(`http://localhost:3000/cart`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({...res,queinty: 1})
        })
        .then((r)=>r.json())
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err)) 
}
   

singlrPage()