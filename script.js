const blockedWords = ["beef", "pork", "bacon", "ham", "pepperoni"];

function getImagePath(name) {
  return "./images/" + name.toLowerCase().replaceAll(" ", "-") + ".jpg";
}

function fallbackImage(name) {
  return `https://placehold.co/800x500/f7c873/7b2d0f?text=${encodeURIComponent(name)}`;
}

const recipeData = [
  ["Paneer Butter Masala","Indian Veg","North India","paneer tomato butter cream cashew"],
  ["Masala Dosa","Breakfast","South India","rice urad dal potato onion"],
  ["Idli Sambar","Breakfast","South India","rice dal sambar vegetables"],
  ["Medu Vada","Breakfast","South India","urad dal onion pepper"],
  ["Chicken Biryani","Indian Chicken","Hyderabad","chicken rice onion curd mint"],
  ["Butter Chicken","Indian Chicken","North India","chicken butter tomato cream"],
  ["Chicken Curry","Indian Chicken","India","chicken onion tomato"],
  ["Chicken 65","Indian Chicken","South India","chicken curd corn flour"],
  ["Tandoori Chicken","Indian Chicken","North India","chicken curd lemon"],
  ["Chicken Tikka Masala","Indian Chicken","North India","chicken curd tomato cream"],
  ["Veg Fried Rice","Chinese","Indo-Chinese","rice carrot capsicum cabbage"],
  ["Chicken Fried Rice","Chinese","Indo-Chinese","chicken rice egg carrot"],
  ["Egg Fried Rice","Chinese","Indo-Chinese","egg rice carrot capsicum"],
  ["Veg Noodles","Chinese","Indo-Chinese","noodles carrot cabbage"],
  ["Chicken Noodles","Chinese","Indo-Chinese","chicken noodles carrot"],
  ["Gobi Manchurian","Chinese","Indo-Chinese","cauliflower onion capsicum"],
  ["Chilli Paneer","Chinese","Indo-Chinese","paneer capsicum onion"],
  ["Chilli Chicken","Chinese","Indo-Chinese","chicken capsicum onion"],
  ["Spring Rolls","Chinese","China","cabbage carrot noodles"],
  ["Schezwan Fried Rice","Chinese","Indo-Chinese","rice carrot capsicum"],
  ["Hakka Noodles","Chinese","Indo-Chinese","noodles cabbage carrot"],
  ["Sweet Corn Soup","Chinese","China","corn carrot beans"],
  ["Hot and Sour Soup","Chinese","China","cabbage carrot mushroom"],
  ["Manchow Soup","Chinese","Indo-Chinese","cabbage carrot noodles"],
  ["Ratatouille","French","France","brinjal zucchini tomato"],
  ["French Toast","French","France","bread egg milk butter"],
  ["Crepes","French","France","maida egg milk"],
  ["Quiche","French","France","egg milk cheese"],
  ["Croissant Sandwich","French","France","croissant cheese tomato"],
  ["French Onion Soup","French","France","onion butter cheese"],
  ["Gratin Dauphinois","French","France","potato cream cheese"],
  ["Chicken Fricassee","French","France","chicken mushroom cream"],
  ["Nicoise Salad","French","France","egg potato tomato"],
  ["Margherita Pizza","Italian","Italy","pizza cheese tomato basil"],
  ["Veg Pizza","Italian","Italy","pizza cheese capsicum corn"],
  ["Chicken Pizza","Italian","Worldwide","pizza chicken cheese"],
  ["White Sauce Pasta","Italian","Italy","pasta milk cheese butter"],
  ["Red Sauce Pasta","Italian","Italy","pasta tomato garlic"],
  ["Mac and Cheese","Italian","Europe","macaroni cheese milk"],
  ["Lasagna","Italian","Italy","cheese tomato vegetables"],
  ["Garlic Bread","Italian","Italy","bread garlic butter cheese"],
  ["Bruschetta","Italian","Italy","bread tomato garlic"],
  ["Risotto","Italian","Italy","rice mushroom cheese"],
  ["Veg Burger","Fast Food","Worldwide","bun potato lettuce cheese"],
  ["Chicken Burger","Fast Food","Worldwide","bun chicken lettuce"],
  ["French Fries","Fast Food","Worldwide","potato oil salt"],
  ["Cheese Sandwich","Fast Food","Worldwide","bread cheese butter"],
  ["Grilled Chicken Sandwich","Fast Food","Worldwide","bread chicken mayonnaise"],
  ["Paneer Roll","Fast Food","India","paneer chapati onion"],
  ["Chicken Roll","Fast Food","India","chicken paratha onion"],
  ["Veg Momos","Snacks","India","maida cabbage carrot"],
  ["Chicken Momos","Snacks","India","maida chicken onion"],
  ["Samosa","Snacks","India","potato peas maida"],
  ["Pakora","Snacks","India","besan onion potato"],
  ["Pani Puri","Snacks","India","potato chickpeas puri mint"],
  ["Bhel Puri","Snacks","Mumbai","puffed rice potato onion"],
  ["Dahi Puri","Snacks","Mumbai","puri potato curd"],
  ["Sev Puri","Snacks","Mumbai","puri potato onion"],
  ["Dhokla","Snacks","Gujarat","besan curd mustard"],
  ["Khandvi","Snacks","Gujarat","besan curd coconut"],
  ["Thepla","Breakfast","Gujarat","wheat flour methi"],
  ["Appam","Breakfast","Kerala","rice coconut"],
  ["Pav Bhaji","Indian Veg","Mumbai","potato tomato capsicum peas"],
  ["Chole Bhature","Indian Veg","Punjab","chickpeas maida onion"],
  ["Rajma Chawal","Indian Veg","North India","rajma rice onion"],
  ["Aloo Paratha","Breakfast","Punjab","potato wheat flour"],
  ["Dal Tadka","Indian Veg","North India","dal garlic ghee"],
  ["Palak Paneer","Indian Veg","North India","paneer spinach"],
  ["Veg Biryani","Indian Veg","India","rice potato carrot beans"],
  ["Lemon Rice","Indian Veg","South India","rice lemon peanut"],
  ["Curd Rice","Indian Veg","South India","rice curd"],
  ["Tomato Rice","Indian Veg","South India","rice tomato"],
  ["Pongal","Breakfast","Tamil Nadu","rice dal pepper"],
  ["Poha","Breakfast","Maharashtra","poha potato onion"],
  ["Upma","Breakfast","South India","rava onion carrot"],
  ["Bisi Bele Bath","Indian Veg","Karnataka","rice dal potato carrot"],
  ["Paneer Tikka","Indian Veg","North India","paneer curd capsicum"],
  ["Mushroom Masala","Indian Veg","India","mushroom onion tomato"],
  ["Malai Kofta","Indian Veg","North India","potato paneer cream"],
  ["Veg Kurma","Indian Veg","South India","potato carrot coconut"],
  ["Aloo Gobi","Indian Veg","North India","potato cauliflower"],
  ["Baingan Bharta","Indian Veg","North India","brinjal onion tomato"],
  ["Matar Paneer","Indian Veg","North India","paneer peas tomato"],
  ["Kadhi Pakora","Indian Veg","North India","curd besan"],
  ["Hyderabadi Veg Dum Biryani","Indian Veg","Hyderabad","rice potato carrot"],
  ["Jeera Rice","Indian Veg","North India","rice cumin"],
  ["Ghee Rice","Indian Veg","South India","rice ghee cashew"],
  ["Coconut Rice","Indian Veg","South India","rice coconut"],
  ["Sambar Rice","Indian Veg","South India","rice dal potato"],
  ["Fish Curry","Indian Chicken","Coastal India","fish coconut onion"],
  ["Prawn Curry","Indian Chicken","Coastal India","prawn coconut onion"],
  ["Egg Curry","Indian Chicken","India","egg onion tomato"],
  ["Chocolate Cake","Dessert","Worldwide","maida cocoa milk sugar"],
  ["Gulab Jamun","Dessert","India","milk powder sugar"],
  ["Rasgulla","Dessert","Bengal","milk sugar"],
  ["Kheer","Dessert","India","rice milk sugar"],
  ["Payasam","Dessert","South India","vermicelli milk sugar"],
  ["Carrot Halwa","Dessert","North India","carrot milk sugar"],
  ["Mysore Pak","Dessert","Karnataka","besan ghee sugar"],
  ["Pancakes","Breakfast","America","maida egg milk"],
  ["Waffles","Breakfast","Belgium","maida egg milk"],
  ["Tacos","Fast Food","Mexico","shell beans chicken lettuce"],
  ["Nachos","Fast Food","Mexico","nachos cheese beans"],
  ["Falafel Wrap","Fast Food","Middle East","chickpeas pita lettuce"],
  ["Chicken Shawarma","Fast Food","Middle East","chicken pita mayonnaise"]
];

