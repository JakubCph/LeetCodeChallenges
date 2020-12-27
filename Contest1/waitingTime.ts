function averageWaitingTime(customers: number[][]): number {

    var finishTime = 0;
    var sum = 0;
    for (let c = 0; c < customers.length; c++) {
        let startTime = Math.max(finishTime, customers[c][0]);
        finishTime = startTime + customers[c][1];
        sum += finishTime - customers[c][0];
    }

    return sum/customers.length;
};

let customers = [[1,2],[2,5],[4,3]];
let res2 = averageWaitingTime(customers);
console.log(res2);