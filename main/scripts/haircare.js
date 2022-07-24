// import getData from "./footer.js"
// // document.getElementById("footer").innerHTML =footer()
let data = [
    {
      id: 1,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11286095-6314966113137112.jpg',
      name: 'Alterna CAVIAR Anti-Aging Replenishing Moisture Shampoo (16.5 fl. oz.)',
      banner_text: 'Up to 15% savings on Auto-Replenishment',
      popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',
      ratings_reviews: '4.7 Stars 64 Reviews',
      ratingValue: 4.7,
      reviewCount: 64,
      price: 54,
      name2: 'Alterna CAVIAR Anti-Aging Replenishing Moisture Shampoo (16.5 fl. oz.)',
    },
    {
      id: 2,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11286093-2554966112826030.jpg',
      name: 'Alterna CAVIAR Anti-Aging Replenishing Moisture Conditioner (16.5 fl. oz.)',
      banner_text: 'Up to 15% savings on Auto-Replenishment',
      popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',
      ratings_reviews: '4.63 Stars 79 Reviews',
      ratingValue: 4.63,
      reviewCount: 79,
      price: 55,
      name2: 'Alterna CAVIAR Anti-Aging Replenishing Moisture Conditioner (16.5 fl. oz.)',
    },
    {
      id: 3,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11524752-9174966113265068.jpg',
      name: 'Alterna CAVIAR Anti-Aging Replenishing Moisture CC Cream (3.4 fl. oz.)',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '4.42 Stars 53 Reviews',
      ratingValue: 4.42,
      reviewCount: 53,
      price: 30,
      name2: 'Alterna CAVIAR Anti-Aging Replenishing Moisture CC Cream (3.4 fl. oz.)',
    },
    {
      id: 4,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/13462860-2144969531274424.jpg',
      name: 'Olaplex Limited Edition Cleanse and Treatment Bundle',
      banner_text: '3x Points + Olaplex Gift',
      popup_text: 'Rewards Members earn triple points on Olaplex. Plus, receive an Olaplex No.9 Bond Protector Nourishing Hair Serum 20mL Sample when you spend $75 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid through 7/25.',
      ratings_reviews: '',
      ratingValue: '',
      reviewCount: '',
      price: 84,
      name2: 'Olaplex Limited Edition Cleanse and Treatment Bundle',
    },
    {
      id: 5,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11128858-1184969821365946.jpg',
      name: 'Briogeo Don\'t Despair Repair Deep Conditioning Mask (8 oz.)',
      banner_text: 'Briogeo Gift',
      popup_text: 'Receive a Briogeo Superfoods Avocado + Kiwi Mega Moisture Superfoods Hair Mask - 1 oz. when you spend $50 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid limited time, while supplies last.',
      ratings_reviews: '4.48 Stars 377 Reviews',
      ratingValue: 4.48,
      reviewCount: 377,
      price: 39,
      name2: 'Briogeo Don\'t Despair Repair Deep Conditioning Mask (8 oz.)',
    },
    {
      id: 6,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12865580-1554866081885372.jpg',
      name: 'Sol de Janeiro Brazilian Joia Dry Shampoo 120g',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '',
      ratingValue: '',
      reviewCount: '',
      price: 24,
      name2: 'Sol de Janeiro Brazilian Joia Dry Shampoo 120g',
    },
    {
      id: 7,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12915557-2954917112863726.jpg',
      name: 'Oribe Gold Lust Repair Restore Shampoo (8.5 fl. oz.)',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '4.73 Stars 177 Reviews',
      ratingValue: 4.73,
      reviewCount: 177,
      price: 49,
      name2: 'Oribe Gold Lust Repair Restore Shampoo (8.5 fl. oz.)',
    },
    {
      id: 8,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/13844499-1834963559609475.jpg',
      name: 'ghd and Charlotte Mensah Dry and Style Set (Worth $369.00)',
      banner_text: 'Save 10%',
      popup_text: 'Save 10% on select products. Discount automatically applied. Offer valid for a limited time only.',
      ratings_reviews: '',
      ratingValue: '',
      reviewCount: '',
      price: 332,
      name2: 'ghd and Charlotte Mensah Dry and Style Set (Worth $369.00)',
    },
    {
      id: 9,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11310921-1004895711663196.jpg',
      name: 'Oribe Dry Texturizing Spray (8.5 oz.)',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '4.64 Stars 211 Reviews',
      ratingValue: 4.64,
      reviewCount: 211,
      price: 49,
      name2: 'Oribe Dry Texturizing Spray (8.5 oz.)',
    },
    {
      id: 10,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/13882835-1734968958624221.jpg',
      name: 'dpHUE Apple Cidar Vinegar Power Duo',
      banner_text: 'New Arrival',
      popup_text: 'Shop new arrivals to discover the latest in beauty, skin and hair care and stock up on seasonal must-haves and everyday essentials.',
      ratings_reviews: '',
      ratingValue: '',
      reviewCount: '',
      price: 74,
      name2: 'dpHUE Apple Cidar Vinegar Power Duo',
    },
    {
      id: 11,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12902037-4044866432108096.jpg',
      name: 'R+Co TELEVISION Perfect Hair Shampoo (Various Sizes)',
      banner_text: 'R+Co Gift',
      popup_text: 'Receive a R+Co Cool Wind PH Perfect Air-Dry Crème - 1 oz when you spend $50 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
      ratings_reviews: '4.0 Stars 6 Reviews',
      ratingValue: 4,
      reviewCount: 6,
      price: 32,
      name2: 'R+Co TELEVISION Perfect Hair Shampoo (Various Sizes)',
    },
    {
      id: 12,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/13521538-9254921014225177.jpg',
      name: 'Oribe Hair Alchemy Fortifying Treatment Serum 175ml',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '5.0 Stars 2 Reviews',
      ratingValue: 5,
      reviewCount: 2,
      price: 64,
      name2: 'Oribe Hair Alchemy Fortifying Treatment Serum 175ml',
    },
    {
      id: 13,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12658441-1014951908068217.jpg',
      name: 'Olaplex Shampoo and Conditioner Bundle',
      banner_text: '3x Points + Olaplex Gift',
      popup_text: 'Rewards Members earn triple points on Olaplex. Plus, receive an Olaplex No.9 Bond Protector Nourishing Hair Serum 20mL Sample when you spend $75 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid through 7/25.',
      ratings_reviews: '4.8 Stars 5 Reviews',
      ratingValue: 4.8,
      reviewCount: 5,
      price: 60,
      name2: 'Olaplex Shampoo and Conditioner Bundle',
    },
    {
      id: 14,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12901179-1534866391928052.jpg',
      name: 'R+Co DALLAS Biotin Thickening Shampoo (Various Sizes)',
      banner_text: 'R+Co Gift',
      popup_text: 'Receive a R+Co Cool Wind PH Perfect Air-Dry Crème - 1 oz when you spend $50 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
      ratings_reviews: '5.0 Stars 1 Reviews',
      ratingValue: 5,
      reviewCount: 1,
      price: 32,
      name2: 'R+Co DALLAS Biotin Thickening Shampoo (Various Sizes)',
    },
    {
      id: 15,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11447814-1144969821671793.jpg',
      name: 'Briogeo Scalp Revival Charcoal Coconut Oil Micro-Exfoliating Shampoo (8 oz.)',
      banner_text: 'Briogeo Gift',
      popup_text: 'Receive a Briogeo Superfoods Avocado + Kiwi Mega Moisture Superfoods Hair Mask - 1 oz. when you spend $50 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid limited time, while supplies last.',
      ratings_reviews: '4.58 Stars 232 Reviews',
      ratingValue: 4.58,
      reviewCount: 232,
      price: 42,
      name2: 'Briogeo Scalp Revival Charcoal Coconut Oil Micro-Exfoliating Shampoo (8 oz.)',
    },
    {
      id: 16,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11771542-1104931365592631.jpg',
      name: 'Briogeo Don\'t Despair Repair Super Moisture Shampoo (16 oz.)',
      banner_text: 'Briogeo Gift',
      popup_text: 'Receive a Briogeo Superfoods Avocado + Kiwi Mega Moisture Superfoods Hair Mask - 1 oz. when you spend $50 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid limited time, while supplies last.',
      ratings_reviews: '4.54 Stars 83 Reviews',
      ratingValue: 4.54,
      reviewCount: 83,
      price: 39,
      name2: 'Briogeo Don\'t Despair Repair Super Moisture Shampoo (16 oz.)',
    },
    {
      id: 17,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12902618-1674866426756777.jpg',
      name: 'R+Co TELEVISION Perfect Hair Conditioner (Various Sizes)',
      banner_text: 'R+Co Gift',
      popup_text: 'Receive a R+Co Cool Wind PH Perfect Air-Dry Crème - 1 oz when you spend $50 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
      ratings_reviews: '3.5 Stars 6 Reviews',
      ratingValue: 3.5,
      reviewCount: 6,
      price: 32,
      name2: 'R+Co TELEVISION Perfect Hair Conditioner (Various Sizes)',
    },
    {
      id: 18,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/13175693-1054889419083984.jpg',
      name: 'Living Proof Perfect hair Day (PhD) Advanced Clean Dry Shampoo 2.4 oz.',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '3.43 Stars 7 Reviews',
      ratingValue: 3.43,
      reviewCount: 7,
      price: 16,
      name2: 'Living Proof Perfect hair Day (PhD) Advanced Clean Dry Shampoo 2.4 oz.',
    },
    {
      id: 19,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/13841358-1424965573855987.jpg',
      name: 'ghd Limited Edition Glide Smoothing Hot Brush - Orchid Pink',
      banner_text: 'New Arrival',
      popup_text: 'Shop new arrivals to discover the latest in beauty, skin and hair care and stock up on seasonal must-haves and everyday essentials.',
      ratings_reviews: '',
      ratingValue: '',
      reviewCount: '',
      price: 169,
      name2: 'ghd Limited Edition Glide Smoothing Hot Brush - Orchid Pink',
    },
    {
      id: 20,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12578298-1674930874184024.jpg',
      name: 'Living Proof Restore Repair Mask (6.7 fl. oz.)',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '4.82 Stars 28 Reviews',
      ratingValue: 4.82,
      reviewCount: 28,
      price: 38,
      name2: 'Living Proof Restore Repair Mask (6.7 fl. oz.)',
    },
    {
      id: 21,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/13882837-1164968958781790.jpg',
      name: 'dpHUE Brightening Collection',
      banner_text: 'New Arrival',
      popup_text: 'Shop new arrivals to discover the latest in beauty, skin and hair care and stock up on seasonal must-haves and everyday essentials.',
      ratings_reviews: '',
      ratingValue: '',
      reviewCount: '',
      price: 82,
      name2: 'dpHUE Brightening Collection',
    },
    {
      id: 22,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12597166-1134871572767741.jpg',
      name: 'Olaplex No. 7 Bonding Oil (1 fl. oz.)',
      banner_text: '3x Points + Olaplex Gift',
      popup_text: 'Rewards Members earn triple points on Olaplex. Plus, receive an Olaplex No.9 Bond Protector Nourishing Hair Serum 20mL Sample when you spend $75 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid through 7/25.',
      ratings_reviews: '4.58 Stars 194 Reviews',
      ratingValue: 4.58,
      reviewCount: 194,
      price: 30,
      name2: 'Olaplex No. 7 Bonding Oil (1 fl. oz.)',
    },
    {
      id: 23,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12915670-2114866566888004.jpg',
      name: 'Harry Josh Pro Tools Ceramic Flat Styling Iron 1.25 Inch (2 piece)',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '4.75 Stars 101 Reviews',
      ratingValue: 4.75,
      reviewCount: 101,
      price: 200,
      name2: 'Harry Josh Pro Tools Ceramic Flat Styling Iron 1.25 Inch (2 piece)',
    },
    {
      id: 24,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12597161-1214871574856017.jpg',
      name: 'Olaplex No. 3 Hair Perfector (3.3 fl. oz.)',
      banner_text: '3x Points + Olaplex Gift',
      popup_text: 'Rewards Members earn triple points on Olaplex. Plus, receive an Olaplex No.9 Bond Protector Nourishing Hair Serum 20mL Sample when you spend $75 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid through 7/25.',
      ratings_reviews: '4.7 Stars 503 Reviews',
      ratingValue: 4.7,
      reviewCount: 503,
      price: 30,
      name2: 'Olaplex No. 3 Hair Perfector (3.3 fl. oz.)',
    },
    {
      id: 25,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12915558-2034917112938192.jpg',
      name: 'Oribe Gold Lust Repair Restore Conditioner (6.8 fl. oz.)',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '4.7 Stars 127 Reviews',
      ratingValue: 4.7,
      reviewCount: 127,
      price: 52,
      name2: 'Oribe Gold Lust Repair Restore Conditioner (6.8 fl. oz.)',
    },
    {
      id: 26,
      image: 'https://static.thcdn.com/images/small/webp//productimg/1600/1600/12597164-1244777647709491.jpg',
      name: 'Olaplex No.5 Bond Maintenance Conditioner 8.5 oz',
      banner_text: '3x Points + Olaplex Gift',
      popup_text: 'Rewards Members earn triple points on Olaplex. Plus, receive an Olaplex No.9 Bond Protector Nourishing Hair Serum 20mL Sample when you spend $75 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid through 7/25.',
      ratings_reviews: '4.58 Stars 59 Reviews',
      ratingValue: 4.58,
      reviewCount: 59,
      price: 30,
      name2: 'Olaplex No.5 Bond Maintenance Conditioner 8.5 oz',
    },
    {
      id: 27,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12597163-5554871574934407.jpg',
      name: 'Olaplex No. 4 Bond Maintenance Shampoo (8.5 fl. oz.)',
      banner_text: '3x Points + Olaplex Gift',
      popup_text: 'Rewards Members earn triple points on Olaplex. Plus, receive an Olaplex No.9 Bond Protector Nourishing Hair Serum 20mL Sample when you spend $75 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid through 7/25.',
      ratings_reviews: '4.78 Stars 348 Reviews',
      ratingValue: 4.78,
      reviewCount: 348,
      price: 30,
      name2: 'Olaplex No. 4 Bond Maintenance Shampoo (8.5 fl. oz.)',
    },
    {
      id: 28,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12918894-3264869708983022.jpg',
      name: 'Harry Josh Pro Tools Pro Dryer 2000 3 piece',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '4.34 Stars 354 Reviews',
      ratingValue: 4.34,
      reviewCount: 354,
      price: 249,
      name2: 'Harry Josh Pro Tools Pro Dryer 2000 3 piece',
    },
    {
      id: 29,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/13601976-3864949597052111.jpg',
      name: 'Olaplex No.6 100ml',
      banner_text: '3x Points + Olaplex Gift',
      popup_text: 'Rewards Members earn triple points on Olaplex. Plus, receive an Olaplex No.9 Bond Protector Nourishing Hair Serum 20mL Sample when you spend $75 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid through 7/25.',
      ratings_reviews: '4.8 Stars 5 Reviews',
      ratingValue: 4.8,
      reviewCount: 5,
      price: 30,
      name2: 'Olaplex No.6 100ml',
    },
    {
      id: 30,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11218626-4084871276230596.jpg',
      name: 'UNITE Hair 7SECONDS Detangler (8 oz.)',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '4.83 Stars 52 Reviews',
      ratingValue: 4.83,
      reviewCount: 52,
      price: 32.5,
      name2: 'UNITE Hair 7SECONDS Detangler (8 oz.)',
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