function createIngredients(name, category, tags) {
  if (name === "Pani Puri") {
    return ["20 puris", "2 boiled potatoes", "1/2 cup boiled chickpeas", "1 cup mint leaves", "1/2 cup tamarind chutney", "1 tsp chaat masala", "Salt as required"];
  }

  if (tags.includes("egg")) {
    return ["3 eggs", "1 onion chopped", "1 tomato chopped", "1 tsp ginger garlic paste", "1 tsp chilli powder", "1/2 tsp turmeric", "1 tsp garam masala", "2 tbsp oil", "Salt as required"];
  }

  if (tags.includes("paneer")) {
    return ["200 g paneer", "1 onion chopped", "2 tomatoes chopped", "1 tsp ginger garlic paste", "1 tsp chilli powder", "1/2 tsp turmeric", "1 tsp garam masala", "2 tbsp oil or butter", "Salt as required", "Fresh coriander leaves"];
  }

  if (tags.includes("potato")) {
    return ["3 boiled potatoes", "1 onion chopped", "1 tomato chopped if needed", "1 tsp cumin seeds", "1 tsp chilli powder", "1/2 tsp turmeric", "2 tbsp oil", "Salt as required", "Fresh coriander leaves"];
  }

  if (category === "Indian Chicken") {
    return ["500 g chicken/main protein", "2 onions chopped", "2 tomatoes chopped", "1 tbsp ginger garlic paste", "1/2 cup curd", "1 tsp chilli powder", "1/2 tsp turmeric", "1 tsp garam masala", "2 tbsp oil", "Salt as required"];
  }

  if (category === "Chinese") {
    return ["2 cups main ingredient or rice/noodles", "1/2 cup carrot", "1/2 cup capsicum", "1/2 cup cabbage", "1 tbsp soy sauce", "1 tsp vinegar", "1 tsp chilli sauce", "1 tsp pepper", "2 tbsp oil", "Salt as required"];
  }

  if (category === "Dessert") {
    return ["2 cups main ingredient", "1 cup milk", "1/2 cup sugar", "2 tbsp ghee/butter", "1/4 tsp cardamom powder", "8 cashews", "8 raisins", "Dry fruits for garnish"];
  }

  return ["2 cups main ingredient", "1 onion chopped", "1 tomato chopped", "1 tsp ginger garlic paste", "1 tsp chilli powder", "1/2 tsp turmeric", "1 tsp garam masala/seasoning", "2 tbsp oil", "Salt as required", "Fresh coriander"];
}

