function task5(){
   // Написать функцию, которая принимает массив чисел и возвращает среднее арифметическое, (округлить результат до десятых).
   arr=[10,15,20,5,10];
   counter=arr.reduce(function(count,elem){
 count+=elem;

return count;
},0);
 alert(counter/arr.length);


}