function curriedAdd(num) {
    let total = 0;
    if(num === undefined) return total;
    total += num;
    const fn = (num)=>{
        if(num === undefined) return total;
        total += num;
        return fn
    }
    return fn
}

module.exports = { curriedAdd };
