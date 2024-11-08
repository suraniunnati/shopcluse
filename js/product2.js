function product() {

    fetch(`http://localhost:3000/product2`)
        .then((r) => {
            return r.json()
        })
        .then((res) => {
            console.log(res)
            document.getElementById("productBox").innerHTML=ProductView(res)
            
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

product()

// aside
document.getElementById('aside').addEventListener('click', () => {
    const menu = document.getElementById('menu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
});