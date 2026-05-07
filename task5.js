// 🔹 1. API Integration
let API = "https://fakestoreapi.com/products/";

fetch(API)
  .then((data) => data.json())
  .then((res) => {
    console.log(res);
  });

// 🔹 2. Dynamic UI Rendering
let container = document.querySelector(".container");

//  Loading State

container.innerHTML = "<h1>Loading...</h1>";

// Display Products function

function displayProducts(data) {
  container.innerHTML = "";
  data.forEach((current, index, total) => {
    let card = document.createElement("div");
    card.innerHTML = `
        <b>${current.title.slice(0, 50)}...</b>
        <img src=${current.image} width="100px"/>
        <h2>${current.price}</h2>
        <p>${current.description.slice(0, 60)}...</p>
        <button class="viewBtn">View More</button>
        <button class="addCartBtn">Add To Cart</button>
      `;

    card.setAttribute("class", "cardContent");

    // View Button

    let viewBtn = card.querySelector(".viewBtn");
    viewBtn.addEventListener("click", () => {
      alert(`
            Title: ${current.title}

            Price: $${current.price}

            Category: ${current.category}

            Description:
            ${current.description}
        `);
    });

    // Add Cart Button

    let addCartBtn = card.querySelector(".addCartBtn");

    addCartBtn.addEventListener("click", () => {
      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      cart.push(current);

      localStorage.setItem("cart", JSON.stringify(cart));

      alert("Product Added To Cart");
    });
    container.append(card);
  });
}

fetch(API)
  .then((data) => data.json())
  .then((res) => {
    // input field
    let input = document.createElement("input");
    input.placeholder = `Search Products`;
    input.name = "products";

    container.before(input);

    // Select field
    let select = document.createElement("select");

    select.innerHTML = `
        <option value="all">All</option>
        <option value="men's clothing">Men</option>
        <option value="women's clothing">Women</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewellery</option>
      `;

    container.before(select);

    // Sort Field
    let sortSelect = document.createElement("select");

    sortSelect.innerHTML = `
      <option value="">Sort By</option>
      <option value="low">Low To High</option>
      <option value="high">High To Low</option>
    `;

    container.before(sortSelect);

    displayProducts(res);

    // Search Filter Logic

    input.addEventListener("input", () => {
      let filteredProducts = res.filter((current) => {
        return current.title.toLowerCase().includes(input.value.toLowerCase());
      });
      displayProducts(filteredProducts);
    });

    // Select Filter Logic

    select.addEventListener("change", () => {
      let filteredCatergory = res.filter((current) => {
        if (select.value === "all") {
          return true;
        }
        return current.category === select.value;
      });
      displayProducts(filteredCatergory);
    });

    // Sort Logic

    sortSelect.addEventListener("change", () => {
      let sortedProducts = [...res];
      if (sortSelect.value === "low") {
        sortedProducts.sort((a, b) => {
          return a.price - b.price;
        });
      }
      if (sortSelect.value === "high") {
        sortedProducts.sort((a, b) => {
          return b.price - a.price;
        });
      }
      displayProducts(sortedProducts);
    });
  })

  // Error Handling

  .catch((err) => {
    console.warn(err);
    container.innerHTML = "<h1>Failed to load data</h1>";
  });
