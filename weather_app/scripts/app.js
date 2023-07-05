
function getName() {
    const userName = prompt('What is your name?');
    sayHello(userName);
}
function sayHello(name) {
    alert(`Hello there ${name}`);
};

if (age > 12 && age < 65){
    console.log('ticket price is 20');
} else if (age <= 12 && age >= 65) {
    console.log ('You have 10 discounted price');
}