const form = document.getElementById('form')
const textInput = document.getElementById('text-input')
const result = document.querySelector('#result')

function cleanInputString(str) {
    const regex = /[a - zA - Z\s:_.,-/()\\]/g;
    return str.replace(regex, '');
  }

function checkPalindrom(e){
    e.preventDefault()
    let inputValue = textInput.value
    const currVall = cleanInputString(textInput.value).toLowerCase()
    console.log(currVall);
    if (inputValue === '') {
        alert(`Please input a value`);
        return null;
      }
    let palindrome = Array.from(currVall).reverse().join('').toLowerCase()
    if(currVall === palindrome){
        return result.innerHTML = inputValue + ' is a palindrome'
    }
    return result.innerHTML = inputValue + ' is not a palindrome'
}
form.addEventListener('submit',checkPalindrom)
    