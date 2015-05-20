// Write an algorithm that accurately displays the maximum amount of profit able to be made in 1 transaction involving the buying and selling of 1 unit of stock.
// Input: An array of prices, sorted by time of price change in 1-minute increments(i.e. [100, 101, 102, 100] would mean that '101' happens one minute after '100').
// Output: The maximum profit that could be made with one buy and one sell (in the above example, it would be $2 since we would buy at $100 at market open and sell at $102 two minutes after)
// Edge cases:
//    1) A buy and sell must occur. Cannot return undefined/null
//    2) A negative profit can occur.
//    3) No short selling. Cannot sell before you buy.
//    4) No time/space complexity, but optimize for it.

var arr = [100, 102, 105, 103, 101, 107, 103, 102, 97, 100] //Expected output = $7 (buy at $100 at arr[0], sell at $107 at arr[5])

var negArr = [100, 98, 95, 92, 91, 90, 89, 85, 81] //Expected output = -$1 (buy at $92 at arr[3], sell at $91 at arr[4])

// Naive solution would be to run this in exponential time: Running one for-loop within another to find the highest possible profit.
  // Exponential time doesn't seem like a very optimized soution, so I'm going to skip it for now.

// The function should accept an array as its parameter.
var getBestProfit = function(arr) {
  // It should also keep a 'result' variable handy.
  var result;
  var currentLowest = arr[0];
    // One way to approach this: We can iterate over the array and find the lowest possible price, and then run a binary search to find its highest sell price
      // Edge case: This would not work if the array passed in was negArray above, since we would catch $81 at negArr[8] as the lowest.
    // Another way to approach this: We can iterate through the array, keeping track of the following things:
    for (var i = 1; i < arr.length; i++) {
      // The profit between the current 'lowest' number and the next number.
      if (result < 0) {
        if (result < arr[i] - currentLowest) {
          result = arr[i] - currentLowest;
        }
        if (currentLowest > arr[i]) {
          currentLowest = arr[i];
        }
      } else if (!result || result < arr[i] - currentLowest) {
        result = arr[i] - currentLowest;
        if (currentLowest > arr[i]) {
          currentLowest = arr[i];
        }
      }
        // If the new number is lower than the 'lowest' number, we still set the profit and re-start with this new lowest number.
        // If the new number is higher than the 'lowest' number, we should place the difference as the current profit.
    }
  // At the end of this, it should return that result variable
  return result;
}
