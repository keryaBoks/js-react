// 1)
// Написать функцию которая принимает в себя строчное значение
// состоящее из одного слова. В слове могут быть буквы разных
// регистров. Результатом выполнения данной функции должна быть
// строка, в которой первая буквы заглавная, а все последующие в
// нижнем регистре
const someFn =(word) =>{
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
   
}

console.log(someFn('ваЛера'))
console.log(someFn('диМИтрОн'))
console.log(someFn('бИтКоИн'))

// 2)
const sayHello = (name) => `${name === "Mark" ? "Hi," : "Hello,"} ${name}`

console.log(sayHello('Mark'))
console.log(sayHello('Vsia'))
console.log(sayHello('Alex'))   

// 3)
// Написать функцию, которая принимает массив строк и допустимую
// длину. Результатом выполнения должен быть новый массив,
// состоящий из строк, длина которые не превышают допустимую
// длину.

//  let newArr = function(arr,length){
//      let arrayLength = arr.filter(function(){

//      }
//  }

let arr = ['love Js', 'some very long string', 'hell']


    let filterSrings= function(arr,length){
        return arr.filter(element => element.length <= length);

    }
    console.log (filterSrings(arr,8))