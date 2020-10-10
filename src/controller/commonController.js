const responseHandler = require("../handler/responseHandler");
const commonHelper = require("../helper/commonhelper");
const commonService = require("../service/commonservice")

class CommonController {
    constructor() {}

    async factorial(req, res) {
try {
    commonHelper.checkdata(req.body);
    const data = await commonService.factorial(req.body);
    if (!data){
        responseHandler.errorResponse(
            res,
            400,
            'Something went wrong',
            []
            );
     }
        responseHandler.successResponse(
          res,
          200,
          'Factorial sum found',
          data
        );
} catch (error) {
    responseHandler.errorResponse(res, 500, error.message, []);
}
    }
}
module.exports = new CommonController();