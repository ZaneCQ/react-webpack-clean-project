let count = 1;
function add () {
    count ++;
}

function getCount () {
    console.log('count:', count);
    return count;
}

module.exports = {
    count,
    add,
    getCount
}