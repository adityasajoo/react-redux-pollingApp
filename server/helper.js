/**
 * @description To display the line graph we need to format our data 
 *              labels  : Must contatin dates from both 'yes' and 'no' array, and all elements must by unique and sorted.
 *              yesData : Must have "count= 0" for the dates that are in noData but not in yesData and should be sorted according to the date.
 *              noData : Must have "count= 0" for the dates that are in yesData but not in noData and should be sorted according to the date.
 * @param {Array} yesData 
 * @param {Array} noData 
 * @returns : Object with formated data { labels,yesData,noData }
 */
const removeMethods = (obj) =>{
    const objStr = JSON.stringify(obj);
    return JSON.parse(objStr);;
}

const formatData = (yesData,noData)=>{
     const labels = new Set();
     [...yesData,...noData].forEach(element=>{
        labels.add(element.casted_at);
    });

    yesData = removeMethods(yesData);
    noData = removeMethods(noData);

    //we need to pass coordinated to the line graph : {x:date , y:count }, hence we need to format the arrays
    const formatedYesData = yesData.map(item =>{
        return { x: item.casted_at, y:item.count }
    });
    const formatedNoData = noData.map(item =>{
        return { x: item.casted_at, y:item.count }
    });
   
    //Add dates if its present in onr and not in other
    Array.from(labels).forEach(date => {
        let found = formatedYesData.some(el => el.x === date);
        if (!found) formatedYesData.push({
            x: date,
            y: "0"
        });
        found = [];
        found = formatedNoData.some(el => el.x === date);
        if (!found) formatedNoData.push({
            x: date,
            y: "0"
        });
    });

    //Sort each array according to the dates
    formatedYesData.sort(function (a, b) {
        return new Date(a.x) - new Date(b.x);
    });
    formatedNoData.sort(function (a, b) {
        return new Date(a.x) - new Date(b.x);
    });

    let labelsArray = Array.from(labels).sort();
    return {labelsArray,formatedNoData,formatedYesData};
}


module.exports =  {formatData};