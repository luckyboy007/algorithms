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
};

// Refactoring without looking at code above.
// Approach:
  // Try and do this in one iteration
  // Keep track of the current lowest profit,

var stockProfits = function(array) {
  var currentLowest = array[0];
  var bestProfit = array[1] - currentLowest;

  for (var i = 1; i < array.length; i++) {
    bestProfit = Math.max(bestProfit, array[i] - currentLowest);
    currentLowest = Math.min(currentLowest, array[i]);
  }

  return bestProfit;
};

// Refactoring without looking at any of thos code
// Approach:
  // Iterate backwards
    // Compare the current greatest profit to the difference between the current highest number and the current number from iteration, set the greatest profit accordingly
    // Additionally, compare the current highest number to the current number from iteration and set the current highest number accordingly
  // This is doable in linear time
  // The number of variables tracked do not scale with input, so this is also constant space

var getMaxProfit = function(stockPriceArray) {
  // Store the current largest number, start it off as the lowest possible number
  var currentHighest = Number.NEGATIVE_INFINITY;
  // Set the greatest profit possible to the lowest possible number
  var greatestProfit = Number.NEGATIVE_INFINITY;

  // Iterate BACKWARDS in the array
  for (var i = stockPriceArray.length - 1; i >= 0; i--) {
    if (currentHighest - stockPriceArray[i] > greatestProfit) {
      greatestProfit = currentHighest - stockPriceArray[i];
    }

    if (stockPriceArray[i] > currentHighest) {
      currentHighest = stockPriceArray[i];
    }
  }

  return greatestProfit;
};
