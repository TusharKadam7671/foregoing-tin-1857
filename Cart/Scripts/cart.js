var cart_data=JSON.parse(localStorage.getItem("cart_data")) || []

// function to increment quantity of products----->
let incrementFunc=(event)=>{
    cart_data[event.target.id].quantity+=1;
    localStorage.setItem("cart_data",JSON.stringify(cart_data));
    append(cart_data)
    
}

// function to decrement quantity of products----->
let decrementFunc=(event)=>{
    console.log("minus")
    cart_data[event.target.id].quantity-=1;
    if(cart_data[event.target.id].quantity==0){
        removeFunc(event)
    }else{
        localStorage.setItem("cart_data",JSON.stringify(cart_data));
        append(cart_data);
    }
}

// function to remove or delete product from cart----->
let removeFunc=(event)=>{
cart_data=cart_data.filter(function(value,index,cart_data){
    console.log("id",event.target.id)
    console.log("index",index)
    return event.target.id!=index;
});
console.log(cart_data)
localStorage.setItem("cart_data",JSON.stringify(cart_data));
append(cart_data);
// window.location.reload()
}


//function to append data to the table body----->
let append=(data)=>{
    let tbody=document.getElementById("tbody");
    tbody.innerHTML=null;

    data.forEach((el,index)=>{
        let row=document.createElement("tr");
        // row.style.borderBottom="1px solid";

        let td_item=document.createElement("td");
        td_item.setAttribute("class","td_item");
        let item_div=document.createElement("div");
        item_div.setAttribute("class","item_div");
        let div1=document.createElement("div");
        div1.setAttribute("class","image_div")
        let div2=document.createElement("div");
        div2.setAttribute("class","details_div")
        let image=document.createElement("img");
        image.src=el.image;
        div1.append(image);
        let name=document.createElement("p");
        name.innerText=el.name;
        let banner_text=document.createElement("p");
        banner_text.innerText=el.banner_text;
        div2.append(name,banner_text);
        item_div.append(div1,div2);
        td_item.append(item_div);


        let td_price=document.createElement("td");
        td_price.setAttribute("class","td_price");
        td_price.innerText=`$${el.price}`;

        
        let td_qty=document.createElement("td");
        td_qty.setAttribute("class","td_qty");
        if(el.id=="1.1" || el.id=="2.1" || el.id=="3.1"){
            td_qty.innerText="Free";
        }else{

        
        let main_div=document.createElement("div");
        let minus_button=document.createElement("button");
        minus_button.setAttribute("class","m_p_buttons");
        minus_button.setAttribute("id",index);
        minus_button.innerText="-"
        minus_button.addEventListener("click",decrementFunc)
        let plus_button=document.createElement("button");
        plus_button.setAttribute("class","m_p_buttons");
        plus_button.setAttribute("id",index);
        plus_button.innerText="+";
        plus_button.addEventListener("click",incrementFunc);
        let final_qty=document.createElement("p");
        final_qty.innerText=el.quantity;
        main_div.append(minus_button,final_qty,plus_button);
        td_qty.append(main_div);
        }

        let td_subtotal=document.createElement("td");
        td_subtotal.setAttribute("class","td_subtotal");
        td_subtotal.innerText=`$${el.quantity*el.price}`;

        let td_remove=document.createElement("td");
        let remove_button=document.createElement("button");
        remove_button.innerText="X";
        remove_button.setAttribute("class","remove_button");
        remove_button.setAttribute("id",index);
        remove_button.addEventListener("click",removeFunc);
        td_remove.append(remove_button);




        row.append(td_item,td_price,td_qty,td_subtotal,td_remove);
        // tbody.append(tr);
        document.getElementById("tbody").append(row)

    })
    
// Cart total
var cart_total=cart_data.reduce((acc,value)=>value.price*value.quantity+acc,0)
localStorage.setItem("cart_total",JSON.stringify(cart_total))
document.getElementById("cart_total").innerText=cart_total;
document.getElementById("points").innerText=cart_total*5;

}



//products




//getting data from local storage and append function calling----->
// localStorage.setItem("cart_data",JSON.stringify(products));

append(cart_data);


// gift div js part
function myFunction(){
    let id=event.target.id;
    console.log(id)
    if(id=="toggle1" || id=="toggle1.1" || id=="toggle1.2"){
     var targetDiv = document.getElementById("first");
     console.log(targetDiv)
     console.log(1111)
    }else if(id=="toggle2" || id=="toggle2.1" || id=="toggle2.2" ){
     var targetDiv = document.getElementById("second");
     console.log(2222)
    }else if(id=="toggle3" || id=="toggle3.1" || id=="toggle3.2" ){
     var targetDiv = document.getElementById("third");
     console.log(3333)
    }

    if (targetDiv.style.display !== "none") {
     targetDiv.style.display = "none";
    } else {
     targetDiv.style.display = "block";
    }
 }

 function addToCart(num){
     console.log(num)
     let total=JSON.parse(localStorage.getItem("cart_total")) || 0;
    console.log("tush",total)
     if(num=="1.1" && total>=50){
         let obj={};
         obj.id=num;
         obj.name="ClarityRx Good To Go Sample ($1 Value)";
         obj.price=0;
         obj.quantity=1;
         obj.banner_text="In stock - Usually dispatched within 24 hours";
         obj.image="https://s1.thcdn.com//productimg/70/70/13179323-1794969739110482.jpg";
        //  let cart_data=JSON.parse(localStorage.getItem("cart_data")) || [];
         flag=0;
         cart_data.forEach(function(el){
             if(el.id==num){
                 flag=1;
             }
         })
         if(flag==0){
             cart_data.push(obj);
         localStorage.setItem("cart_data",JSON.stringify(cart_data));
         window.location.reload();
         }
        
     }else if(num=="2.1" && total>=125){
         let obj={};
         obj.id=num;
         obj.name="DevaCurl SuperCream Rich Coconut-Infused Definer 3 oz ($15 Value)";
         obj.price=0;
         obj.quantity=1;
         obj.banner_text="In stock - Usually dispatched within 24 hours";
         obj.image="https://s1.thcdn.com//productimg/70/70/13717263-1264947204221910.jpg";
        //  let cart_data=JSON.parse(localStorage.getItem("cart_data")) || [];
         flag=0;
         cart_data.forEach(function(el){
             if(el.id==num){
                 flag=1;
             }
         })
         if(flag==0){
             cart_data.push(obj);
         localStorage.setItem("cart_data",JSON.stringify(cart_data));
         window.location.reload();
         }
     }else if(num=="3.1" && total>=175){
         let obj={};
         obj.id=num;
         obj.name="EltaMD UV Clear Deluxe 0.5 oz (Worth $16.00)";
         obj.price=0;
         obj.quantity=1;
         obj.banner_text="In stock - Usually dispatched within 24 hours";
         obj.image="https://s1.thcdn.com//productimg/70/70/13733602-1734971279277656.jpg";
        //  let cart_data=JSON.parse(localStorage.getItem("cart_data")) || [];
         flag=0;
         cart_data.forEach(function(el){
             if(el.id==num){
                 flag=1;
             }
         })
         if(flag==0){
             cart_data.push(obj);
         localStorage.setItem("cart_data",JSON.stringify(cart_data));
         window.location.reload();
         }
     }
 }
