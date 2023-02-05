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
 if (item.type === "lunch") {
  pizzaRestaurant.menus.lunch.push(item)
 } else {
    pizzaRestaurant.menus.breakfast.push(item)
   }
 }


module.exports = {
  createRestaurant, 
  addMenuItem,
  // removeMenuItem
}