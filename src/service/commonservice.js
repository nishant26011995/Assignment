const commonHelper = require("../helper/commonhelper");

class CommonService {
    constructor() {}
    async factorial(data){
var sum1,sum2;
    
    if (data.number1 == 0 || data.number1 == 1 ){
       sum1 = 1;
    }else{
        sum1 = commonHelper.factorial(data.number1);
    }
    if (data.number2 == 0 || data.number2 == 1 ){
        sum2 = 1;
     }else{
        sum2 = commonHelper.factorial(data.number2);
     }
    return sum1 + sum2;
    }

}

module.exports = new CommonService();