'use strict'

let jsbook = {
    // key:  "value",
    // ↓key     ↓value
    title: 'JavaScript入門',
    price: 2500,
    stock: 3
    obj: {
        text: "test",
        func: () => {
            console.log("this is callback function")
        }
    }
}

console.log(jsbook)

//オブジェクトのkeyへのアクセス方法
//本のタイトルにアクセス
let bookTitle = jsbook.title;
console.log(bookTitle)
console.log(jsbook.price)

console.log(jsbook.obj.text)
console.log(jsbook.obj.func)

//オブジェクトの値を変える場合は？
jsbook.price = 3000
console.log(jsbook.price)

console.log(jsbook.['stock'])