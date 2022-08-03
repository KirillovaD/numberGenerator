const btn = document.querySelector('button');

btn.addEventListener('click', generateRandomNumberArray);

function generateNumber(min, max){
  min = Math.ceil(min);
  max = Math.ceil(max);
  randomNumber = Math.round(Math.random()* (max - min +1) + min);
  return randomNumber;
}

function generateRandomNumberArray(){
  let randomNumberArray = []; //создаем массив для скалдывания чисел

  let sum = 0; //создаем сумму
  let average; 
  let multi = 1; //произведение
  for (let i = 0; i < 10; i++){ //проходимся по массиву и тк длиный массива нет берем колчество чисел в ряду
    let number = generateNumber(-10, 10); //вызываем функция генерации чисел в нужном нам диапозоне
    document.querySelector('.number').textContent += randomNumber + ', '; //выводим числа
    sum += number;
    multi = multi * number;
    average = sum/10; 
    randomNumberArray.push(number); //добавляем число массив сразу поле его генерации
  }
  document.querySelector('.min').textContent = Math.min(...randomNumberArray); //нахождение минимума
  document.querySelector('.max').textContent = Math.max(...randomNumberArray); // нахождение максимума
  document.querySelector('.sum').textContent = sum; 
  document.querySelector('.average').textContent = average;
  document.querySelector('.multi').textContent = multi;

}



  
  
  

  
  





