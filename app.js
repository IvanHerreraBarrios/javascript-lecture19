//532

var findPairs = function(nums, k) {
    if ( k < 0) return 0
    if(k === 0){
        return handleZeroCase(nums)
    } else {
        return handleGeneralCase(nums, k)
    }
};

function handleZeroCase(nums){
    const repetidos = new Set()
    const map = new Map()
    let count = 0
    for(let i=0; i < nums.length; i++){
        const num = nums[i]
        if(map.has(num) && !repetidos.has(num)){
            count++
            repetidos.add(num)
        } else {
            map.set(num, 1)
        }
    }

    return count
}


function handleGeneralCase(nums, k){
    const set = new Set(nums)
    let count = 0
    set.forEach(function(num){
        set.delete(num)
        if(set.has(num + k)){
            count++
        }
        if(set.has(num-k)){
            count++
        }
    })

    return count
}