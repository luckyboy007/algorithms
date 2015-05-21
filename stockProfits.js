// Write an algorithm that accurately displays the maximum amount of profit able to be made in 1 transaction involving the buying and selling of 1 unit of stock.
// Input: An array of prices, sorted by time of price change in 1-minute increments(i.e. [100, 101, 102, 100] would mean that '101' happens one minute after '100').
// Output: The maximum profit that could be made with one buy and one sell (in the above example, it would be $2 since we would buy at $100 at market open and sell at $102 two minutes after)
// Edge cases:
//    1) A buy and sell must occur. Cannot return undefined/null
//    2) A negative profit can occur.
//    3) No short selling. Cannot sell before you buy.
//    4) Optimize for O(n) Linear Time

var getBestProfit = function(arr) {
  var result;
  var currentLowest = arr[0];
    for (var i = 1; i < arr.length; i++) {
      if (result < 0 && result < arr[i] - currentLowest) {
        result = arr[i] - currentLowest;
      }
      if (!result || result < arr[i] - currentLowest) {
        result = arr[i] - currentLowest;
      }
      if (currentLowest > arr[i]) {
        currentLowest = arr[i];
      }
    }
  return result;
}
