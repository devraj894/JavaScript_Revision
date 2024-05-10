// for...............

const arr = [10,20,30,40,50,60,70,80,90,100]

for(let i=0; i<arr.length; i++){
    console.log(arr[i])
}

// break and continue..........

for(let i=0; i<arr.length; i++){
    if(i == 5){
        console.log("Detected 5")
        break
    }
    console.log(arr[i])
}

const arr2 = [0,1,2,3,4,5,6,7,8]

for(let i=0; i<arr2.length; i++){
    if(i == 5){
        continue
    }
    console.log(arr2[i])
}

// while loop..................

let index = 0
while(index <= 10){
    console.log(`Value of index is ${index}`);
    index++
}

// do while loop......................

let score = 1;

do{
    console.log(`Score is ${score}`)
    score++
}while(score <= 10)