
// other functions are going to use this variable so it need to be in the global scope
let selectedPizza;

const gotoStep2 = () => {
  document.querySelector('.form').classList.remove('is-step-1');
  document.querySelector('.form').classList.add('is-step-2');

  const name = document.getElementById('name').value;

  document.getElementById('userName').innerHTML = name;
}

const selectType = (pizza, imgsrc) => {
  document.querySelector('.form').classList.remove('is-step-2');
  document.querySelector('.form').classList.add('is-step-3');
  //this is only "place" that i can get the selected pizza from user input. So, i can assign the value to selectedPizza variable
  selectedPizza = pizza;
  
  document.querySelectorAll('.pizzaName').forEach((element) => {
    element.innerHTML = pizza;
  });
  // in 'orderImage' htlm, the src is empty, so I need to add the image source by setAttribute (function), using the image I call from the button
  document.getElementById('orderImage').setAttribute('src', imgsrc);
}

const calculateCookingTime = (orderQuantity) => {
  if (orderQuantity > 0 && orderQuantity <= 2) {
    return 10
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15
  } else {
    return 20
  }
}

// function TotalCost needs to return the value to variable (total) that will be used later in the function goToStep4. That's why we need a return statement.
const totalCost = (orderQuantity) => {
  if (selectedPizza === 'Vegetarian' || selectedPizza === 'Hawaiian' || selectedPizza === 'Pepperoni') {
   return orderQuantity * 80
  } else if (selectedPizza === 'Margarita') {
    return orderQuantity * 65
  } else if (selectedPizza === 'Fusion') {
    return orderQuantity * 120
  } else {
    return orderQuantity * 85
  }
}

const goToStep4 = () => {
  document.querySelector('.form').classList.remove('is-step-3');
  document.querySelector('.form').classList.add('is-step-4');
  document.querySelector('.orderComplete').classList.add('active');

  const orderQuantity = document.getElementById('quantity').value;
  const cookingTime = calculateCookingTime(orderQuantity);
  const total = totalCost(orderQuantity);
  
  document.getElementById('orderQuantity').innerHTML = orderQuantity;
  document.getElementById('totalCost').innerHTML = total;
  document.getElementById('cookingTime').innerHTML = cookingTime;
}







// const validateOrderName = (orderName) => {
//   return orderName === 'vegetarian' || orderName === 'pepperoni' || orderName === 'hawaiian';
// }

// const calculateTotalCost = (orderQuantity, pizzaPrice) =>
//    orderQuantity * pizzaPrice


// const calculateCookingTime = (orderQuantity) => {
//   if (orderQuantity > 0 && orderQuantity <= 2) {
//     return 10
//   } else if (orderQuantity >= 3 && orderQuantity <= 5) {
//     return 15
//   } else {
//     return 20
//   }
// }

// const startOrder = () => {
//   let orderName = prompt('Enter the name of the pizza you want to order today.')

//   if (orderName && orderName.length > 0) {
//     orderName = orderName.toLowerCase(); 
  
//       if (validateOrderName(orderName)) {
//         let orderQuantity = prompt(`How many of ${orderName} do you want?`);
//         document.getElementById('complete').innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${calculateTotalCost(orderQuantity, pizzaPrice)} kr. The pizza(s) will take ${calculateCookingTime(orderQuantity)} minutes.`
              
//       } else {
//           alert('Select a pizza from the menu');
//           startOrder();
//       }
//   } 
      
// }


// // startOrder();











