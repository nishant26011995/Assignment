class CommonHelper {
    constructor() {}

    checkdata(data) {
        if (data.number1 === "" || data.number1 === undefined) {
          throw new Error('Please provide valid 1st number');
        }
        if (data.number2 === "" || data.number2 === undefined) {
            throw new Error('Please provide valid 2nd number');
          }
          if(data.number1 < 0 || data.number2 < 0){
            throw new Error('Please provide positive numeric values');
          }
        return true;
      }

      factorial(num)
      {
        var rval=1;
        for (var i = 2; i <= num; i++)
        rval = rval * i;
        return rval;
    }
}

module.exports = new CommonHelper();