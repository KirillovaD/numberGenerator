const btn = document.querySelector('button');
const numbersArray = document.querySelector('.number');
const minNumber =  document.querySelector('.min');
const maxNumber =  document.querySelector('.max');
const sumNumber = document.querySelector('.sum');
const averageNumber = document.querySelector('.average');
const multiNumber = document.querySelector('.multi');

btn.addEventListener('click', generateRandomNumberArray);

function generateNumber(min, max){
  min = Math.ceil(min);
  max = Math.ceil(max);
  randomNumber = Math.round(Math.random()* (max - min +1) + min);
  return randomNumber;
}

function generateRandomNumberArray(){
  let randomNumberArray = []; //создаем массив для скалдывания чисел
  numbersArray.textContent = '';
  minNumber.textContent = '';
  maxNumber.textContent = '';
  sumNumber.textContent = '';
  averageNumber.textContent = '';



  let sum = 0; //создаем сумму
  let average; 
  let multi = 1; //произведение
  for (let i = 0; i < 10; i++){ //проходимся по массиву и тк длиный массива нет берем колчество чисел в ряду
    let number = generateNumber(-10, 10); //вызываем функция генерации чисел в нужном нам диапозоне
    numbersArray.textContent += randomNumber + ', '; //выводим числа
    sum += number;
    multi = multi * number;
    average = sum/10; 
    randomNumberArray.push(number); //добавляем число массив сразу поле его генерации
  }
  minNumber.textContent = Math.min(...randomNumberArray); //нахождение минимума
  maxNumber.textContent = Math.max(...randomNumberArray); // нахождение максимума
  sumNumber.textContent = sum; 
  averageNumber.textContent = average;
  multiNumber.textContent = multi;

}



  
  
  

  
  





