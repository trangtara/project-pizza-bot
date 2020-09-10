const vegetarian = "Vegetarian Pizza"
const hawaiian = "Hawaiian Pizza"
const pepperoni = "Pepperoni Pizza"

const pizzaPrice = 80



const gotoStep2 = () => {
  document.querySelector('.form').classList.remove('is-step-1');
  document.querySelector('.form').classList.add('is-step-2');

  const name = document.getElementById('name').value;

  document.getElementById('userName').innerHTML = name;
}

const selectType = (pizza) => {
  document.querySelector('.form').classList.remove('is-step-2');
  document.querySelector('.form').classList.add('is-step-3');
  document.getElementById('pizzaName').innerHTML = pizza;
}



const goToStep4 = () => {
  document.querySelector('.form').classList.remove('is-step-3');
  document.querySelector('.form').classList.add('is-step-4');
  
  document.getElementById('orderName').innerHTML = '[name]';
  document.getElementById('totalCost').innerHTML = '[cost]';
  document.getElementById('cookingTime').innerHTML = '[time]';

}





const validateOrderName = (orderName) => {
  return orderName === 'vegetarian' || orderName === 'pepperoni' || orderName === 'hawaiian';
}

const calculateTotalCost = (orderQuantity, pizzaPrice) =>
   orderQuantity * pizzaPrice


const calculateCookingTime = (orderQuantity) => {
  if (orderQuantity > 0 && orderQuantity <= 2) {
    return 10
  } else if (orderQuantity >= 3 && orderQuantity <= 5) {
    return 15
  } else {
    return 20
  }
}

const startOrder = () => {
  let orderName = prompt('Enter the name of the pizza you want to order today.')

  if (orderName && orderName.length > 0) {
    orderName = orderName.toLowerCase(); 
  
      if (validateOrderName(orderName)) {
        let orderQuantity = prompt(`How many of ${orderName} do you want?`);
        document.getElementById('complete').innerHTML = `Great, I'll get started on your ${orderName} right away, it will cost ${calculateTotalCost(orderQuantity, pizzaPrice)} kr. The pizza(s) will take ${calculateCookingTime(orderQuantity)} minutes.`
              
      } else {
          alert('Select a pizza from the menu');
          startOrder();
      }
  } 
      
}


// startOrder();











