
const passwordBox = document.getElementById("password");
const length = 12;


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()-_+=`~<>{}[]";
const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += symbol[Math.floor(Math.random() * symbol.length)];

  
  while (password.length < length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

 
  password = password.split('').sort(() => Math.random() - 0.5).join('');

  passwordBox.value = password;
}


async function copyPassword() {
  try {
    await navigator.clipboard.writeText(passwordBox.value);
    alert("Password copied to clipboard!");
  } catch (err) {
    console.error('Failed to copy:', err);
  }
}


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("generateBtn").addEventListener("click", createPassword);
  document.getElementById("copyBtn").addEventListener("click", copyPassword);
});