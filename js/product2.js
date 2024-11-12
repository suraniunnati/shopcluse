function product() {

    fetch(`https://render-js02.onrender.com/product2`)
        .then((r) => {
            return r.json()
        })
        .then((res) => {
            console.log(res)
            document.getElementById("productBox").innerHTML=ProductView(res)

            document.querySelectorAll(".like-button").forEach((likeButton, index) => {
                likeButton.addEventListener("click", () => {
                    likeButton.style.color = "red";
                    AddLike(res[index]); 
                });
            });
            
            let PR = document.getElementById("rs")
            PR.addEventListener("change",function(){
                if(this.checked){
                    console.log("click....")
                    const filteredProducts1 = fil(res);
                    document.getElementById("productBox").innerHTML = ProductView(filteredProducts1);
                }
                else{
                    console.log("not click....")
                    document.getElementById("productBox").innerHTML=ProductView(res)
                }
            }) 
            
            let PR1 = document.getElementById("rs1")
            PR1.addEventListener("change",function(){
                if(this.checked){
                    console.log("click....")
                    const filteredProducts2 = fil1(res);
                    document.getElementById("productBox").innerHTML = ProductView(filteredProducts2);
                }
                else{
                    console.log("not click....")
                    document.getElementById("productBox").innerHTML=ProductView(res)
                }
            }) 

             
            let PR2 = document.getElementById("rs2")
            PR2.addEventListener("change",function(){
                if(this.checked){
                    console.log("click....")
                    const filteredProducts2 = fil2(res);
                    document.getElementById("productBox").innerHTML = ProductView(filteredProducts2);
                }
                else{
                    console.log("not click....")
                    document.getElementById("productBox").innerHTML=ProductView(res)
                }
            }) 

             
            let PR3 = document.getElementById("rs3")
            PR3.addEventListener("change",function(){
                if(this.checked){
                    console.log("click....")
                    const filteredProducts2 = fil3(res);
                    document.getElementById("productBox").innerHTML = ProductView(filteredProducts2);
                }
                else{
                    console.log("not click....")
                    document.getElementById("productBox").innerHTML=ProductView(res)
                }
            }) 

             
            let PR4 = document.getElementById("rs4")
            PR4.addEventListener("change",function(){
                if(this.checked){
                    console.log("click....")
                    const filteredProducts2 = fil4(res);
                    document.getElementById("productBox").innerHTML = ProductView(filteredProducts2);
                }
                else{
                    console.log("not click....")
                    document.getElementById("productBox").innerHTML=ProductView(res)
                }
            }) 

            let PR5 = document.getElementById("rs6")
            PR5.addEventListener("change",function(){
                if(this.checked){
                    console.log("click....")
                    const filteredProducts2 = fil5(res);
                    document.getElementById("productBox").innerHTML = ProductView(filteredProducts2);
                }
                else{
                    console.log("not click....")
                    document.getElementById("productBox").innerHTML=ProductView(res)
                }
            })

            let PR6= document.getElementById("rs5")
            PR6.addEventListener("change",function(){
                if(this.checked){
                    console.log("click....")
                    const filteredProducts2 = fil6(res);
                    document.getElementById("productBox").innerHTML = ProductView(filteredProducts2);
                }
                else{
                    console.log("not click....")
                    document.getElementById("productBox").innerHTML=ProductView(res)
                }
            })

            let PR7 = document.getElementById("rs7")
            PR7.addEventListener("change",function(){
                if(this.checked){
                    console.log("click....")
                    const filteredProducts2 = fil7(res);
                    document.getElementById("productBox").innerHTML = ProductView(filteredProducts2);
                }
                else{
                    console.log("not click....")
                    document.getElementById("productBox").innerHTML=ProductView(res)
                }
            })

            let PR8 = document.getElementById("rs8")
            PR8.addEventListener("change",function(){
                if(this.checked){
                    console.log("click....")
                    const filteredProducts2 = fil8(res);
                    document.getElementById("productBox").innerHTML = ProductView(filteredProducts2);
                }
                else{
                    console.log("not click....")
                    document.getElementById("productBox").innerHTML=ProductView(res)
                }
            })

            let PR9 = document.getElementById("rs9")
            PR9.addEventListener("change",function(){
                if(this.checked){
                    console.log("click....")
                    const filteredProducts2 = fil9(res);
                    document.getElementById("productBox").innerHTML = ProductView(filteredProducts2);
                }
                else{
                    console.log("not click....")
                    document.getElementById("productBox").innerHTML=ProductView(res)
                }
            })

            let PR10 = document.getElementById("rs10")
            PR10.addEventListener("change",function(){
                if(this.checked){
                    console.log("click....")
                    const filteredProducts2 = fil10(res);
                    document.getElementById("productBox").innerHTML = ProductView(filteredProducts2);
                }
                else{
                    console.log("not click....")
                    document.getElementById("productBox").innerHTML=ProductView(res)
                }
            })

            let PR11 = document.getElementById("rs11")
            PR11.addEventListener("change",function(){
                if(this.checked){
                    console.log("click....")
                    const filteredProducts2 = fil11(res);
                    document.getElementById("productBox").innerHTML = ProductView(filteredProducts2);
                }
                else{
                    console.log("not click....")
                    document.getElementById("productBox").innerHTML=ProductView(res)
                }
            })

            let PR12 = document.getElementById("rs12")
            PR12.addEventListener("change",function(){
                if(this.checked){
                    console.log("click....")
                    const filteredProducts2 = fil12(res);
                    document.getElementById("productBox").innerHTML = ProductView(filteredProducts2);
                }
                else{
                    console.log("not click....")
                    document.getElementById("productBox").innerHTML=ProductView(res)
                }
            })

            let PR13 = document.getElementById("rs13")
            PR13.addEventListener("change",function(){
                if(this.checked){
                    console.log("click....")
                    const filteredProducts2 = fil13(res);
                    document.getElementById("productBox").innerHTML = ProductView(filteredProducts2);
                }
                else{
                    console.log("not click....")
                    document.getElementById("productBox").innerHTML=ProductView(res)
                }
            })

        })
}

