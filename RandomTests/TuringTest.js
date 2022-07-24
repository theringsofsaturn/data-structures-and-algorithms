// Turing test

function find_max(nums){
    let max_num = Number.NEGATIVE_INFINITY; // smaller than all the other numbers
    for(let num of nums){
        if(num > max_num){
            max_num = num;
        }
    }
}


