const orderAmount = [5000, 2000, 1000, 500, 250];

export function order(widgets) {
  // define results array
  let results = [];
  // if an initial widget input was 0 or less, return then empty results array
  if (widgets <= 0) return results;

  let remaining = widgets;
  // keep looping while remaining is > 0
  while (remaining > 0) {
    // loop through our pack sizes and choose the appropriate size for our remaining
    // widgets left to pack.

    // we break out of the if statements when we add so we can start from the beginning
    // of the array to get the highest pack size.
    for (let i = 0; i < orderAmount.length; i++) {
      if (remaining > orderAmount[i]) {
        // if we're at the first value use the first index in the array
        // otherwise we'll be trying to access index -1 and cause an error
        if (i - 1 < 0) {
          remaining = remaining - orderAmount[0];
          results.push(orderAmount[0]);
          break;
        } else {
          // check if we're not on the last element of the array
          // if we're not, we can safely use the current element value
          if (i < orderAmount.length - 1) {
            remaining = remaining - orderAmount[i];
            results.push(orderAmount[i]);
            break;

            // however if we are at the end of the array i.e 250
            // we want to use the previous value, i.e. 500
          } else {
            remaining = remaining - orderAmount[i - 1];
            results.push(orderAmount[i - 1]);
            break;
          }
        }
      }
      // if the remaining value is less than the smallest pack size & we're
      // on the last element i,e 250, use 250 otherwise the program will halt / stall
      // as there is no condition for this case.
      else if (i === orderAmount.length - 1) {
        remaining = remaining - orderAmount[i];
        results.push(orderAmount[i]);
        break;
      }
    }
  }

  return results;
}
