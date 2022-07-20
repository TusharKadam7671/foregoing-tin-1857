let data = [
    {id: 1, image:'https://static.thcdn.com/images/small/webp//productimg/original/13811675-9994964348315184.jpg',name: 'Best of Dermstore x Skin Cancer Foundation Sun Care Kit - $150 Value', banner_text: 'Up to 65% Savings on Best of Dermstore',popup_text: 'Save up to 65% on Best of Dermstore kits. While stock lasts.', ratings_reviews: '4.75 Stars 4 Reviews',ratingValue: 4.75,reviewCount: 4,price: 50,name2: 'Best of Dermstore x Skin Cancer Foundation Sun Care Kit - $150 Value',},
    {id: 2, image:'https://static.thcdn.com/images/small/webp//productimg/original/11289609-1174892770940184.jpg',name: 'SkinCeuticals C E Ferulic (1 fl. oz.)', banner_text:"Up to 15% savings on Auto-Replenishment" ,popup_text: '',ratings_reviews: '4.75 Stars 4532 Reviews',ratingValue: 4.75,reviewCount: 4532, price:169,name2: 'SkinCeuticals C E Ferulic (1 fl. oz.)',},
    {id: 3, image:'https://static.thcdn.com/images/small/webp//productimg/original/11370303-1074944341868735.jpg',name: 'EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)', banner_text: 'Up to 15% savings on Auto-Replenishment',popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',ratings_reviews: '4.79 Stars 4482 Reviews',ratingValue: 4.79,reviewCount: 4482,price: 39,name2: 'EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)',},  
    {id: 4, image:'https://static.thcdn.com/images/small/webp//productimg/original/13278644-1174951890758541.jpg',name: 'Best of Dermstore Refresh Edit - $640 Value', banner_text: 'Up to 65% Savings on Best of Dermstore',popup_text: 'Save up to 65% on Best of Dermstore kits. While stock lasts.', ratings_reviews: '5.0 Stars 4 Reviews',ratingValue: 5,reviewCount: 4,price: 150,name2: 'Best of Dermstore Refresh Edit - $640 Value',},
    {id: 5, image:'https://static.thcdn.com/images/small/webp//productimg/original/12596429-3594871019700125.jpg',name: 'SkinMedica TNS Advanced+ Serum (1 oz.)', banner_text: 'Up to 15% savings on Auto-Replenishment',popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',ratings_reviews: '4.56 Stars 252 Reviews',ratingValue: 4.56,reviewCount: 252,price: 295,name2: 'SkinMedica TNS Advanced+ Serum (1 oz.)',},
    {id: 6, image:'https://static.thcdn.com/images/small/webp//productimg/original/11291541-5024871574576726.jpg',name: 'Obagi Medical Nu-Derm Toner (6.7 fl. oz.)', banner_text: '$10 Obagi Gift',popup_text: 'Receive an Obagi PROFESSIONAL-C MICRODERMABRASION POLISH + MASK - 5 g. ($10 value) when you spend $125 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',ratings_reviews: '4.81 Stars 273 Reviews',ratingValue: 4.81,reviewCount: 273,price: 43,name2: 'Obagi Medical Nu-Derm Toner (6.7 fl. oz.)',},
    {id: 7, image:'https://static.thcdn.com/images/small/webp//productimg/original/11588281-8764882139037003.jpg',name: 'Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (0.5 oz. - $175 Value)', banner_text: '$15 Sunday Riley Gift',popup_text: 'Receive a Sunday Riley C.E.O. 15% Vitamin C Brightening Serum 5ml ($15 value) when you spend over $100 on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',ratings_reviews: '4.64 Stars 665 Reviews',ratingValue: 4.64,reviewCount: 665,price: 122,name2: 'Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (0.5 oz. - $175 Value)',},
    {id: 8, image:'https://static.thcdn.com/images/small/webp//productimg/original/11174178-1044909106371632.jpg',name: 'Paula\'s Choice SKIN PERFECTING 2 BHA Liquid Exfoliant (4 fl. oz.)', banner_text: 'Up to 15% savings on Auto-Replenishment',popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',ratings_reviews: '4.66 Stars 700 Reviews', ratingValue: 4.66,reviewCount: 700,price: 32,name2: 'Paula\'s Choice SKIN PERFECTING 2 BHA Liquid Exfoliant (4 fl. oz.)',},
    {id: 9, image:'https://static.thcdn.com/images/small/webp//productimg/original/12901956-1634871508329232.jpg',name: 'Supergoop!® Unseen Sunscreen SPF 40 1.7 fl. oz.', banner_text: 'REN Clean Skincare Gift',popup_text: 'Receive a REN Clean Skincare Perfect Canvas 2ml. when you spend $50 or more on Conscious Beauty products. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',ratings_reviews: '4.7 Stars 506 Reviews',ratingValue: 4.7,reviewCount: 506,price: 36,name2: 'Supergoop!® Unseen Sunscreen SPF 40 1.7 fl. oz.',},
]
let getData=()=>{
    let container = document.getElementById('product')
    container.innerHTML=null

    data.forEach(({image,name,banner_text,ratings_reviews,price}) => {
     let images = document.createElement("img")
     images.src=image
     let names = document.createElement("p")
     names.innerText=name;
     let banners = document.createElement("p")
     if(banners!=="")
     {
     banners.innerText=banner_text
     banners.style.border="1px solid red"
     }
     banners.setAttribute("class","banners")
     

     
     
     let prices = document.createElement("p")
     prices.innerText=`$${price}`
     let box = document.createElement("div")
     let button=document.createElement("button")
     button.setAttribute("class","buybutton")
     button.innerText="QUICK BUY"
     box.append(images,names,banners,prices,button)
     container.append(box)
     
    })
}
getData()