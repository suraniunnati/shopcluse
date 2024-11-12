fetch(`https://render-js02.onrender.com/cart`)
      .then((r) => {
        return r.json();
      })
      .then((res) => {

        let addcart=res.length
        document.getElementById("total").innerHTML=addcart
      })
      .catch((err) => {
        console.log(err);
      });