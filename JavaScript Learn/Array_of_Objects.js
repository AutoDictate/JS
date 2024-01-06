const foods = [
    {id : 1, title: 'Plain Briyani', diet:'veg'},
    {id : 2, title: 'Veg Briyani', diet:'non veg'},
    {id : 3, title: 'Chicken Briyani', diet:'veg'}
]

console.log(foods[0]);

//for loop - traditional

for(let i=0;i<foods.length;i++){
    console.log('food-items',foods[i].title);
}

// for-in loops

for(let foodItem in foods){
    console.log(foods[foodItem].title);
}

// for-of loop

for(let foodItem of foods){
    console.log(foodItem.title);
}

// for-each loop
// foods.forEach(food =>{
//     document.getElementById("food").innerHTML += '<b><li>'+food.title + '</li><br>';
// })


// Multi-Dimensional Array

const mt = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(mt.flat());