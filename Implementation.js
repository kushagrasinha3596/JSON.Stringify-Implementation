var obj = {
    fname: undefined,
    height: null,
    favNo: [123, 'alpha', 'beta', 456, 'gama'],
    lname: 'Sinha',
    address: {
        city: 'Patna',
        state: 'Bihar',
        contact: [[1],[{name: 'AA'}],[{'contact':1111}]],
        dummyKey: [{test1: true}, {test2: false}]
    }
}

function myStringify(obj){
    var resObj;
    if(Object.prototype.toString.call(obj) === '[object Array]'){
        //For array data
        resObj = `[`;
        for(var i=0; i< obj.length; i++){
            if(obj[i] === undefined){
                continue;
            }
            if(obj[i] === null){
                resObj += 'null';
            }else if(typeof obj[i] === 'object'){
                resObj += `${myStringify(obj[i])}`;
            }else{
                if(typeof obj[i] == 'number' || typeof obj[i] == 'boolean'){
                    resObj += `${obj[i]}`;
                }else{
                    resObj += `"${obj[i]}"`;  
                }
            }
            if(i !== obj.length-1){
                 resObj += `,`;
            }
        }
        resObj += "]";
        return resObj;
    }else if(Object.prototype.toString.call(obj) === '[object Object]'){
        //For object data
        resObj=`{`;
        var keysArray = Object.keys(obj);
        for(var i=0; i< keysArray.length; i++){
        if(obj[keysArray[i]] === undefined){
            continue;
        }
        if(obj[keysArray[i]] === null){
            resObj += `"${keysArray[i]}":${null}`;
        }else if(typeof obj[keysArray[i]] == 'object'){
            resObj += `"${keysArray[i]}":${myStringify(obj[keysArray[i]])}`;
        }else{
            if(typeof obj[keysArray[i]] == 'number' || typeof obj[keysArray[i]] == 'boolean'){
                resObj += `"${keysArray[i]}":${obj[keysArray[i]]}`;
            }else{
                resObj += `"${keysArray[i]}":"${obj[keysArray[i]]}"`;  
            }
        }
        if(i !== keysArray.length-1){
            resObj += `,`;
        }
    }
    resObj += `}`;
    return resObj;
    }else{
        //For data other than array and object
        return obj;
    }
}

var polyRes = myStringify(obj);
console.log(polyRes);
console.log("For testing, below is the original result: ");
console.log(JSON.stringify(obj));
