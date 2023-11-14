function task6(){
    // Написать функцию, которая принимает массив чисел и переносит 
    // первый элемент массива в конец. (push,shift)

    let arr=[1,2,3,4,5];
   let arr1=arr.shift();
   arr.push(arr1);
    alert(arr[1]);
 

}