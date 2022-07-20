

let append=(data)=>{
    let tbody=document.getElementById("tbody");
    tbody.innerHTML=null;

    data.forEach((el,index)=>{
        console.log(el)
        let row=document.createElement("tr");

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
        let brand=document.createElement("p");
        brand.innerText=el.brand;
        div2.append(name,brand);
        item_div.append(div1,div2);
        td_item.append(item_div);


        let td_price=document.createElement("td");
        td_price.setAttribute("class","td_price");
        td_price.innerText=`$ ${el.price}`;

        let td_qty=document.createElement("td");
        td_qty.setAttribute("class","td_qty");
        let main_div=document.createElement("div");
        let minus_button=document.createElement("button");
        minus_button.setAttribute("class","m_p_buttons");
        minus_button.innerText="-"
        minus_button.addEventListener("click",decrementFunc)
        let plus_button=document.createElement("button");
        plus_button.setAttribute("class","m_p_buttons");
        plus_button.inn="+";
        plus_button,addEventListener("click",incrementFunc);

        td_qty.innerText=el.qauntity;

        let td_subtotal=document.createElement("td");
        td_subtotal.setAttribute("class","td_subtotal");
        td_subtotal.innerText=el.qauntity*el.price;




        row.append(td_item,td_price,td_qty,td_subtotal);
        // tbody.append(tr);
        document.getElementById("tbody").append(row)

    })
}


// let cart_data=JSON.parse(localStorage.getItem("cart")) || [];

let cart_data=[{
    image:"https://static.thcdn.com/images/large/webp//productimg/1600/1600/12902086-8334900276405272.jpg",
    name:"dummy name",
    brand:"dummy brand",
    price:200,
    qauntity:2,
}]

append(cart_data);