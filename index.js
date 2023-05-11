const hacker1 = "John";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Sarah";
console.log(`The navigator's name is ${hacker2}`);

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!.`);
  }

console.log(hacker1.toUpperCase().split('').join(' '));
console.log(hacker2.split('').reverse().join(''));

const comparison = hacker1.localeCompare(hacker2);
if (comparison < 0) {
  console.log("The driver's name goes first.");
} else if (comparisonResult > 0) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}
let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id feugiat nulla. Sed eu venenatis lectus. Suspendisse eros ligula, vehicula a auctor ut, aliquam eget felis. Fusce porttitor lorem quis nulla venenatis ultricies. Donec eleifend neque id venenatis euismod. Donec varius viverra fringilla. Suspendisse potenti. Cras mattis euismod ligula sit amet elementum. Suspendisse potenti. Nam risus felis, cursus ut faucibus at, tristique eget nisi. Integer pellentesque laoreet odio eu viverra. Curabitur euismod porttitor mauris vel euismod. Donec pellentesque volutpat est. Fusce enim ante, ultrices nec facilisis sit amet, euismod vitae nibh. Donec interdum elit vitae tellus tristique, at interdum metus tempor. Sed eu placerat nisl, quis facilisis diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In egestas bibendum blandit. Etiam consequat volutpat feugiat. Curabitur rutrum enim dui, id imperdiet felis facilisis vel. Pellentesque ante dui, mattis id purus a, cursus feugiat nunc. Cras augue lacus, tincidunt sit amet porta et, feugiat a metus. Proin a neque vitae neque cursus auctor. Proin enim justo, dapibus eleifend suscipit eget, ultricies at nulla. Maecenas eu orci consequat, placerat sem sit amet, consequat lorem. Vestibulum suscipit non augue ut suscipit. Sed vitae vehicula mi. Curabitur sit amet egestas elit. Suspendisse gravida, nulla a tempus ullamcorper, quam ante condimentum massa, volutpat varius libero lectus nec lectus. Cras feugiat luctus dolor, elementum feugiat arcu semper ut. Pellentesque quis ullamcorper leo, in finibus libero. Nam ac est lobortis, tincidunt elit vel, tincidunt lectus. Nulla tempor ullamcorper augue, ut semper sapien imperdiet ultrices. Duis condimentum aliquam orci, nec tempor diam maximus nec."
console.log(longText.split(" ").length);
let etCount = 0
let wordsArray = longText.split(" ")
let wordsArrayLength = wordsArray.length
for (let i=0; i<wordsArray.length; i++){
if (wordsArray[i]=== "et"|| wordsArray[i]=== "et,"||wordsArray[i]=== "et."|| wordsArray[i]=== ",et"){
    etCount++
}
}
console.log(etCount)

let text = "A man, a plan, a canal, Panama!"
let textChecker = text.toUpperCase().split().reverse().join()
if (text=textChecker){
    console.log("that's a palindrome")}
else {
    console.log("that is not a palindrom")
}
