const removeFromArray = function(arr, ...del) {
    return arr.slice().filter(item=> !del.includes(item));
};


// Do not edit below this line
module.exports = removeFromArray;
