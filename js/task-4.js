function getShippingCost(country) {
  let message;


 switch (country) {
   case "China": 
   message = `Shipping to ${country} will cost 100 credits`;
    break;
   case "Chile":
  message = `Shipping to ${country} will cost 250 credits`;
     break;
   case "Australia":
     message = `Shipping to ${country} will cost 170 credits`;
     break;
   case "Jamaica":
     message = `Shipping to ${country} will cost 120 credits`;
     break;
  default:
  message = `Sorry, there is no delivery to your country`;
  
 }
  console.log(message);

  return message;
}

getShippingCost("Australia");
getShippingCost("Germany");
getShippingCost("China");
getShippingCost("Chile");
getShippingCost("Jamaica");
getShippingCost("Sweden");