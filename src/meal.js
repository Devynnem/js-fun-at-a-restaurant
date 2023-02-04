function nameMenuItem(name) {
  return `Delicious ${name}`
};

function createMenuItem(menuItemName, price, type) {
  var menuItem = {
    name: menuItemName,
    price: price,
    type: type,
  }
  return menuItem
}

function addIngredients(toppings, ingredients ) {
  if (!ingredients.includes(toppings)) {
    ingredients.push(toppings)
  }
}

function formatPrice(price) {
  return `$${price}`

}

function decreasePrice(price) {
  return price*.9
  }

function createRecipe(title, ingredients, menuItemType) {
  return recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  }
}


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