function createSteps(name) {
  return [
    `First, collect all the ingredients required for ${name}. Measure them properly and keep everything ready before starting the cooking process.`,
    "Wash all vegetables, rice, chicken, egg, paneer or any main ingredient clearly with clean water. Cut them into small and even pieces so they cook properly.",
    "Heat oil, butter or ghee in a pan on medium flame. Do not use high flame at the beginning because the spices may burn quickly.",
    "Add chopped onions and sauté them until they become soft and light golden brown. This step gives a good base flavour to the recipe.",
    "Add ginger garlic paste and cook for one minute until the raw smell goes away. Then add tomatoes and cook until they become soft and mushy.",
    "Now add chilli powder, turmeric powder, garam masala or the required seasoning. Mix well and cook until the masala becomes thick and aromatic.",
    "Add the main ingredient of the recipe and mix it gently so that the masala coats all the pieces evenly.",
    "Add a little water, curd, milk, cream or stock depending on the dish. Mix well and cover the pan with a lid.",
    "Cook on low to medium flame until the ingredients become soft, tender and fully cooked. Stir in between so that it does not stick to the pan.",
    "Check the salt, spice level and consistency. If it is too thick, add a little water. If it is too watery, cook for a few more minutes.",
    `Finally, garnish ${name} with coriander leaves, herbs, cheese, cream or dry fruits depending on the recipe.`,
    `Serve ${name} hot and fresh with rice, roti, naan, bread or any suitable side dish.`
  ];
}

const recipes = recipeData.map(item => {
  const [name, category, area, tags] = item;

  return {
    name,
    category,
    area,
    searchTags: tags,
    image: getImagePath(name),
    ingredients: createIngredients(name, category, tags),
    steps: createSteps(name),
    video: `https://www.youtube.com/results?search_query=${name.replaceAll(" ", "+")}+recipe`
  };
});

const recipeContainer = document.getElementById("recipeContainer");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const categoryFilter = document.getElementById("categoryFilter");
const languageSelect = document.getElementById("languageSelect");
const recipeModal = document.getElementById("recipeModal");
const recipeDetails = document.getElementById("recipeDetails");
const closeModal = document.getElementById("closeModal");
const resultCount = document.getElementById("resultCount");
const voiceBtn = document.getElementById("voiceBtn");
const loadingText = document.getElementById("loadingText");

let filteredRecipeList = recipes.filter(isAllowedRecipe);

