//-------exe1--------

a = "elazar"
b = "matan"
a = a + b
b = a.slice(0,a.length - b.length)
a = a.slice(b.length)
// console.log(a)
// console.log(b)
//-------exe2--------

const grid = [
  ['X', 'x', 'O', 'X', ' '],
  ['x', 'X', 'X', 'x', 'x'],
  [' ', ' ', 'x', 'X', 'O'],
  ['X', 'x', 'x', 'x', 'X'],
  ['x', 'x', 'x', ' ', 'X']
];
let counter = 0
for(let i = 0;i < grid.length;i++){
for(let j = 0;j < grid[i].length;j++){
    if(grid[i][j] === "X"){
        // console.log(`${i} : ${j}`)
        counter++
    }
    }
}
// console.log(counter)
//-------exe3--------

let family = {
  parents: {},
  children: [
    { name: "Ali" },
    { name: "Lea" },
    { name: "Mona" }
  ]
}
for(let i = 0;i < family.children.length;i++){
    if(i === 2){
        // console.log(family.children[i].name)
    }
}
//-------exe4--------

let arr = [1,2,3,4]
let newarr = []
for(let i = arr.length-1;i >= 0;i--){
    newarr.push(arr[i])
}
// console.log(newarr)
//-------exe5--------

let arr5 = [42, "hello", null, true, { a: 1 }, "world", false, null, 3.14];
let counts = {}
for (const element of arr5) {
    if(element === null){
        if("null" in counts){
            counts[null] ++
        }
        else{
            counts["null"] = 1
        }
    }
    else{
        let type = typeof(element)
        if(type in counts){
            counts[type] ++
        }
        else{
            counts[type] = 1
        }
    }
}
console.log(counts)