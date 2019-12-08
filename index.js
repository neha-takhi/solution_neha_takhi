const clicksArr1 = [
    { "ip": "22.22.22.22", "timestamp": "3/11/2016 02:02:58", "amount": 7.00 },
    { "ip": "11.11.11.11", "timestamp": "3/11/2016 02:12:32", "amount": 6.50 },
    { "ip": "11.11.11.11", "timestamp": "3/11/2016 02:13:11", "amount": 7.25 },
    { "ip": "44.44.44.44", "timestamp": "3/11/2016 02:13:54", "amount": 8.75 },
    { "ip": "22.22.22.22", "timestamp": "3/11/2016 05:02:45", "amount": 11.00 },
    { "ip": "44.44.44.44", "timestamp": "3/11/2016 06:32:42", "amount": 5.00 },
    { "ip": "22.22.22.22", "timestamp": "3/11/2016 06:35:12", "amount": 2.00 },
    { "ip": "11.11.11.11", "timestamp": "3/11/2016 06:45:01", "amount": 12.00 },
    { "ip": "11.11.11.11", "timestamp": "3/11/2016 06:59:59", "amount": 11.75 },
    { "ip": "22.22.22.22", "timestamp": "3/11/2016 07:01:53", "amount": 1.00 },
    { "ip": "11.11.11.11", "timestamp": "3/11/2016 07:02:54", "amount": 4.50 },
    { "ip": "33.33.33.33", "timestamp": "3/11/2016 07:02:54", "amount": 15.75 },
    { "ip": "66.66.66.66", "timestamp": "3/11/2016 07:02:54", "amount": 14.25 },
    { "ip": "22.22.22.22", "timestamp": "3/11/2016 07:03:15", "amount": 12.00 },
    { "ip": "22.22.22.22", "timestamp": "3/11/2016 08:02:22", "amount": 3.00 },
    { "ip": "22.22.22.22", "timestamp": "3/11/2016 09:41:50", "amount": 4.00 },
    { "ip": "22.22.22.22", "timestamp": "3/11/2016 10:02:54", "amount": 5.00 },
    { "ip": "22.22.22.22", "timestamp": "3/11/2016 11:05:35", "amount": 10.00 },
    { "ip": "22.22.22.22", "timestamp": "3/11/2016 13:02:21", "amount": 6.00 },
    { "ip": "55.55.55.55", "timestamp": "3/11/2016 13:02:40", "amount": 8.00 },
    { "ip": "44.44.44.44", "timestamp": "3/11/2016 13:02:55", "amount": 8.00 },
    { "ip": "55.55.55.55", "timestamp": "3/11/2016 13:33:34", "amount": 8.00 },
    { "ip": "55.55.55.55", "timestamp": "3/11/2016 13:42:24", "amount": 8.00 },
    { "ip": "55.55.55.55", "timestamp": "3/11/2016 13:47:44", "amount": 6.25 },
    { "ip": "55.55.55.55", "timestamp": "3/11/2016 14:02:54", "amount": 4.25 },
    { "ip": "55.55.55.55", "timestamp": "3/11/2016 14:03:04", "amount": 5.25 },
    { "ip": "55.55.55.55", "timestamp": "3/11/2016 15:12:55", "amount": 6.25 },
    { "ip": "22.22.22.22", "timestamp": "3/11/2016 16:02:36", "amount": 8.00 },
    { "ip": "55.55.55.55", "timestamp": "3/11/2016 16:22:11", "amount": 8.50 },
    { "ip": "55.55.55.55", "timestamp": "3/11/2016 17:18:19", "amount": 11.25 },
    { "ip": "55.55.55.55", "timestamp": "3/11/2016 18:19:20", "amount": 9.00 },
    { "ip": "22.22.22.22", "timestamp": "3/11/2016 23:59:59", "amount": 9.00 }
];
const periods = {
    'p1': "00:00:00 00:59:59",
    'p2': "01:00:00 01:59:59",
    'p3': "02:00:00 02:59:59",
    'p4': "03:00:00 03:59:59",
    'p5': "04:00:00 04:59:59",
    'p6': "05:00:00 05:59:59",
    'p7': "06:00:00 06:59:59",
    'p8': "07:00:00 07:59:59",
    'p9': "08:00:00 08:59:59",
    'p10': "09:00:00 09:59:59",
    'p11': "10:00:00 10:59:59",
    'p12': "11:00:00 11:59:59",
    'p13': "12:00:00 12:59:59",
    'p14': "13:00:00 13:59:59",
    'p15': "14:00:00 14:59:59",
    'p16': "15:00:00 15:59:59",
    'p17': "16:00:00 16:59:59",
    'p18': "17:00:00 17:59:59",
    'p19': "18:00:00 18:59:59",
    'p20': "19:00:00 19:59:59",
    'p21': "20:00:00 20:59:59",
    'p22': "21:00:00 21:59:59",
    'p23': "22:00:00 22:59:59",
    'p24': "23:00:00 23:59:59"
};
var resultset = [];
// common utility function: to get time in milliseconds
function getMilliseconds(t) {
    const tArr = t.split(':');
    return Number(tArr[0]) * 60 * 60 * 1000 + Number(tArr[1]) * 60 * 1000 + Number(tArr[2]) * 1000;
}

/**
 * 
 * @param {*} clicksArr  : that contains all clicks
 * Filtered as per periods wise, and the find the most relevant expensive Clicks
 */
function getClicks(clicksArr) {
    Object.keys(periods).map((p) => {
        const periodArr = periods[p].split(" ");
        const filterdArr = clicksArr.filter((clickObj) => {
            const objTimeStampArr = clickObj.timestamp.split(" ");
            if (getMilliseconds(periodArr[0]) <= getMilliseconds(objTimeStampArr[1]) && getMilliseconds(periodArr[1]) > getMilliseconds(objTimeStampArr[1])) {
                return true;
            } else {
                return false;
            }
        })
        filterdArr.length && getMostRelevantExpensiveWithinPeriod(filterdArr);
    })
    return resultset;
}

/**?
 * @param {*} arr  : that contains filtered clicks periods wise 
 * pushing the desired clicks in resultset
 * if already present with tie, then push earliest one
 */
function getMostRelevantExpensiveWithinPeriod(arr) {
    arr.sort((a, b) => (a.amount < b.amount) ? 1 : -1); // sort by amount within same period to get most expensive

    arr.map((clickObj) => {
        const filteredArr = filterSameResultset(clickObj);
        if (resultset.length < 10) {
            if (filteredArr.length >= 1) {
                if (filteredArr[0].amount === clickObj.amount) { // if already present with tie, then push earliest one
                    const earliestObjAsPerTimestamp = getMilliseconds(filteredArr[0].timestamp.split(" ")[1]) < getMilliseconds(clickObj.timestamp.split(" ")[1]) ? clickObj : filteredArr[0];
                    resultset.forEach((element, index) => { // replace with less timestamp, ie, earliest one
                        if (element.ip === earliestObjAsPerTimestamp.ip) {
                            resultset[index] = earliestObjAsPerTimestamp;
                        }
                    });

                }
            } else {
                resultset.push(clickObj);
            }
        }

    })
    return true;
}

function filterSameResultset(obj) {
    return resultset.filter((objClick) => obj.ip === objClick.ip);
}


console.log("---------------------------------");
console.log("My Assumption 1: In resultset, No repeatitive Ip should be there, Means if Same IP triggers than the previous one (less timestampe) will come.")
console.log("My Assumption 2: Only one data is coming(means same day data)")
console.log("---------------------------------");
console.log("output is");
console.log(getClicks(clicksArr1));