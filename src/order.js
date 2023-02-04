function takeOrder(orderObject, deliveryOrderArray) {
  if (deliveryOrderArray.length <= 2) {
  var newOrder = deliveryOrderArray.push(orderObject) 
  return newOrder
  } else {

  }

}

function refundOrder (orderNumObjectValue, deliveryOrderArray) {
 for (var i = 0; i < deliveryOrderArray.length; i ++) {
 if (deliveryOrderArray[i].orderNumber === orderNumObjectValue) {
 
  return deliveryOrderArray.splice(i, 1)
  }
 }
}

function listItems (deliveryOrderArray) {
  var items =[]
  for (var i = 0; i < deliveryOrderArray.length; i++) {
    items.push(deliveryOrderArray[i].item)
  } 
  return items.join(", ")
}


function searchOrder (deliveryOrderArray, item) {
  for (var i = 0; i < deliveryOrderArray.length; i++) {
    if (deliveryOrderArray[i].item === item) {
      return true
    } 
    }  return false
  }



module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}