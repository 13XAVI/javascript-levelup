var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    
    const result= [];
    const iterArray = Array.isArray(iterable)? iterable : iterable.split('')
    
    for(let i = 0 ; i < iterArray.length ; i++){
      if(iterArray[i] !== iterArray[i+1])
        result.push(iterArray[i])
    }
    
    return result
  }