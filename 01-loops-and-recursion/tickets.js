function numberCount(half) {
    let result = {};
    for (let i = 1; i <= half; i++) {
      let length = i * 9 + 1;
    
      result[i] = {};
      if (i === 1) {
          for (let j = 0; j< length; j++) {
              result[i][j]=1;
          }
      } else {
          let sum = 0;
          let k = 0;
          for (k; k<=length/2; k++) {
              sum += result[i-1] ? result[i-1][k]: 0
              if (k >= 10) {
                  sum -= result[i-1] && result[i-1][k-10] ? result[i-1][k-10] : 0;
              }
              result[i][k] = sum;
          }
          for (k; k < length; k++) {
              result[i][k] = result[i][length - 1 - k] ? result[i][length - 1 - k] : 0;
          }
      }
    }
    return result;
  }
  
  
  exports.countTickets = (half) => {
      let result = BigInt(0);
      let numbers = numberCount(half);

      for (let i = 0; i < half * 9 + 1; i++) {
          result = result + BigInt(numbers[half][i]) * BigInt(numbers[half][i]);
      }
      return result.toString();
  }