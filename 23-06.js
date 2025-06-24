//exe1

const nums = [1,4,8,5,3.9]
function doubleValue(num){
    return num * 2
}
const newNums1 = nums.map(doubleValue)
// console.log(newNums1)

//------------exe2--------------------

function onlyEvenValues(num){
    if(num % 2 == 0){
        return num
    }
}

const newNums2 = nums.filter(onlyEvenValues)
// console.log(newNums2)


//-------------exe3---------------------

const arr = ["elazar",7,6,3,9,7,"matan"]

function showFirstAndLast(arr) {
    const newArr = [arr[0], arr[arr.length - 1]]
    newArr.filter((item) => { return (typeof(item) === "string") });
    return newArr;
}

const newArr = showFirstAndLast(arr)
// console.log(newArr)

//-----------exe4-------------


function vowelCount(string){
    let dict = {'a':0,'e':0,'i':0,'o':0,'u':0}
    for (const element of string) {
        if(element in dict){
            dict[element] ++
        }
    }
    return dict
}

let c = vowelCount("yskjbfjxeuioihutiik")
// console.log(c)
//-----------exe5-------------

function capitalize(string){
    return string.toUpperCase()
}
let s = "elazar"
// console.log(capitalize(s))
//-----------exe6-------------

function shiftLetters(str){
    let newStr = ""
    let ascii = 0
    let unascii = ''
    for (element of str) {
        if(element === "z" || element === "Z"){
            ascii = element.charCodeAt()-25
            unascii = String.fromCharCode(ascii)
            newStr += unascii
        }
        else if(element >= "a" && element <= "y"){
             ascii = element.charCodeAt()+1
            unascii = String.fromCharCode(ascii)
            newStr += unascii
        }
        else if(element >= "A" && element <= "Y"){
             ascii = element.charCodeAt()+1
            unascii = String.fromCharCode(ascii)
            newStr += unascii
        }
        else{
            newStr += element
        }
    }
    return newStr
}

// console.log(shiftLetters("Elazar matan1"))
//-----------exe7-------------

function swapCase(str){
    let newarr7 = str.split(' ')
    newarr7.forEach((val,index)=>{
        if(index % 2 != 0){
             newarr7[index] = capitalize(val)
        }
    })
    let newStr = newarr7.join(' ')
    return newStr
}
console.log(swapCase("hello world this is cool"))


