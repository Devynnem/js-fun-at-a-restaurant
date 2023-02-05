function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    },
  }

  return restaurant  

}

function addMenuItem (pizzaRestaurant, item) {
  if (item.type === "breakfast" && pizzaRestaurant.menus.breakfast.includes(item) === false) {
    pizzaRestaurant.menus.breakfast.push(item)
   } else if (item.type === "lunch" && pizzaRestaurant.menus.lunch.includes(item) === false) {
  pizzaRestaurant.menus.lunch.push(item)
 } else if (item.type === "dinner" && pizzaRestaurant.menus.dinner.includes(item) === false) {
  pizzaRestaurant.menus.dinner.push(item)
   }
 }


 function removeMenuItem (restaurant, item, type) {
  for (var i = 0; i < restaurant.menus[type].length; i++) {
    if (restaurant.menus[type][i].name === item) 
    restaurant.menus[type].splice(i, 1);
    return `No one is eating our ${item} - it has been removed from the ${type} menu!`
  }  return `Sorry, we don't sell ${item}, try adding a new recipe!`
}
  
 




module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}