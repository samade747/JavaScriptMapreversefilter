// // map 

var data = [12, 3, 234, 25, 12]
var b = data.filter(function(data){
    return data > 200
}) 

document.write(b +'<br>')



var data = [12, 3, 200, 335, 25, 12, 100]
var b = data.filter(function(e){
    return e >= 100
}) 

document.write(b +'<br>')


// // for each method 
// // its dosent return anything 
// // it didnt create new array 
// // 

var tayyaba = ['samad', 'saad', 'kamil', 'harron']

tayyaba.forEach(function(e){
    document.write(e, '<br>')
})

// // reverse method on above method

var dabaya = tayyaba.reverse()

console.log(dabaya)

// // map method 
// // it dosent modify the original array 
// // its create a new array 
// // its returns a new array contain the modified elements

var sabdabaya = tayyaba.map(function(e){
    document.write(e )
})