function makeTransaction(pricePerDroid, quantity, customerCredits){
  let message;
  const totalPrice = pricePerDroid * quantity;
  const creditsLeft = customerCredits - totalPrice ;
if (totalPrice <= customerCredits) {
  message = `You ordered ${quantity} worth ${totalPrice} credits!`;
} else {
  message = `Insufficient funds!`;
}
  return message;
}

console.log(makeTransaction(3000, 5, 23000)); 
console.log(makeTransaction(1000, 3, 15000)); 
console.log(makeTransaction(5000, 10, 8000)); 
console.log(makeTransaction(2000, 8, 10000));
console.log(makeTransaction(500, 10, 5000));
