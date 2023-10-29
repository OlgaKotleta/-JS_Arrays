function task2(){
    //Дан массив с числами. Найдите сумму тех элементов этого массива, 
 //   которые больше нуля и меньше десяти.
let arr=[-2,2,4,21,10,5]
let summa=arr.reduce(function(sum,elem){
    if(elem>0 && elem<10) sum+=elem;
    return sum;
        },0)
        alert(summa);
}