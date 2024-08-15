    

function info() {
    let name = prompt('Введите Ваше имя')
    let birthYear = +prompt('Введите Ваш год рождения')
    let currYear = +prompt('Введите нынешний год')
    let message = (currYear > birthYear) ? name + ', Ваш восраст ' + (currYear - birthYear) : 'Нынешний год не может быть меньше года рождения'
    
       return message
    
    
}

console.log(info());

