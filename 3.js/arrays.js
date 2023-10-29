function task3() {
    //Написать функцию, которая принимает массив 
    //любых целых чисел и возвращает истину, если все элементы четные. 
    //Если имеется хотя бы один элемент не четный, то false.
    let arr=[12,16,14,4,6];
    counter=arr.reduce(function(count,elem){
        if (elem%2!=0) count=false;

    return count;},true);
    alert(counter);
}


