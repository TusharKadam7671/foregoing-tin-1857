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
let products=[
    {
      id: 1,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/13811675-9994964348315184.jpg',
      name: 'Best of Dermstore x Skin Cancer Foundation Sun Care Kit - $150 Value',
      banner_text: 'Up to 65% Savings on Best of Dermstore',
      popup_text: 'Save up to 65% on Best of Dermstore kits. While stock lasts.',
      ratings_reviews: '4.75 Stars 4 Reviews',
      ratingValue: 4.75,
      reviewCount: 4,
      price: 50,
      quantity:1,
      name2: 'Best of Dermstore x Skin Cancer Foundation Sun Care Kit - $150 Value',
    },
    {
      id: 2,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11289609-1174892770940184.jpg',
      name: 'SkinCeuticals C E Ferulic (1 fl. oz.)',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '4.75 Stars 4532 Reviews',
      ratingValue: 4.75,
      reviewCount: 4532,
      price: 169,
      quantity:1,
      name2: 'SkinCeuticals C E Ferulic (1 fl. oz.)',
    },
    {
      id: 3,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11370303-1074944341868735.jpg',
      name: 'EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)',
      banner_text: 'Up to 15% savings on Auto-Replenishment',
      popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',
      ratings_reviews: '4.79 Stars 4482 Reviews',
      ratingValue: 4.79,
      reviewCount: 4482,
      price: 39,
      quantity:1,
      name2: 'EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)',
    },
    {
      id: 4,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/13278644-1174951890758541.jpg',
      name: 'Best of Dermstore Refresh Edit - $640 Value',
      banner_text: 'Up to 65% Savings on Best of Dermstore',
      popup_text: 'Save up to 65% on Best of Dermstore kits. While stock lasts.',
      ratings_reviews: '5.0 Stars 4 Reviews',
      ratingValue: 5,
      reviewCount: 4,
      price: 150,
      quantity:1,
      name2: 'Best of Dermstore Refresh Edit - $640 Value',
    },
    {
      id: 5,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12596429-3594871019700125.jpg',
      name: 'SkinMedica TNS Advanced+ Serum (1 oz.)',
      banner_text: 'Up to 15% savings on Auto-Replenishment',
      popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',
      ratings_reviews: '4.56 Stars 252 Reviews',
      ratingValue: 4.56,
      reviewCount: 252,
      price: 295,
      quantity:1,
      name2: 'SkinMedica TNS Advanced+ Serum (1 oz.)',
    },
    {
      id: 6,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11291541-5024871574576726.jpg',
      name: 'Obagi Medical Nu-Derm Toner (6.7 fl. oz.)',
      banner_text: '$10 Obagi Gift',
      popup_text: 'Receive an Obagi PROFESSIONAL-C MICRODERMABRASION POLISH + MASK - 5 g. ($10 value) when you spend $125 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
      ratings_reviews: '4.81 Stars 273 Reviews',
      ratingValue: 4.81,
      reviewCount: 273,
      price: 43,
      quantity:1,
      name2: 'Obagi Medical Nu-Derm Toner (6.7 fl. oz.)',
    },
    {
      id: 7,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11588281-8764882139037003.jpg',
      name: 'Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (0.5 oz. - $175 Value)',
      banner_text: '$15 Sunday Riley Gift',
      popup_text: 'Receive a Sunday Riley C.E.O. 15% Vitamin C Brightening Serum 5ml ($15 value) when you spend over $100 on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
      ratings_reviews: '4.64 Stars 665 Reviews',
      ratingValue: 4.64,
      reviewCount: 665,
      price: 122,
      quantity:1,
      name2: 'Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (0.5 oz. - $175 Value)',
    },
    {
      id: 8,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11174178-1044909106371632.jpg',
      name: 'Paula\'s Choice SKIN PERFECTING 2 BHA Liquid Exfoliant (4 fl. oz.)',
      banner_text: 'Up to 15% savings on Auto-Replenishment',
      popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',
      ratings_reviews: '4.66 Stars 700 Reviews',
      ratingValue: 4.66,
      reviewCount: 700,
      price: 32,
      quantity:1,
      name2: 'Paula\'s Choice SKIN PERFECTING 2 BHA Liquid Exfoliant (4 fl. oz.)',
    },
    {
      id: 9,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12901956-1634871508329232.jpg',
      name: 'Supergoop!® Unseen Sunscreen SPF 40 1.7 fl. oz.',
      banner_text: 'REN Clean Skincare Gift',
      popup_text: 'Receive a REN Clean Skincare Perfect Canvas 2ml. when you spend $50 or more on Conscious Beauty products. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
      ratings_reviews: '4.7 Stars 506 Reviews',
      ratingValue: 4.7,
      reviewCount: 506,
      price: 36,
      quantity:1,
      name2: 'Supergoop!® Unseen Sunscreen SPF 40 1.7 fl. oz.',
    },
    {
      id: 10,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12915557-2954917112863726.jpg',
      name: 'Oribe Gold Lust Repair Restore Shampoo (8.5 fl. oz.)',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '4.73 Stars 177 Reviews',
      ratingValue: 4.73,
      reviewCount: 177,
      price: 49,
      quantity:1,
      name2: 'Oribe Gold Lust Repair Restore Shampoo (8.5 fl. oz.)',
    },
    {
      id: 11,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11290635-1804892767902966.jpg',
      name: 'SkinCeuticals Triple Lipid Restore 242 (1.6 fl. oz.)',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '4.8 Stars 1725 Reviews',
      ratingValue: 4.8,
      reviewCount: 1725,
      price: 136,
      quantity:1,
      name2: 'SkinCeuticals Triple Lipid Restore 242 (1.6 fl. oz.)',
    },
]  




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
