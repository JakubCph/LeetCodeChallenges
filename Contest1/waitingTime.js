function averageWaitingTime(customers) {
    var finishTime = 0;
    var sum = 0;
    for (var c = 0; c < customers.length; c++) {
        var startTime = Math.max(finishTime, customers[c][0]);
        finishTime = startTime + customers[c][1];
        sum += finishTime - customers[c][0];
    }
    return sum / customers.length;
}
;
var customers = [[1, 2], [2, 5], [4, 3]];
var res2 = averageWaitingTime(customers);
console.log(res2);
