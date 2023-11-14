function task7(){
    // Дан некоторый массив. Поделите сумму элементов, стоящих на четных позициях,
    //  на сумму элементов, стоящих на нечетных позициях. Считайте что первая позиция четная (номер индекса 0),
    //  массив должен заполняться случайными числами и содержать четное число элементов. (reduce(sum,elem,index)...)
let arr=[1,2,9,3,4,8];
let sumch=0;
let sumnch=0;

let summa=arr.reduce(function(sum,elem){
    if (elem%2==0||elem==0) sumch+=elem;
    else sumnch+=elem;
    sum=sumch/sumnch;
    return sum;
},0)
alert(summa);

}