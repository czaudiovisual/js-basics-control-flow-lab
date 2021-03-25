function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400) {
    return 'This one is on me!';
  } else if (distance > 2500) {
    return 'No can do.';
  } else if (distance > 2000)
    return 'I will gladly take your thirty bucks.';
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let goodbyeExpression;
  switch (true) {
    case tip === 'generous':
    goodbyeExpression = 'Thank you so much.';
    break;
    case tip === 'not as generous':
      goodbyeExpression = 'Thank you.';
    break;
    default : 
    goodbyeExpression = 'Bye.';
  }
return goodbyeExpression;
}