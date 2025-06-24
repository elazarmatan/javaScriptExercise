//exe1

const nums = [1,4,8,5,3.9]
function doubleValue(num){
    return num * 2
}
const newNums1 = nums.map(doubleValue)
console.log(newNums1)

//------------exe2--------------------

function onlyEvenValues(num){
    if(num % 2 == 0){
        return num
    }
}

const newNums2 = nums.filter(onlyEvenValues)
console.log(newNums2)


//-------------exe3---------------------

const arr = ["elazar",7,6,3,9,7,"matan"]

function showFirstAndLast(arr) {
    const newArr = [arr[0], arr[arr.length - 1]]
    newArr.filter((item) => { return (typeof(item) === "string") });
    return newArr;
}

const newArr = showFirstAndLast(arr)
console.log(newArr)

//-----------exe4-------------
//-----------exe5-------------
//-----------exe6-------------
//-----------exe7-------------
