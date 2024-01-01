// задание 1

let phones = [ 
    '590.423.4568', 
    '650.124.7234', 
    '650.507.9879', 
    '011.44.1343.529268', 
    '011.44.1344.478968', 
    '011.44.1644.429267', 
    '11.44.1343.52', 
    '11.44.1643.52'
]

let res = function(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i].substring(0, arr[i].lastIndexOf('.')+2)+ '****')
    }
    return newArr
}
console.log(res(phones))

// задание 2

let phones = [ 
    '4000 0012 0056 9499', 
    '4000 0013 5456 7379', 
    '4000 0014 1456 9869', 
    '4000 0015 3466 7859', 
    '4000 0016 3556 6899', 
    '4000 0017 4456 4699'
    ]    

let res = function(arr){
    let newArr = []
    for(let i = 0; i < arr.length; i++){
        newArr.push(arr[i].slice(0, arr[i].indexOf(' ')) + '*****' + arr[i].slice(arr[i].lastIndexOf(' ')+1, arr[arr.length]))
    }
    return newArr
}
console.log(res(phones))

// задание 3

let prices = [ 
    'Цена товара - 1200$', 
    'Стоимость - 500$', 
    'Цена не определена', '9999',
    'Ценовая категория - больше 300$',
    'Цена за услугу 500 EUR',
    '150$',
     ]

let res = function(arr){
    let newArr = [0,0]
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i].startsWith('Цена')){
            newArr[0]++
        }
        if(arr[i].endsWith('$')){
            newArr[1]++
        }
    }
    return newArr
} 
console.log(res(prices))

// задание 4

let text = 'секир башка!'

let res = function(str){
    if(str.startsWith('Король сказал: ')){
        console.log(str)
    } else {
        console.log(`Король сказал: ${str}`)
    }
}
res(text)

// задание 5

let date = new Date()

let iIstFridayToday = function(date){
    if(date.getDay() == 5){
        console.log('сегодня пятница!')
    } else if(date.getDay() == 4){
        console.log('завтра пятница')
    } else if(date.getDay() == 6){
        console.log('вчера была пятница')
    } else {
        if(date.getDay() == 7){
            console.log('до следующей пятницы: 5 дней')
        } else {
            console.log(`до пятницы осталось: ${5 - date.getDay()} дня`)
        }
    }
}
iIstFridayToday(date)