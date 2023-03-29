
exports.sucessResponse = (res,statusCode,data) => {

let status = '';
 if(`${statusCode}`.startsWith('2')){
      status = 'sucess';
 } else if(`${statusCode}`.startsWith('4')){
    status = 'fail';
 }
    return res.status(statusCode).json({
       status: status,
       data: {
          data
       }
    });
}