// function to increment quantity of products----->
let incrementFunc=()=>{
    cart_data[event.target.id].qauntity+=1;
    localStorage.setItem("cart_data",JSON.stringify(cart_data));
    append(cart_data)
    
}

// function to decrement quantity of products----->
let decrementFunc=()=>{
    console.log("minus")
    cart_data[event.target.id].qauntity-=1;
    if(cart_data[event.target.id].qauntity<1){
        removeFunc(event)
    }else{
        localStorage.setItem("cart_data",JSON.stringify(cart_data));
        append(cart_data);
    }
}

// function to remove or delete product from cart----->
let removeFunc=(event)=>{
let cart_data=JSON.parse(localStorage.getItem("cart_data")) || [];
cart_data=cart_data.filter(function(value,index,cart_data){
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
        final_qty.innerText=el.qauntity;
        main_div.append(minus_button,final_qty,plus_button);
        td_qty.append(main_div);

        let td_subtotal=document.createElement("td");
        td_subtotal.setAttribute("class","td_subtotal");
        td_subtotal.innerText=`$${el.qauntity*el.price}`;

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
}






//getting data from local storage and append function calling----->
// localStorage.setItem("cart_data",JSON.stringify(products));
let cart_data=JSON.parse(localStorage.getItem("cart_data")) || [];

append(cart_data);