function isAllowedRecipe(recipe) {
  const text = `${recipe.name} ${recipe.category} ${recipe.area} ${recipe.ingredients.join(" ")} ${recipe.searchTags}`.toLowerCase();
  return !blockedWords.some(word => text.includes(word));
}

function displayRecipes(recipeList) {
  recipeContainer.innerHTML = "";

  if (recipeList.length === 0) {
    recipeContainer.innerHTML = `<p class="not-found">"${searchInput.value}" recipe is not found.</p>`;
    resultCount.textContent = "0 recipes found";
    return;
  }

  resultCount.textContent = `${recipeList.length} recipes found`;

  recipeList.forEach((recipe, index) => {
    const card = document.createElement("div");
    card.className = "recipe-card";

    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" onclick="openRecipe(${index})"
      onerror="this.src='${fallbackImage(recipe.name)}'">

      <div class="card-body">
        <h2>${recipe.name}</h2>
        <p><strong>Category:</strong> ${recipe.category}</p>
        <p><strong>Area:</strong> ${recipe.area}</p>
        <p><strong>No. of Ingredients:</strong> ${recipe.ingredients.length}</p>
        <button onclick="openRecipe(${index})">View Full Recipe</button>
      </div>
    `;

    recipeContainer.appendChild(card);
  });
}

function openRecipe(index) {
  const recipe = filteredRecipeList[index];

  recipeDetails.innerHTML = `
    <img src="${recipe.image}" class="detail-img" alt="${recipe.name}"
    onerror="this.src='${fallbackImage(recipe.name)}'">

    <h2>${recipe.name}</h2>
    <p><strong>Category:</strong> ${recipe.category}</p>
    <p><strong>Area:</strong> ${recipe.area}</p>
    <p><strong>Number of Ingredients:</strong> ${recipe.ingredients.length}</p>

    <h3>Ingredients</h3>
    <ul>${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}</ul>

    <h3>Detailed Step-by-Step Instructions</h3>
    <ol>${recipe.steps.map(s => `<li>${s}</li>`).join("")}</ol>

    <a href="${recipe.video}" target="_blank" class="video-btn">▶ Watch Recipe Video</a>
  `;

  recipeModal.style.display = "block";
}

function filterRecipes() {
  loadingText.style.display = "block";

  setTimeout(() => {
    const searchText = searchInput.value.toLowerCase().trim();
    const selectedCategory = categoryFilter.value;

    filteredRecipeList = recipes.filter(recipe => {
      const fullText = `${recipe.name} ${recipe.category} ${recipe.area} ${recipe.ingredients.join(" ")} ${recipe.searchTags}`.toLowerCase();
      const matchesSearch = fullText.includes(searchText);
      const matchesCategory = selectedCategory === "all" || recipe.category === selectedCategory;
      return matchesSearch && matchesCategory && isAllowedRecipe(recipe);
    });

    displayRecipes(filteredRecipeList);
    loadingText.style.display = "none";
  }, 300);
}

function changeLanguage(lang) {
  let attempts = 0;

  const interval = setInterval(() => {
    const combo = document.querySelector(".goog-te-combo");

    if (combo) {
      combo.value = lang;
      combo.dispatchEvent(new Event("change"));
      clearInterval(interval);
    }

    attempts++;

    if (attempts > 10) {
      clearInterval(interval);
      alert("Translator is still loading. Please refresh once and try again.");
    }
  }, 500);
}

searchBtn.addEventListener("click", filterRecipes);

searchInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    filterRecipes();
  }
});

searchInput.addEventListener("input", filterRecipes);
categoryFilter.addEventListener("change", filterRecipes);

languageSelect.addEventListener("change", function() {
  changeLanguage(languageSelect.value);
});

voiceBtn.addEventListener("click", () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    alert("Voice search works best in Google Chrome.");
    return;
  }

  const recognition = new SpeechRecognition();
  recognition.lang = "en-IN";
  recognition.start();

  voiceBtn.textContent = "🎙️ Listening...";

  recognition.onresult = function(event) {
    searchInput.value = event.results[0][0].transcript;
    filterRecipes();
    voiceBtn.textContent = "🎙️ Voice";
  };

  recognition.onerror = function() {
    voiceBtn.textContent = "🎙️ Voice";
  };

  recognition.onend = function() {
    voiceBtn.textContent = "🎙️ Voice";
  };
});

closeModal.onclick = function () {
  recipeModal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === recipeModal) {
    recipeModal.style.display = "none";
  }
};

window.addEventListener("load", () => {
  loadingText.style.display = "none";
});

displayRecipes(filteredRecipeList);