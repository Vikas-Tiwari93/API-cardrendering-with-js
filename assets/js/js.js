fetch("https://dummyjson.com/products")
  .then((a) => a.json())
  .then(getdata);

function getdata(data) {
  let main = document.createElement("main");

  for (let i = 0; i < data.products.length; i++) {
    const product = data.products[i];
    let card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<div class="thumbnail"><img src="${data.products[i].thumbnail}" alt="" onclick = "sectionV()"/></div>
    <div class="about"><span> ${data.products[i].category}</span><span>${data.products[i].brand}</span></div>
    <div class="about"><span>${data.products[i].title}</span> <span>${data.products[i].price}</span></div>
    <div class="about"><span>${data.products[i].rating}</span> <span class="desc"> ${data.products[i].description}</span></div>
    <div class="discount"> ${data.products[i].discountPercentage}% off</div>
    <div class="pic"> Click Me</div>
  `;
    main.appendChild(card);
  } // preview img
  let section = document.createElement("section");
  section.className = "section";
  document.querySelector("body").appendChild(main);
  section.addEventListener("click", function () {
    section.classList.toggle("sectionV");
    section.classList.toggle("section");
  });
  let preview = document.createElement("div");
  preview.className = "previewimg";
  preview.innerHTML = ` <div class="fullimg"><img id="one" src="" alt="" /></div>
  <div class="fullimg"><img id="two" src="" alt="" /></div>
  <div class="fullimg"><img id="three" src="" alt="" /></div>
  `;
  for (let i = 0; i < data.products.length; i++) {
    document.getElementsByClassName("card")[i].addEventListener("click", () => {
      document.getElementById("one").src = data.products[i].images[1];
      document.getElementById("two").src = data.products[i].images[2];
      document.getElementById("three").src = data.products[i].images[3];
    });
  }
  section.appendChild(preview);
  document.querySelector("body").appendChild(section);
}
function sectionV() {
  let section = document.querySelector("section");
  section.classList.toggle("sectionV");
  section.classList.toggle("section");
  console.log(event.target);
}
