const  data = [
  {
    "name": "Beef Caldereta",
    "desc": "Tender beef simmered in a savory tomato sauce with potatoes, carrots, bell peppers, and green peas, offering a hearty and flavorful stew.",
    "price": {
      "regular":80,
      "large": 130
    },
    "category": "beef"
  },
  {
    "name":"Filipino Beef Steak (Bistek)",
    "desc": "Sliced beef marinated in a tangy soy sauce and calamansi mixture, pan-fried to perfection with onions, creating a savory and citrusy Filipino dish.",
    "price":{
      "regular": 80,
      "large": 135
    },
    "category":"beef"
  },
  {
    "name":"Creamy Beef Mushroom",
    "desc": "Creamy Beef with Mushroom: Succulent beef slices cooked in a rich and creamy mushroom sauce, offering a decadent fusion of tender meat and earthy flavors, perfect for indulging in comfort food bliss.",
    "price":{
      "regular": 85,
      "large": 135
    },
    "category": "beef"
  },
  {
    "name" : "Chicken Igado",
    "desc" : "Juicy chicken pieces cooked with liver and strips of bell peppers, carrots, and onions in a tangy soy-vinegar sauce, creating a flavorful and hearty Filipino dish ",
    "price":{
      "regular" : 70,
      "large" : 95
    },
    "category" : "beef"
  },
  {
    "name" : "Chicken Afritada",
    "desc" : "Juicy chicken pieces cooked with liver and strips of bell peppers, carrots, and onions in a tangy soy-vinegar sauce, creating a flavorful and hearty Filipino dish",
    "price": {
      "regular" : 60,
      "large" : 85
    },
    "category" : "chicken"
  },
  {
    "name" : "Fried Chicken (Mayo Garlic Glaze)",
    "desc" : "Crispy fried chicken coated in a creamy garlic-infused mayonnaise glaze, delivering a delectable combination of crunchy texture and savory-sweet flavor with a hint of garlic.",
    "price": {
      "regular" : 60,
      "large" : 95
    },
    "category" : "chicken"
  },  
  {
    "name" : "Lechon Kawali",
    "desc" : "Succulent pork belly deep-fried to perfection until crispy, served with a side of tangy soy dipping sauce, offering a tantalizing contrast of crunchy texture and savory-sweet flavors that's sure to delight the senses.",
    "price" : {
      "regular" : 85,
      "large" : 130
    },
    "category" : "pork"
  },
  {
    "name" : "Pork Giniling with Quail Eggs",
    "desc" : "Ground pork cooked with tomatoes, onions, garlic, and bell peppers, simmered until tender and flavorful, then garnished with boiled quail eggs, creating a delicious and protein-rich Filipino dish that's both hearty and comforting.",
    "price" : {
      "regular" : 55,
      "large" : 85
    },
    "category" : "pork"
  },
  {
    "name" : "Bicol Express",
    "desc" : "A spicy Filipino dish originating from the Bicol region, featuring pork cooked in coconut milk, flavored with shrimp paste (bagoong), garlic, onions, and chilies, resulting in a creamy, fiery, and flavorful stew that's a true delight for those who love bold and vibrant flavors.",
    "price" : {
      "regular" : 65,
      "large" : 100
    },
    "category" : "pork"
  },
  {
    "name" : "Pork Igado",
    "desc" : "A traditional Filipino dish made with tender pork slices sautéed with liver, bell peppers, carrots, and onions in a tangy soy-vinegar sauce, offering a hearty and flavorful meal with a perfect balance of savory and tangy notes.",
    "price" : {
      "regular" : 60,
      "large" : 100
    },
    "category" : "pork"
  },
  {
    "name" : "Dinakdakan",
    "desc" : "A flavorful Filipino dish originating from the Ilocos region, featuring grilled or boiled pork parts such as ears, cheeks, and tongue, mixed with onions, chili peppers, and calamansi juice, then dressed with mayonnaise for a creamy texture, resulting in a savory and tangy delicacy with a hint of heat.",
    "price" : {
      "regular" : 65,
      "large" : 120
    },
    "category" : "pork"
  },
  {
    "name" : "Pork Binaggoongan",
    "desc" : "A flavorful Filipino dish originating from the Ilocos region, featuring grilled or boiled pork parts such as ears, cheeks, and tongue, mixed with onions, chili peppers, and calamansi juice, then dressed with mayonnaise for a creamy texture, resulting in a savory and tangy delicacy with a hint of heat.",
    "price" : {
      "regular" : 55,
      "large": 95
    },
    "category" : "pork"
  },
  {
    "name" : "Chopsuey",
    "desc" : "A tasty Filipino stir-fry dish with a mix of colorful veggies like cabbage, carrots, and bell peppers, cooked with your choice of meat or seafood in a flavorful sauce, offering a simple yet satisfying meal.",
    "price" : {
      "regular" : 60,
      "large" : 85
    },
    "category" : "vegetable"
  },
  {
    "name" : "Ginataang Kalabasa at Sitaw",
    "desc" : "A Filipino dish featuring squash (kalabasa) and string beans (sitaw) cooked in coconut milk (gata), seasoned with garlic, onions, and shrimp paste (bagoong), creating a creamy and flavorful vegetable stew that's both comforting and nutritious.",
    "price" : {
      "regular" : 55,
      "large" : 85
    },
    "add_ons" : [
      {
        "item" : "Pork",
        "price" : 20
      },
      {
        "item" : "Shrimp",
        "price" : 25
      }
    ],
    "category" : "vegetable"
  },
  {
    "name" : "Ginataang Gabi (Laing)",
    "desc" : "A Filipino delicacy made from taro leaves (gabi) cooked in coconut milk (gata), flavored with shrimp paste (bagoong) or fish sauce, garlic, onions, and chili peppers, resulting in a creamy and savory dish with a hint of spiciness, perfect for enjoying with steamed rice.",
    "price" :{
      "regular" : 75,
      "large" : 120
    },
    "add_ons" : [{
      "item" : "Crispy Pork Belly (Toppings on top)",
      "price" : 25
    }],
    "category" : "vegetable"
  },
  {
    "name": "Pork Lumpiang Shanghai",
    "desc": "Crispy Filipino spring rolls filled with seasoned ground pork, carrots, onions, and garlic, rolled into thin wrappers and deep-fried until golden brown, served with a side of sweet and sour dipping sauce, offering a delicious and crunchy appetizer or snack.",
    "price": {
      "100_pcs": 40
    },
    "category" : "pica-pica"
  },
  {
    "name" : "Pork Siomai",
    "desc" : "Succulent pork dumplings seasoned with garlic, onions, and soy sauce, wrapped in thin wonton wrappers, steamed to perfection, and served with a side of soy sauce and calamansi dipping sauce, offering a flavorful and savory dim sum treat.",
    "price" : {
      "55_pcs" : 40
    },
    "category" : "pica-pica"
  },
  {
    "name" : "Crab Cheese Wonton(Crab Rangoon)",
    "desc" : "Crispy wonton parcels filled with a creamy mixture of crab meat, cream cheese, garlic, and green onions, deep-fried until golden brown and served with a tangy and sweet chili dipping sauce, creating a delightful fusion of textures and flavors that's perfect for appetizers or snacks.",
    "price" : {
      "40_pcs" : 55
    },
    "category" : "pica-pica"
  },
  {
    "name" : "Pork BBQ Sticks",
    "desc" : "Tender pork skewers marinated in a sweet and savory mixture of soy sauce, garlic, calamansi juice, and brown sugar, grilled to perfection until caramelized and charred, offering a deliciously smoky and flavorful treat that's popular in Filipino street food culture.",
    "price" : {
      "stick" : 3
    },
    "category" : "pica-pica"
  },
  {
    "name" : "Chili Garlic Oil",
    "desc" : "A fiery and aromatic condiment crafted by infusing chili peppers and garlic in oil, commonly used to add a burst of flavor and heat to Filipino dishes such as noodles, fried rice, or dipping sauces, offering a deliciously bold and spicy kick to any meal.",
    "price": {
      "each" : 15
    },
    "category" : "pica-pica"
  }

]

export default data