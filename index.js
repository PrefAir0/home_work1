const numbers = [5, 7, 2, 9, 1, 8, 3, 4, 12]

function analyzerArr(array){
    let x = array[0]
    let y = array[0]
    let z = 0 

    for(i = 0; array.length > i; i++){
        if(x < array[i]){
            x = array[i]
        }
        
        if( y > array[i]){
            y = array[i]
        }
        console.log(z)
        z = array[i] + z
    }

    return (x + " " + y + " " + (z / array.length))
}

console.log(analyzerArr(numbers))
