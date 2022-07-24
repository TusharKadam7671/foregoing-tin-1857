// import getData from "./footer.js"
// // document.getElementById("footer").innerHTML =footer()
let data = [
    {
      id: 1,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/13798705-1674956596912064.jpg',
      name: 'jane iredale Glow Time Pro BB Cream 40ml (Various Shades)',
      banner_text: 'New Arrival',
      popup_text: 'Shop new arrivals to discover the latest in beauty, skin and hair care and stock up on seasonal must-haves and everyday essentials.',
      price: 52,
      ratings_reviews: '',
      ratingValue: 4.5,
      reviewCount: 429,
    },
    {
      id: 2,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/13187846-8284878568539867.jpg',
      name: 'GRANDE Cosmetics GrandeLASH-MD Lash Enhancing Serum (Various Options)',
      banner_text: '$10 GRANDE Cosmetics Gift',
      popup_text: 'Receive a GRANDE Cosmetics GrandeLIPS Hydrating Lip Plumper Gloss - Cashmere Buff ($10 value) when you spend $65 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
      price: 21,
      ratings_reviews: '',
      ratingValue: 4.5,
      reviewCount: 429,
    },
    {
      id: 3,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11370314-1304944342872775.jpg',
      name: 'EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)',
      banner_text: '$15 EltaMD Gift',
      popup_text: 'Receive an EltaMD AM Therapy Deluxe 0.5 oz ($15 value) when you spend $75 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
      price: 38.5,
      ratings_reviews: '4.66 Stars 890 Reviews',
      ratingValue: 4.66,
      reviewCount: 890,
    },
    {
      id: 4,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12902688-1514869963703809.jpg',
      name: 'ILIA Limitless Lash Mascara (Various Sizes)',
      banner_text: '',
      popup_text: '',
      price: 21,
      ratings_reviews: '4.5 Stars 48 Reviews',
      ratingValue: 4.5,
      reviewCount: 48,
    },
    {
      id: 5,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/13674838-2504939183735374.jpg',
      name: 'jane iredale Pure Pressed Blush 3.7g (Various Shades)',
      banner_text: '',
      popup_text: '',
      price: 32,
      ratings_reviews: '',
      ratingValue: 4.5,
      reviewCount: 429,
    },
    {
      id: 6,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/10877675-1204892801854575.jpg',
      name: 'jane iredale Smooth Affair Brightening Face Primer (1.7 fl. oz.)',
      banner_text: '',
      popup_text: '',
      price: 50,
      ratings_reviews: '4.64 Stars 108 Reviews',
      ratingValue: 4.64,
      reviewCount: 108,
    },
    {
      id: 7,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11370772-1364878265774365.jpg',
      name: 'RevitaLash Advanced Eyelash Conditioner - 3 Month Supply (0.067 fl. oz.)',
      banner_text: '20% Off + $15 RevitaLash Gift',
      popup_text: 'Enjoy 20% off RevitaLash. Plus, receive a RevitaLash Double Ended Volume Set Mascara Deluxe Sample ($15 value) when you spend $125 or more on the brand Gift will be awarded at the cart. Offer valid now through 7/24.',
      price: 98,
      ratings_reviews: '4.57 Stars 356 Reviews',
      ratingValue: 4.57,
      reviewCount: 356,
    },
    {
      id: 8,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11307246-1314971351868293.jpg',
      name: 'By Terry Baume de Rose Lip Care (10 g.)',
      banner_text: '',
      popup_text: '',
      price: 60,
      ratings_reviews: '4.58 Stars 131 Reviews',
      ratingValue: 4.58,
      reviewCount: 131,
    },
    {
      id: 9,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11493615-1564871517358554.jpg',
      name: 'jane iredale Just Kissed Lip and Cheek Stain (0.1 oz.)',
      banner_text: '',
      popup_text: '',
      price: 32,
      ratings_reviews: '4.8 Stars 201 Reviews',
      ratingValue: 4.8,
      reviewCount: 201,
    },
    {
      id: 10,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/13312867-5774953412900584.jpg',
      name: 'RÓEN Disco Eye (Worth $29.00)',
      banner_text: '$29 RÓEN Gift',
      popup_text: 'Receive a RÓEN Disco Eye ($29 value) when you spend $60 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
      price: 29,
      ratings_reviews: '',
      ratingValue: 4.5,
      reviewCount: 429,
    },
    {
      id: 11,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11814869-9924866362390772.jpg',
      name: 'Colorescience Sunforgettable® Total Protection™ Face Shield SPF 50 (PA+++) (1.8 fl. oz.)',
      banner_text: 'Up to 15% savings on Auto-Replenishment',
      popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',
      price: 42,
      ratings_reviews: '4.5 Stars 372 Reviews',
      ratingValue: 4.5,
      reviewCount: 372,
    },
    {
      id: 12,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11207544-1114918471847064.jpg',
      name: 'DHC Lip Cream (0.05 oz.)',
      banner_text: '',
      popup_text: '',
      price: 9.5,
      ratings_reviews: '4.6 Stars 87 Reviews',
      ratingValue: 4.6,
      reviewCount: 87,
    },
    {
      id: 13,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11207548-1814918472022486.jpg',
      name: 'DHC Mascara Perfect Pro Double Protection - Black (0.17 oz.)',
      banner_text: '',
      popup_text: '',
      price: 19,
      ratings_reviews: '4.52 Stars 172 Reviews',
      ratingValue: 4.52,
      reviewCount: 172,
    },
    {
      id: 14,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12013998-9174944089061762.jpg',
      name: 'Weleda Skin Food Lip Butter (0.27 fl. oz.)',
      banner_text: '',
      popup_text: '',
      price: 6.99,
      ratings_reviews: '3.8 Stars 40 Reviews',
      ratingValue: 3.8,
      reviewCount: 40,
    },
    {
      id: 15,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12905951-2144869966339537.jpg',
      name: 'ILIA Super Serum Skin Tint SPF 40 (1 fl.oz)',
      banner_text: '',
      popup_text: '',
      price: 48,
      ratings_reviews: '4.33 Stars 165 Reviews',
      ratingValue: 4.33,
      reviewCount: 165,
    },
    {
      id: 16,
      image: 'https://static.thcdn.com/images/small/webp/productimg/1600/1600/11527835-1654633328833086.jpg',
      name: 'Dermablend Flawless Creator Multi-Use Liquid Foundation (1 fl. oz.)',
      banner_text: '$16 Vichy Gift',
      popup_text: 'Receive a Vichy LiftActiv Night Supreme ($16 value) when you spend $50 or more on Dermablend. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
      price: 40,
      ratings_reviews: '4.51 Stars 55 Reviews',
      ratingValue: 4.51,
      reviewCount: 55,
    },
    {
      id: 17,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11207443-2214866130380732.jpg',
      name: 'DHC Deep Cleansing Oil (Various Sizes)',
      banner_text: '',
      popup_text: '',
      price: 21,
      ratings_reviews: '4.78 Stars 1417 Reviews',
      ratingValue: 4.78,
      reviewCount: 1417,
    },
    {
      id: 18,
      image: 'https://static.thcdn.com/images/small/webp//productimg/1600/1600/12104286-2034786788446706.jpg',
      name: 'Perricone MD No Makeup Blush (0.3 fl. oz.)',
      banner_text: '',
      popup_text: '',
      price: 35,
      ratings_reviews: '4.53 Stars 19 Reviews',
      ratingValue: 4.53,
      reviewCount: 19,
    },
    {
      id: 19,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11653526-1214904426547189.jpg',
      name: 'Eyeko Lash Alert Mascara - Black (8 ml.)',
      banner_text: '',
      popup_text: '',
      price: 20,
      ratings_reviews: '4.81 Stars 16 Reviews',
      ratingValue: 4.81,
      reviewCount: 16,
    },
    {
      id: 20,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12903111-1614959145345515.jpg',
      name: 'COOLA Classic Liplux Organic Hydrating Lip Oil Sunscreen SPF 30 (0.11 fl. oz.)',
      banner_text: '',
      popup_text: '',
      price: 18,
      ratings_reviews: '4.38 Stars 13 Reviews',
      ratingValue: 4.38,
      reviewCount: 13,
    },
    {
      id: 21,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/13312868-8844896425565531.jpg',
      name: 'RÓEN Everything Eye Brush',
      banner_text: '$29 RÓEN Gift',
      popup_text: 'Receive a RÓEN Disco Eye ($29 value) when you spend $60 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
      price: 32,
      ratings_reviews: '',
      ratingValue: 4.5,
      reviewCount: 429,
    },
    {
      id: 22,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11207545-1194877008327185.jpg',
      name: 'DHC Liquid Eyeliner EX - Black (0.01 fl. oz.)',
      banner_text: '',
      popup_text: '',
      price: 20,
      ratings_reviews: '4.56 Stars 18 Reviews',
      ratingValue: 4.56,
      reviewCount: 18,
    },
    {
      id: 23,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/10560418-1514911743023953.jpg',
      name: 'RevitaLash RevitaBrow Advanced Eyebrow Conditioner - 4 Month Supply (0.101 fl. oz.)',
      banner_text: '20% Off + $15 RevitaLash Gift',
      popup_text: 'Enjoy 20% off RevitaLash. Plus, receive a RevitaLash Double Ended Volume Set Mascara Deluxe Sample ($15 value) when you spend $125 or more on the brand Gift will be awarded at the cart. Offer valid now through 7/24.',
      price: 110,
      ratings_reviews: '4.68 Stars 219 Reviews',
      ratingValue: 4.68,
      reviewCount: 219,
    },
    {
      id: 24,
      image: 'https://static.thcdn.com/images/small/webp//productimg/1600/1600/11454171-2124741436293347.jpg',
      name: 'jane iredale PureBrow Brow Gel (0.17 oz.)',
      banner_text: '',
      popup_text: '',
      price: 26,
      ratings_reviews: '4.47 Stars 55 Reviews',
      ratingValue: 4.47,
      reviewCount: 55,
    },
    {
      id: 25,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12039671-5374866375954501.jpg',
      name: 'PCA SKIN Hyaluronic Acid Lip Booster (0.24 fl. oz.)',
      banner_text: '',
      popup_text: '',
      price: 47,
      ratings_reviews: '4.69 Stars 130 Reviews',
      ratingValue: 4.69,
      reviewCount: 130,
    },
    {
      id: 26,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/10560417-1534868371575033.jpg',
      name: 'RevitaLash Advanced Eyelash Conditioner - 6 Month Supply (0.118 fl. oz.)',
      banner_text: '20% Off + $15 RevitaLash Gift',
      popup_text: 'Enjoy 20% off RevitaLash. Plus, receive a RevitaLash Double Ended Volume Set Mascara Deluxe Sample ($15 value) when you spend $125 or more on the brand Gift will be awarded at the cart. Offer valid now through 7/24.',
      price: 150,
      ratings_reviews: '4.68 Stars 148 Reviews',
      ratingValue: 4.68,
      reviewCount: 148,
    },
    {
      id: 27,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12905980-1574869966464844.jpg',
      name: 'ILIA Nightlite Bronzing Powder (0.42 oz.)',
      banner_text: '',
      popup_text: '',
      price: 34,
      ratings_reviews: '4.92 Stars 13 Reviews',
      ratingValue: 4.92,
      reviewCount: 13,
    },
    {
      id: 28,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12903101-1434871508445095.jpg',
      name: 'Supergoop!® Sunnyscreen SPF 50 Stick 0.7 oz.',
      banner_text: '',
      popup_text: '',
      price: 24,
      ratings_reviews: '4.83 Stars 6 Reviews',
      ratingValue: 4.83,
      reviewCount: 6,
    },
    {
      id: 29,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11429021-1154946401842096.jpg',
      name: 'La Roche-Posay Anthelios 50 Mineral Sunscreen Tinted for Face, Ultra-Light Fluid SPF 50 with Antioxidants, 1.7 Fl. Oz.',
      banner_text: '',
      popup_text: '',
      price: 34.99,
      ratings_reviews: '3.5 Stars 2 Reviews',
      ratingValue: 3.5,
      reviewCount: 2,
    },
    {
      id: 30,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/13225357-2244885550140839.jpg',
      name: 'Obagi Nu-Cil™ Eyelash Enhancing Serum',
      banner_text: '',
      popup_text: '',
      price: 120,
      ratings_reviews: '4.4 Stars 10 Reviews',
      ratingValue: 4.4,
      reviewCount: 10,
    },
    {
      id: 31,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11370360-9104866342912066.jpg',
      name: 'Eminence Organic Skin Care Herbal Eye Makeup Remover 5.07 fl. oz',
      banner_text: '$42 Eminence Organic Skin Care Gift',
      popup_text: 'Receive a Eminence Organic Skin Care Firm Skin Acai Cleanser 8.4 fl. oz ($42 value) when you spend $150 on 2 or more products. Complimentary gift will be awarded at the cart. Offer valid limited time, while supplies last.',
      price: 29,
      ratings_reviews: '4.61 Stars 67 Reviews',
      ratingValue: 4.61,
      reviewCount: 67,
    },
    {
      id: 32,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11422018-5884870995772050.jpg',
      name: 'SkinMedica HA5 Smooth Plump Lip System (2 piece)',
      banner_text: '',
      popup_text: '',
      price: 68,
      ratings_reviews: '4.17 Stars 60 Reviews',
      ratingValue: 4.17,
      reviewCount: 60,
    },
  ]
  append(data)
  
  
  function append(data){
    let container = document.getElementById("product")
    container.innerHTML = null;
    data.forEach(({image,name,banner_text,ratings_reviews,price},i,arr) => {
        let images = document.createElement("img")
        images.src=image
        let names = document.createElement("p")
        names.innerText=name;
        let banners = document.createElement("p")
        if(banner_text!="")
        {
        banners.innerText=banner_text
        banners.style.border="1px solid rgb(204,204,204)"
        banners.style.width="90%"
        banners.style.margin="auto"
        }
        banners.setAttribute("class","banners")
        let prices = document.createElement("p")
        prices.innerText=`$${price}`
        let box = document.createElement("div")
        box.setAttribute("class","cartdiv");
        let button=document.createElement("button")
        button.setAttribute("class","buybutton")
        button.innerText="QUICK BUY"
        button.addEventListener("click",()=>{
          storeData(arr[i])
        })
        box.append(images,names,banners,prices,button)
        container.append(box)
        
       })
    
  }
  
  
  let sort = ()=>{
    let value = document.getElementById('sort').value
  
    if(value ==="pricelth")
    { 
      data = data.sort(function(a,b){
        
        if(a.price>b.price) return 1
        if(a.price<b.price) return -1 
        return 0
      })
      append(data)
    }
    else if(value ==="pricehtl")
    { 
      data = data.sort(function(a,b){
        
        if(a.price>b.price) return -1
        if(a.price<b.price) return 1 
        return 0
      })
      append(data)
    }
    else if(value=="bestsellers")
    {
      data = data.sort(function(a,b){
        
        if(a.ratingValue>b.ratingValue) return 1
        if(a.ratingValue<b.ratingValue) return -1 
        return 0
      })
      append(data)
    }
    else if(value=="atoz")
    {
      data = data.sort(function(a,b){
        
        if(a.name>b.name) return 1
        if(a.name<b.name) return -1 
        return 0
      })
      append(data)
    }
    else
    {
      window.location.reload()
    }
  }
  
  let storeData = (data)=>{
    if(data.quantity==null)
    {
      data.quantity=1
    }
    else
    {
      data.quantity++
    }
    console.log(data)
   localStorage.setItem("cart_data",JSON.stringify(data))
  }
  
  let filtering=()=>{
    if(document.getElementById("LessThan10").checked)
    {
      
      let filter = data.filter((el)=>{
       return el.price<10
      })
      data = filter
      append(data)
    }
    else if(document.getElementById("LessThan25").checked)
    {
      let filter = data.filter((el)=>{
        return el.price>=10 && el.price<25
       })
       data = filter
       append(data)
    }
    else if(document.getElementById("LessThan50").checked)
    {
      let filter = data.filter((el)=>{
        return el.price>=25 && el.price<50
       })
       data = filter
       append(data)
    }
    else if(document.getElementById("LessThan100").checked)
    {
      let filter = data.filter((el)=>{
        return el.price>=50 && el.price<=100
       })
       data = filter
       append(data)
    }
    else if(document.getElementById("MoreThan100").checked)
    {
      let filter = data.filter((el)=>{
        return el.price>=100
       })
       data = filter
       append(data)
    }
    else
    {
      window.location.reload()
    }
    
    
  
  
  
  }