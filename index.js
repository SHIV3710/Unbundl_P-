const data = [
  {
    name: "Dark Elegance",
    price: 150.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Swiss Truffles",
    price: 120.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "White Bliss",
    price: 100.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Espresso Delight",
    price: 90.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Hazelnut Praline",
    price: 180.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Sea Salt Caramel",
    price: 130.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Champagne Truffles",
    price: 200.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Fruit Nut Bark",
    price: 110.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Mint Crunch",
    price: 80.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Raspberry Bonbons",
    price: 170.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Coconut Almond",
    price: 140.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Peanut Butter Cups",
    price: 160.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Toffee Crunch",
    price: 90.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Salted Caramel",
    price: 190.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Strawberry Truffles",
    price: 150.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Pistachio Praline",
    price: 120.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Orange Discs",
    price: 100.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Vanilla Drops",
    price: 80.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Chili Squares",
    price: 170.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/amano_dos_rios_unwrapped_roses_the_chocolate_website-1024x576-960x600_c.jpg",
  },
  {
    name: "Milk Spread",
    price: 120.0,
    url: "https://thechocolatewebsite.com/wp-content/uploads/2015/11/pacari_cranberry_chocolate_stilllife_photo_the_chocolate_website-1024x576-960x600_c.jpg",
  },
];

const createcorouselcard = ({ name, price, url }) => {
  const card = document.createElement("div");
  card.className = "corousel-card";
  card.innerHTML = `
    <img src=${url} class="card-img"></img>
    <span> ${name}</span>
    <span> Rs. ${price}</span>
    `;
  return card;
};

let corousel = document.getElementsByClassName("corousel")[0];

const renderdata = () => {
  data.map((item, index) => {
    const card = createcorouselcard(item);
    corousel.appendChild(card);
  });
};

renderdata();

const scrollAmount = 200;
let autoScrollInterval;
let dir = true;
let ind = 1;

function animateCarousel() {
  if (dir) {
    setTimeout(() => {
      ind++;
      corousel.scrollLeft += scrollAmount;
      if (ind === 19) dir = false;
    }, 500); // Add a delay of 0.5 seconds (500 milliseconds)
  } else {
    setTimeout(() => {
      corousel.scrollLeft -= scrollAmount;
      if (ind === 0) dir = true;
    }, 500); // Add a delay of 0.5 seconds (500 milliseconds)
  }
}

autoScrollInterval = setInterval(animateCarousel, 1000);

function stopAutoScroll() {
  clearInterval(autoScrollInterval);
}

corousel.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  stopAutoScroll();
  if (evt.deltaY < 0) corousel.scrollLeft -= 400;
  else corousel.scrollLeft += 400;
});
