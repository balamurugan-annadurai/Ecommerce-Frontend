import product1 from "./assets/product-1.jpg"
import product2 from "./assets/product-2.jpg"
import product3 from "./assets/product-3.jpg"
import product4 from "./assets/product-4.jpg"
import product5 from "./assets/product-5.jpg"
import product6 from "./assets/product-6.jpg"
import product7 from "./assets/product-7.jpg"
import product8 from "./assets/product-8.jpg"
import product9 from "./assets/product-9.jpg"
import product10 from "./assets/product-10.jpg"
import product11 from "./assets/product-11.jpg"
import product12 from "./assets/product-12.jpg"
import product13 from "./assets/product-13.jpg"
import product14 from "./assets/product-14.jpg"
import product15 from "./assets/product-15.jpg"
import product16 from "./assets/product-16.jpg"
import product17 from "./assets/product-17.jpg"
import product18 from "./assets/product-18.jpg"


const products = [
    {
      "id": 1,
    "title": "Apple Watch SE (2nd Gen, 2023)",
    "description": "Smartwatch with Starlight Aluminum Case with Lake Green Sport Loop. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display",

      "price": 19999,
      "image": product1,
    "status": false,
      "category":"apple",
      "rating": {
        "rate": 4.2,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Samsung Galaxy Watch6 Classic",
      "description": "LTE (47mm, Silver, Compatible with Android only) | Introducing BP & ECG Features",
      "price": 24499,
      "image": product2,
      "status": false,
      "category":"samsung",
      "rating": {
        "rate": 4.2,
        "count": 259
      }
    },
    {
      "id": 3,
      "title": "Apple Watch Ultra",
      "description": "[GPS + Cellular 49 mm] smart watch w/Rugged Titanium Case & Yellow/Beige Trail Loop S/M Fitness Tracker, Precision GPS, Action Button, Extra-Long BatteryLife, Brighter Retina Display",
      "price": 84500,
      "image": product3,
      "status": false,
      "category":"apple",
      "rating": {
        "rate": 4.5,
        "count": 500
      }
    },
    {
      "id": 4,
      "title": "Samsung Galaxy Watch Ultra",
      "description": "(47mm, LTE, Gray) with Upto 100h Battery | 3nm Processor | Dual GPS | Quick Button/Siren | Sapphire Glass & Titanium | 10ATM & IP68 | BP & ECG Monitor | Energy Score & Ages",
      "price": 55999,
      "image": product4,
      "status": false,
      "category":"samsung",

      "rating": {
        "rate": 4.2,
        "count": 430
      }
    },
    {
      "id": 5,
      "title": "Apple Watch SE (2nd Gen, 2023)",
      "description": "[GPS 44mm] Smartwatch with Midnight Aluminum Case with Ink Sport Loop. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display",

      "price": 22199,
      "image": product5,
      "status": false,
      "category":"apple",

      "rating": {
        "rate": 4.2,
        "count": 400
      }
    },
    {
      "id": 6,
      "title": "Samsung Galaxy Watch 7",
      "description": "(44mm, Green, BT+LTE) with 3nm Processor | Dual GPS | Sapphire Glass & Armour Aluminum | 5ATM & IP68 | HR, SpO2, BP & ECG Monitor",
      "price": 36499,
      "image": product6,
      "status": false,
      "category":"samsung",

      "rating": {
        "rate": 3.7,
        "count": 70
      }
  },
  {
    "id": 7,
    "title": "Apple Watch SE (2nd Gen, 2023)",
    "description": "[GPS 44mm] Smartwatch with Silver Aluminum Case with Blue Cloud Sport Loop. Fitness & Sleep Tracker, Crash Detection, Heart Rate Monitor, Retina Display",
    "price": 22199,
    "image": product7,
    "status": false,
    "category":"apple",

    "rating": {
      "rate": 4.2,
      "count": 70
    }
  },
  {
    "id": 8,
    "title": "Samsung Galaxy Watch6 Classic",
    "description": "Bluetooth (47mm, Black, Compatible with Android only) | Introducing BP & ECG Features",
    "price": 22399,
    "image": product8,
    "status": false,
    "category":"samsung",

    "rating": {
      "rate": 4.2,
      "count": 70
    }
  },
  {
    "id": 9,
    "title": "Apple Watch Series 9",
    "description": "[GPS + Cellular 41mm] Smartwatch with Gold Stainless Steel Case with Clay Sport Band S/M. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On Retina Display, Water Resistant",
    "price": 39999,
    "image": product9,
    "status": false,
    "category":"apple",

    "rating": {
      "rate": 4.5,
      "count": 70
    }
  },
  {
    "id": 10,
    "title": "Samsung Galaxy Watch Ultra",
    "description": "(47mm, LTE, White) with Upto 100h battery | 3nm Processor | Dual GPS | Quick Button/Siren | Sapphire Glass & Titanium | 10ATM & IP68 | BP & ECG Monitor | Energy Score & AGEs",
    "price": 49990,
    "image": product10,
    "status": false,
    "category":"samsung",

    "rating": {
      "rate": 4.5,
      "count": 70
    }
  },
  {
    "id": 11,
    "title": "Titan Celestor Smart Watch",
    "description": "1.43” AMOLED Display & AOD, 60Hz Fluid Display, Advanced GPS with Altimeter, Barometer & Compass, Piezoelectric Crown, BT Calling, Upto 7 Day Battery, 3ATM (Black)",
    "price": 9995,
    "image": product11,
    "status": false,
    "category":"titan",
    "rating": {
      "rate": 3.7,
      "count": 70
    }
  },
  {
    "id": 12,
    "title": "Titan Zeal Premium Fashion Smartwatch",
    "description": "1.85 AMOLED Display with AOD|390 * 450 Pixel Resolution|Functional Crown|SingleSync BT Calling|Advanced Chipset|100+ Sports Modes & Watchfaces IP68 (Mesh Strap)",
    "price": 3989,
    "image": product12,
    "status": false,
    "category":"titan",
    "rating": {
      "rate": 3.7,
      "count": 70
    }
  },
  {
    "id": 13,
    "title": "Titan Crest Premium Mesh Strap Smartwatch",
    "description": "1.43 AMOLED Display with AOD|466x466 Pixel Resolution|Functional Crown|SingleSync BT Calling|Advanced Chipset|100+ Sports Modes&WatchfacesIP68,Mesh Black",
    "price": 7995,
    "image": product13,
    "status": false,
    "category":"titan",

    "rating": {
      "rate": 3.7,
      "count": 70
    }
  },
  {
    "id": 14,
    "title": "Titan Traveller with 1.78 Superior AMOLED Display",
    "description": "India's First FitVerse Smartwatch|Built-in GPS|SingleSync BT Calling|Built-in Alexa|Music Storage with TWS Connect|Body Energy Count, Black",
    "price": 7995,
    "image": product14,
    "status": false,
    "category":"titan",

    "rating": {
      "rate": 3.7,
      "count": 70
    }
  },
  {
    "id": 15,
    "title": "Fastrack Astor FR2 Pro Smart Watch",
    "description": "1.43 AMOLED Display, 466 * 466 Pixel Resolution, SingleSync BT Calling, AI Voice Assistant, 100+ Sports Modes and Smartwatch Faces, IP68 (Black)",
    "price": 7995,
    "image": product15,
    "status": false,
    "category":"fastrack",

    "rating": {
      "rate": 4,
      "count": 70
    }
  },
  {
    "id": 16,
    "title": "Fastrack Limitless Glide Smart Watch",
    "description": " Advanced UltraVU HD Display, SingleSync BT Calling, Advance Chipset, 85+ Sports Modes & Smartwatch Faces, AI Voice Assistant, 24 * 7 Health Suite, IP67 (Beige)",
    "price": 1198,
    "image": product16,
    "status": false,
    "category":"fastrack",

    "rating": {
      "rate": 3.8,
      "count": 70
    }
  },
  {
    "id": 17,
    "title": "Fastrack Limitless Fs2 Pro Smart Watch",
    "description": "1.96 Super Amoled Arched Display with Functional Crown & Resolution of 410X502, Singlesync Bt Calling, 110+ Sports Modes, 200+ Smartwatch Faces (Black)",
    "price": 2399,
    "image": product17,
    "status": false,
    "category":"fastrack",

    "rating": {
      "rate": 4,
      "count": 70
    }
  },
  {
    "id": 18,
    "title": "Fastrack Limitless Glide Smart Watch",
    "description": "Advanced UltraVU HD Display, SingleSync BT Calling, Advance Chipset, 85+ Sports Modes & Smartwatch Faces, AI Voice Assistant, 24 * 7 Health Suite, IP67 (Blue)",
    "price": 1200,
    "image": product18,
    "status": false,
    "category":"fastrack",

    "rating": {
      "rate": 3.8,
      "count": 70
    }
  }
  ]

export default products;