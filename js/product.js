function product() {

    fetch(`http://localhost:3000/product`)
        .then((r) => {
            return r.json()
        })
        .then((res) => {
            console.log(res)
            document.getElementById("productBox").innerHTML=ProductView(res)
        })
}

function ProductView(arr) {
    return arr.map((ele) => {
        return `<a href="singleProduct.html?id=${ele.id}">
           <div id="main">
         <div id="img">
         <i class="fa-regular fa-heart" style="color: #c2c2c2;" id="like"></i>
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
   </div></a>
        `
    }).join("")
}
product()