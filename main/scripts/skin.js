// import getData from "./footer.js"
// // document.getElementById("footer").innerHTML =footer()

var cart_data=JSON.parse(localStorage.getItem("cart_data")) || [];
let data = [
  {
    id: 1,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11291496-1824871578503201.jpg',
    name: 'iS Clinical Cleansing Complex (6 fl. oz.)',
    banner_text: '$25 iS Clinical Gift',
    popup_text: 'Receive an iS Clinical Cleansing Complex 60ml ($25 value) with any $150 purchase from the brand. Complimentary gift will be awarded at the cart. Offer valid limited time only, while supplies last.',
    ratings_reviews: '4.82 Stars 878 Reviews',
    ratingValue: 4.82,
    reviewCount: 878,
    price: 45,
    name2: 'iS Clinical Cleansing Complex (6 fl. oz.)',
  },
  {
    id: 2,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11588282-1584882139120733.jpg',
    name: 'Sunday Riley C.E.O. 15 Vitamin C Brightening Serum (1 fl. oz.)',
    banner_text: '$15 Sunday Riley Gift',
    popup_text: 'Receive a Sunday Riley C.E.O. 15% Vitamin C Brightening Serum 5ml ($15 value) when you spend over $100 on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
    ratings_reviews: '4.36 Stars 307 Reviews',
    ratingValue: 4.36,
    reviewCount: 307,
    price: 85,
    name2: 'Sunday Riley C.E.O. 15 Vitamin C Brightening Serum (1 fl. oz.)',
  },
  {
    id: 3,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/13278644-1174951890758541.jpg',
    name: 'Best of Dermstore Refresh Edit - $640 Value',
    banner_text: 'Up to 65% Savings on Best of Dermstore',
    popup_text: 'Save up to 65% on Best of Dermstore kits. While stock lasts.',
    ratings_reviews: '5.0 Stars 4 Reviews',
    ratingValue: 5,
    reviewCount: 4,
    price: 150,
    name2: 'Best of Dermstore Refresh Edit - $640 Value',
  },
  {
    id: 4,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11370304-1834876993606203.jpg',
    name: 'EltaMD AM Therapy Facial Moisturizer (1.7 oz.)',
    banner_text: '$15 EltaMD Gift',
    popup_text: 'Receive an EltaMD AM Therapy Deluxe 0.5 oz ($15 value) when you spend $75 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
    ratings_reviews: '4.77 Stars 717 Reviews',
    ratingValue: 4.77,
    reviewCount: 717,
    price: 39,
    name2: 'EltaMD AM Therapy Facial Moisturizer (1.7 oz.)',
  },
  {
    id: 5,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/13835182-9914964094907917.jpg',
    name: 'Senté Even Tone Mineral SPF 50ml (Various Shades)',
    banner_text: '$39 SENTÉ Gift',
    popup_text: 'Receive a SENTÉ Bio Complete Serum 10ml ($39 value) when you spend $140 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
    ratings_reviews: '',
    ratingValue: '',
    reviewCount: '',
    price: 75,
    name2: 'Senté Even Tone Mineral SPF 50ml (Various Shades)',
  },
  {
    id: 6,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/13811675-9994964348315184.jpg',
    name: 'Best of Dermstore x Skin Cancer Foundation Sun Care Kit - $150 Value',
    banner_text: 'Up to 65% Savings on Best of Dermstore',
    popup_text: 'Save up to 65% on Best of Dermstore kits. While stock lasts.',
    ratings_reviews: '4.67 Stars 6 Reviews',
    ratingValue: 4.67,
    reviewCount: 6,
    price: 50,
    name2: 'Best of Dermstore x Skin Cancer Foundation Sun Care Kit - $150 Value',
  },
  {
    id: 7,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11289609-1174892770940184.jpg',
    name: 'SkinCeuticals C E Ferulic (1 fl. oz.)',
    banner_text: '',
    popup_text: '',
    ratings_reviews: '4.75 Stars 4533 Reviews',
    ratingValue: 4.75,
    reviewCount: 4533,
    price: 169,
    name2: 'SkinCeuticals C E Ferulic (1 fl. oz.)',
  },
  {
    id: 8,
    image: 'https://static.thcdn.com/images/small/original//productimg/1600/1600/12538013-4764765050522444.jpg',
    name: 'EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $72)',
    banner_text: '$15 EltaMD Gift',
    popup_text: 'Receive an EltaMD AM Therapy Deluxe 0.5 oz ($15 value) when you spend $75 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
    ratings_reviews: '4.86 Stars 42 Reviews',
    ratingValue: 4.86,
    reviewCount: 42,
    price: 70,
    name2: 'EltaMD UV Clear SPF46 Broad-Spectrum Duo (Worth $72)',
  },
  {
    id: 9,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11291062-5634871742412089.jpg',
    name: 'Neocutis LUMIÈRE® Illuminating Eye Cream (0.5 fl. oz.)',
    banner_text: 'Save 25%',
    popup_text: 'Save 25% on select products. Discount automatically applied. Offer valid for a limited time only.',
    ratings_reviews: '4.57 Stars 444 Reviews',
    ratingValue: 4.57,
    reviewCount: 444,
    price: 72.75,
    name2: 'Neocutis LUMIÈRE® Illuminating Eye Cream (0.5 fl. oz.)',
  },
  {
    id: 10,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/12902766-1164909089232656.jpg',
    name: 'Paula\'s Choice CLINICAL Niacinamide 20 Treatment (0.67 fl. oz.)',
    banner_text: 'Up to 15% savings on Auto-Replenishment',
    popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',
    ratings_reviews: '4.57 Stars 44 Reviews',
    ratingValue: 4.57,
    reviewCount: 44,
    price: 50,
    name2: 'Paula\'s Choice CLINICAL Niacinamide 20 Treatment (0.67 fl. oz.)',
  },
  {
    id: 11,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/12902722-7844915030891827.jpg',
    name: 'Revision Skincare® Brightening Facial Wash 6.7 fl. oz.',
    banner_text: '',
    popup_text: '',
    ratings_reviews: '4.79 Stars 242 Reviews',
    ratingValue: 4.79,
    reviewCount: 242,
    price: 38,
    name2: 'Revision Skincare® Brightening Facial Wash 6.7 fl. oz.',
  },
  {
    id: 12,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11709474-2084866361945395.jpg',
    name: 'Bioderma Sensibio H2O (16.7 fl. oz.)',
    banner_text: '',
    popup_text: '',
    ratings_reviews: '4.9 Stars 1091 Reviews',
    ratingValue: 4.9,
    reviewCount: 1091,
    price: 18.99,
    name2: 'Bioderma Sensibio H2O (16.7 fl. oz.)',
  },
  {
    id: 13,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11370303-1074944341868735.jpg',
    name: 'EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)',
    banner_text: '$15 EltaMD Gift',
    popup_text: 'Receive an EltaMD AM Therapy Deluxe 0.5 oz ($15 value) when you spend $75 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
    ratings_reviews: '4.79 Stars 4490 Reviews',
    ratingValue: 4.79,
    reviewCount: 4490,
    price: 39,
    name2: 'EltaMD UV Clear Broad-Spectrum SPF 46 (1.7 oz.)',
  },
  {
    id: 14,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11599959-6614967223071262.jpg',
    name: 'Peter Thomas Roth Water Drench Hyaluronic Cloud Hydra-Gel Eye Patches (30 pair)',
    banner_text: '',
    popup_text: '',
    ratings_reviews: '4.77 Stars 90 Reviews',
    ratingValue: 4.77,
    reviewCount: 90,
    price: 55,
    name2: 'Peter Thomas Roth Water Drench Hyaluronic Cloud Hydra-Gel Eye Patches (30 pair)',
  },
  {
    id: 15,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/13740926-9634965601450488.jpg',
    name: 'NuFACE Super Vita-C Booster Serum 30ml',
    banner_text: 'New Arrival',
    popup_text: 'Shop new arrivals to discover the latest in beauty, skin and hair care and stock up on seasonal must-haves and everyday essentials.',
    ratings_reviews: '4.71 Stars 14 Reviews',
    ratingValue: 4.71,
    reviewCount: 14,
    price: 65,
    name2: 'NuFACE Super Vita-C Booster Serum 30ml',
  },
  {
    id: 16,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11289599-4344892770055931.jpg',
    name: 'SkinCeuticals A.G.E. Eye Complex (0.5 oz.)',
    banner_text: '',
    popup_text: '',
    ratings_reviews: '4.59 Stars 1038 Reviews',
    ratingValue: 4.59,
    reviewCount: 1038,
    price: 105,
    name2: 'SkinCeuticals A.G.E. Eye Complex (0.5 oz.)',
  },
  {
    id: 17,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/12596429-3594871019700125.jpg',
    name: 'SkinMedica TNS Advanced+ Serum (1 oz.)',
    banner_text: 'Up to 15% savings on Auto-Replenishment',
    popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',
    ratings_reviews: '4.56 Stars 253 Reviews',
    ratingValue: 4.56,
    reviewCount: 253,
    price: 295,
    name2: 'SkinMedica TNS Advanced+ Serum (1 oz.)',
  },
  {
    id: 18,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11588281-8764882139037003.jpg',
    name: 'Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (0.5 oz. - $175 Value)',
    banner_text: '$15 Sunday Riley Gift',
    popup_text: 'Receive a Sunday Riley C.E.O. 15% Vitamin C Brightening Serum 5ml ($15 value) when you spend over $100 on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
    ratings_reviews: '4.64 Stars 665 Reviews',
    ratingValue: 4.64,
    reviewCount: 665,
    price: 122,
    name2: 'Sunday Riley GOOD GENES All-In-One Lactic Acid Treatment (0.5 oz. - $175 Value)',
  },
  {
    id: 19,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11333024-1544871545419615.jpg',
    name: 'LightStim LightStim for Acne (1 kit)',
    banner_text: 'New Arrival',
    popup_text: 'Shop new arrivals to discover the latest in beauty, skin and hair care and stock up on seasonal must-haves and everyday essentials.',
    ratings_reviews: '4.49 Stars 45 Reviews',
    ratingValue: 4.49,
    reviewCount: 45,
    price: 169,
    name2: 'LightStim LightStim for Acne (1 kit)',
  },
  {
    id: 20,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11814869-9924866362390772.jpg',
    name: 'Colorescience Sunforgettable® Total Protection™ Face Shield SPF 50 (PA+++) ',
    banner_text: 'Up to 15% savings on Auto-Replenishment',
    popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',
    ratings_reviews: '4.5 Stars 372 Reviews',
    ratingValue: 4.5,
    reviewCount: 372,
    price: 42,
    name2: 'Colorescience Sunforgettable® Total Protection™ Face Shield SPF 50 (PA+++) (1.8 fl. oz.)',
  },
  {
    id: 21,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11207490-1544866131146524.jpg',
    name: 'DHC Silky Cotton (80 piece)',
    banner_text: '',
    popup_text: '',
    ratings_reviews: '4.82 Stars 244 Reviews',
    ratingValue: 4.82,
    reviewCount: 244,
    price: 6,
    name2: 'DHC Silky Cotton (80 piece)',
  },
  {
    id: 22,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11291540-9444871574531642.jpg',
    name: 'Obagi Medical Nu-Derm Gentle Cleanser (6.7 fl. oz.)',
    banner_text: '',
    popup_text: '',
    ratings_reviews: '4.84 Stars 174 Reviews',
    ratingValue: 4.84,
    reviewCount: 174,
    price: 43,
    name2: 'Obagi Medical Nu-Derm Gentle Cleanser (6.7 fl. oz.)',
  },
  {
    id: 23,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11207443-2214866130380732.jpg',
    name: 'DHC Deep Cleansing Oil (Various Sizes)',
    banner_text: '',
    popup_text: '',
    ratings_reviews: '4.78 Stars 1417 Reviews',
    ratingValue: 4.78,
    reviewCount: 1417,
    price: 26,
    name2: 'DHC Deep Cleansing Oil (Various Sizes)',
  },
  {
    id: 24,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11174179-1754909106736633.jpg',
    name: 'Paula\'s Choice Skin Perfecting 2% BHA Liquid Exfoliant - Trial Size (30ml)',
    banner_text: '',
    popup_text: '',
    ratings_reviews: '4.8 Stars 5 Reviews',
    ratingValue: 4.8,
    reviewCount: 5,
    price: 11,
    name2: 'Paula\'s Choice Skin Perfecting 2% BHA Liquid Exfoliant - Trial Size (30ml)',
  },
  {
    id: 25,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11286350-6984866308191545.jpg',
    name: 'Avene Retrinal 0.1 Intensive Cream (1.01 fl. oz.)',
    banner_text: '',
    popup_text: '',
    ratings_reviews: '4.61 Stars 207 Reviews',
    ratingValue: 4.61,
    reviewCount: 207,
    price: 74,
    name2: 'Avene Retrinal 0.1 Intensive Cream (1.01 fl. oz.)',
  },
  {
    id: 26,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/12901001-2174876994385429.jpg',
    name: 'Supergoop!® PLAY Antioxidant Body Mist SPF 50 with Vitamin C 6 fl. oz.',
    banner_text: '',
    popup_text: '',
    ratings_reviews: '4.63 Stars 48 Reviews',
    ratingValue: 4.63,
    reviewCount: 48,
    price: 21,
    name2: 'Supergoop!® PLAY Antioxidant Body Mist SPF 50 with Vitamin C 6 fl. oz.',
  },
  {
    id: 27,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11054488-6294867924186974.jpg',
    name: 'First Aid Beauty Ultra Repair Cream (6 oz.)',
    banner_text: '$10 First Aid Beauty Gift',
    popup_text: 'Receive a First Aid Beauty Hello FAB Coconut Skin Smoothie Priming Moisturize - 2 ml ($10 value) when you spend $45 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
    ratings_reviews: '4.61 Stars 355 Reviews',
    ratingValue: 4.61,
    reviewCount: 355,
    price: 38,
    name2: 'First Aid Beauty Ultra Repair Cream (6 oz.)',
  },
  {
    id: 28,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11370297-1094944341202318.jpg',
    name: 'EltaMD UV Daily Broad-Spectrum SPF 40 (1.7 oz.)',
    banner_text: '$15 EltaMD Gift',
    popup_text: 'Receive an EltaMD AM Therapy Deluxe 0.5 oz ($15 value) when you spend $75 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
    ratings_reviews: '4.82 Stars 710 Reviews',
    ratingValue: 4.82,
    reviewCount: 710,
    price: 32.5,
    name2: 'EltaMD UV Daily Broad-Spectrum SPF 40 (1.7 oz.)',
  },
  {
    id: 29,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11370312-1044938634157826.jpg',
    name: 'EltaMD UV Clear Broad-Spectrum SPF 46 - Tinted (1.7 oz.)',
    banner_text: '$15 EltaMD Gift',
    popup_text: 'Receive an EltaMD AM Therapy Deluxe 0.5 oz ($15 value) when you spend $75 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
    ratings_reviews: '4.72 Stars 1208 Reviews',
    ratingValue: 4.72,
    reviewCount: 1208,
    price: 41,
    name2: 'EltaMD UV Clear Broad-Spectrum SPF 46 - Tinted (1.7 oz.)',
  },
  {
    id: 30,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11291543-1414871574706341.jpg',
    name: 'Obagi Medical Professional-C Serum 20% (1 fl. oz.)',
    banner_text: 'Up to 15% savings on Auto-Replenishment',
    popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',
    ratings_reviews: '4.74 Stars 880 Reviews',
    ratingValue: 4.74,
    reviewCount: 880,
    price: 136.99,
    name2: 'Obagi Medical Professional-C Serum 20% (1 fl. oz.)',
  },
  {
    id: 31,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11370314-1304944342872775.jpg',
    name: 'EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)',
    banner_text: '$15 EltaMD Gift',
    popup_text: 'Receive an EltaMD AM Therapy Deluxe 0.5 oz ($15 value) when you spend $75 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
    ratings_reviews: '4.66 Stars 889 Reviews',
    ratingValue: 4.66,
    reviewCount: 889,
    price: 38.5,
    name2: 'EltaMD UV Elements Tinted Broad-Spectrum SPF 44 (2 oz.)',
  },
  {
    id: 32,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11290635-1804892767902966.jpg',
    name: 'SkinCeuticals Triple Lipid Restore 242 (1.6 fl. oz.)',
    banner_text: '',
    popup_text: '',
    ratings_reviews: '4.8 Stars 1725 Reviews',
    ratingValue: 4.8,
    reviewCount: 1725,
    price: 136,
    name2: 'SkinCeuticals Triple Lipid Restore 242 (1.6 fl. oz.)',
  },
  {
    id: 33,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11291956-2074871578544985.jpg',
    name: 'iS Clinical Active Serum (1 fl. oz.)',
    banner_text: '$25 iS Clinical Gift',
    popup_text: 'Receive an iS Clinical Cleansing Complex 60ml ($25 value) with any $150 purchase from the brand. Complimentary gift will be awarded at the cart. Offer valid limited time only, while supplies last.',
    ratings_reviews: '4.63 Stars 449 Reviews',
    ratingValue: 4.63,
    reviewCount: 449,
    price: 142,
    name2: 'iS Clinical Active Serum (1 fl. oz.)',
  },
  {
    id: 34,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11370311-1644944342668214.jpg',
    name: 'EltaMD UV Daily Tinted Broad-Spectrum SPF 40 (1.7 oz.)',
    banner_text: '$15 EltaMD Gift',
    popup_text: 'Receive an EltaMD AM Therapy Deluxe 0.5 oz ($15 value) when you spend $75 or more on the brand. Complimentary gift will be awarded at the cart. Offer valid for a limited time only, while supplies last.',
    ratings_reviews: '4.74 Stars 394 Reviews',
    ratingValue: 4.74,
    reviewCount: 394,
    price: 34.5,
    name2: 'EltaMD UV Daily Tinted Broad-Spectrum SPF 40 (1.7 oz.)',
  },
  {
    id: 35,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11291541-5024871574576726.jpg',
    name: 'Obagi Medical Nu-Derm Toner (6.7 fl. oz.)',
    banner_text: 'Up to 15% savings on Auto-Replenishment',
    popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',
    ratings_reviews: '4.81 Stars 273 Reviews',
    ratingValue: 4.81,
    reviewCount: 273,
    price: 43,
    name2: 'Obagi Medical Nu-Derm Toner (6.7 fl. oz.)',
  },
  {
    id: 36,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11535234-1264892768965518.jpg',
    name: 'SkinCeuticals LHA Cleanser Gel (8 fl. oz.)',
    banner_text: '',
    popup_text: '',
    ratings_reviews: '4.69 Stars 518 Reviews',
    ratingValue: 4.69,
    reviewCount: 518,
    price: 42,
    name2: 'SkinCeuticals LHA Cleanser Gel (8 fl. oz.)',
  },
  {
    id: 37,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11288913-2454871572381206.jpg',
    name: 'Obagi Medical Hydrate Luxe (1.7 oz.)',
    banner_text: 'Up to 15% savings on Auto-Replenishment',
    popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',
    ratings_reviews: '4.79 Stars 169 Reviews',
    ratingValue: 4.79,
    reviewCount: 169,
    price: 74,
    name2: 'Obagi Medical Hydrate Luxe (1.7 oz.)',
  },
  {
    id: 38,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11401172-1034864721065269.jpg',
    name: 'COSRX Acne Pimple Master Patch (24 count)',
    banner_text: '',
    popup_text: '',
    ratings_reviews: '4.64 Stars 496 Reviews',
    ratingValue: 4.64,
    reviewCount: 496,
    price: 6,
    name2: 'COSRX Acne Pimple Master Patch (24 count)',
  },
  {
    id: 39,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11291066-1914871574237540.jpg',
    name: 'Obagi Medical Professional-C Serum 15% (1 fl. oz.)',
    banner_text: 'Up to 15% savings on Auto-Replenishment',
    popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',
    ratings_reviews: '4.78 Stars 405 Reviews',
    ratingValue: 4.78,
    reviewCount: 405,
    price: 110,
    name2: 'Obagi Medical Professional-C Serum 15% (1 fl. oz.)',
  },
  {
    id: 40,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/11705713-1174962240513333.jpg',
    name: 'SkinCeuticals Hyaluronic Acid Intensifier (1 fl. oz.)',
    banner_text: '',
    popup_text: '',
    ratings_reviews: '4.67 Stars 9 Reviews',
    ratingValue: 4.67,
    reviewCount: 9,
    price: 106,
    name2: 'SkinCeuticals Hyaluronic Acid Intensifier (1 fl. oz.)',
  },
  {
    id: 41,
    image: 'https://static.thcdn.com/images/small/original//productimg/original/12194048-1614871869209939.jpg',
    name: 'Embryolisse Lait Creme Concentre (2.54 fl. oz.)',
    banner_text: 'Up to 15% savings on Auto-Replenishment',
    popup_text: 'Enjoy up to 15% off your initial purchase and 15% savings on future replenishment orders.',
    ratings_reviews: '4.71 Stars 445 Reviews',
    ratingValue: 4.71,
    reviewCount: 445,
    price: 29,
    name2: 'Embryolisse Lait Creme Concentre (2.54 fl. oz.)',
  },
]
append(data)


function append(data){
  let container = document.getElementById("product")
  container.innerHTML = null;
  data.forEach((el) => {
      let images = document.createElement("img")
      images.src=el.image
      let names = document.createElement("p")
      names.innerText=el.name;
      let banners = document.createElement("p")
      if(el.banner_text!="")
      {
      banners.innerText=el.banner_text
      banners.style.border="1px solid rgb(204,204,204)"
      banners.style.width="90%"
      banners.style.margin="auto"
      }
      banners.setAttribute("class","banners")
      let prices = document.createElement("p")
      prices.innerText=`$${el.price}`
      let box = document.createElement("div")
      box.setAttribute("class","cartdiv");
      let button=document.createElement("button")
      button.setAttribute("class","buybutton")
      button.innerText="QUICK BUY"
      button.addEventListener("click",()=>{
        storeData(el)
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
 
  console.log(data)
  cart_data.push(data)
 localStorage.setItem("cart_data",JSON.stringify(cart_data))
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