function ProductView(arr) {
    return arr.map((ele,index) => {
        return `
           <div id="main">
         <div id="img">
          <i class="fa-regular fa-heart like-button" style="color: #c2c2c2;" id="like-${index}"></i>
         <a href="singleProduct.html?id=${ele.id}"><img src="${ele.img}"></a>
         </div>
         <a href="singleProduct.html?id=${ele.id}">
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
    </div></a>
   </div>
        `
    }).join("")
}

function fil(arr){
    return arr.filter((ele) => ele.price <= 199); 
}
function fil1(arr){
    return arr.filter((ele) => ele.price > 200 && ele.price <= 399); 
}
function fil2(arr){
    return arr.filter((ele) => ele.price > 400 && ele.price <= 599); 
}
function fil3(arr){
    return arr.filter((ele) => ele.price > 600 && ele.price <= 999); 
}
function fil4(arr){
    return arr.filter((ele) => ele.price >= 1000); 
}
function fil5(arr){
    return arr.filter((ele) => ele.color == "red"); 
}
function fil6(arr){
    return arr.filter((ele) => ele.color == "pink"); 
}
function fil7(arr){
    return arr.filter((ele) => ele.color == "brown"); 
}
function fil8(arr){
    return arr.filter((ele) => ele.color == "black"); 
}
function fil9(arr){
    return arr.filter((ele) => ele.color == "blue"); 
}
function fil10(arr){
    return arr.filter((ele) => ele.color == "white"); 
}
function fil11(arr){
    return arr.filter((ele) => ele.color == "yellow"); 
}
function fil12(arr){
    return arr.filter((ele) => ele.color == "green"); 
}
function fil13(arr){
    return arr.filter((ele) => ele.color == "gray"); 
}

// like product
function AddLike(product) {
    fetch(`https://render-js02.onrender.com/like?id=${product.id}`)
        .then((r) => r.json())
        .then((res) => {
            if (res.length === 0) { 
                fetch(`https://render-js02.onrender.com/like`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ ...product, quantity: 1 })
                })
                .then((r) => r.json())
                .then((res) => console.log( res))
                .catch((err) => console.log( err));
            } else {
                console.log("Product already liked.");
            }
        });
}

product()

// aside
document.getElementById('aside').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});