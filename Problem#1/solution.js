function solution1(list, k){
    if(Array.isArray(list)){
        for (let i = 0; i < list.length; i++) {
            for(let j = i + 1; j < list.length; j++){
                if(list[i] + list[j] == k){
                    return true;
                }
            }
        };
    }
    return false;
}

function solution2(list,k){
    return list.some(function(element,index){
        return list.slice(index+1).some(otherElement => element + otherElement === k)
    });
}

let list = [10, 15, 5, 3];
let k = 17;


let result = solution2(list,k);
console.log(result);