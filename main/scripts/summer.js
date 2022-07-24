// import getData from "./footer.js"
// // document.getElementById("footer").innerHTML =footer()
let data = [
    {
      id: 1,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11370303-1074944341868735.jpg',
      name: 'EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)',
      banner_text: '$15 EltaMD Gift',
      popup_text: 'Receive an EltaMD AM Therapy Deluxe 0.5 oz ($15 value) when you spend $75 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
      ratings_reviews: '4.79 Stars 4492 Reviews',
      ratingValue: 4.79,
      reviewCount: 4492,
      price: 39,
    },
    {
      id: 2,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12941160-7374871557827456.jpg',
      name: 'SkinCeuticals Physical Fusion UV Defense SPF 50',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '4.64 Stars 948 Reviews',
      ratingValue: 4.64,
      reviewCount: 948,
      price: 35,
    },
    {
      id: 3,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12901956-1634871508329232.jpg',
      name: 'Supergoop!® Unseen Sunscreen SPF 40 1.7 fl. oz.',
      banner_text: 'Up to 15% savings on Auto-Replenishment',
      popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',
      ratings_reviews: '4.7 Stars 508 Reviews',
      ratingValue: 4.7,
      reviewCount: 508,
      price: 36,
    },
    {
      id: 4,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12902818-1504973380689714.jpg',
      name: 'TULA Skincare Protect Glow Daily Sunscreen Gel Broad Spectrum SPF 30 (1.7 fl. oz.)',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '4.57 Stars 7 Reviews',
      ratingValue: 4.57,
      reviewCount: 7,
      price: 36,
    },
    {
      id: 5,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11814869-9924866362390772.jpg',
      name: 'Colorescience Sunforgettable® Total Protection™ Face Shield SPF 50 (PA+++) (1.8 fl. oz.)',
      banner_text: 'Up to 15% savings on Auto-Replenishment',
      popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',
      ratings_reviews: '4.5 Stars 372 Reviews',
      ratingValue: 4.5,
      reviewCount: 372,
      price: 42,
    },
    {
      id: 6,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11380203-8304871739045636.jpg',
      name: 'Neocutis JOURNE Revitalizing Day Cream SPF 30 (1.69 fl. oz.)',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '4.61 Stars 36 Reviews',
      ratingValue: 4.61,
      reviewCount: 36,
      price: 189,
    },
    {
      id: 7,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11379889-1364900296183096.jpg',
      name: 'PCA SKIN Sheer Tint Broad Spectrum SPF 45 (1.7 fl. oz.)',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '4.63 Stars 56 Reviews',
      ratingValue: 4.63,
      reviewCount: 56,
      price: 50,
    },
    {
      id: 8,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11290741-2554870995987858.jpg',
      name: 'SkinMedica Essential Defense Mineral Shield Broad-Spectrum SPF 32 - Tinted (1.85 oz.)',
      banner_text: 'Up to 15% savings on Auto-Replenishment',
      popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',
      ratings_reviews: '4.69 Stars 121 Reviews',
      ratingValue: 4.69,
      reviewCount: 121,
      price: 40,
    },
    {
      id: 9,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/13339907-6974915031361006.jpg',
      name: 'Revision Skincare Intellishade Matte Age-Defying Tinted Moisturiser 45 SPF48g',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '5.0 Stars 2 Reviews',
      ratingValue: 5,
      reviewCount: 2,
      price: 80,
    },
    {
      id: 10,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11397660-6144871067794574.jpg',
      name: 'Avene High Protection Tinted Compact SPF 50 - Honey (0.35 oz.)',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '4.25 Stars 16 Reviews',
      ratingValue: 4.25,
      reviewCount: 16,
      price: 38,
    },
    {
      id: 11,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/11307187-1504871259068250.jpg',
      name: 'By Terry Cover Expert Fluid Foundation SPF 15 (1.18 fl. oz.)',
      banner_text: '',
      popup_text: '',
      ratings_reviews: '4.83 Stars 12 Reviews',
      ratingValue: 4.83,
      reviewCount: 12,
      price: 58,
    },
    {
      id: 12,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12900983-1104901829996273.jpg',
      name: 'MDSolarSciences Mineral Creme SPF 50 Broad Spectrum UVA-UVB (1.7 oz.)',
      banner_text: 'Save 25%',
      popup_text: 'Save 25% on select products. Discount automatically applied. Offer valid for a limited time only.',
      ratings_reviews: '4.2 Stars 96 Reviews',
      ratingValue: 4.2,
      reviewCount: 96,
      price: 22.5,
    },
    {
      id: 13,
      image: 'https://static.thcdn.com/images/small/webp//productimg/original/12900983-1104901829996273.jpg',
      name: 'MDSolarSciences Mineral Creme SPF 50 Broad Spectrum UVA-UVB (1.7 oz.)',
      banner_text: 'Save 25%',
      popup_text: 'Save 25% on select products. Discount automatically applied. Offer valid for a limited time only.',
      ratings_reviews: '4.2 Stars 96 Reviews',
      ratingValue: 4.2,
      reviewCount: 96,
      price: 22.5,
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