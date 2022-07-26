module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');
    this.add('role:product,cmd:getProductPrice', productPrice);


    //To DO: add the pattern functions and describe the logic inside the function
    function productPrice(msg, respond) {
        if(msg.productId){
            console.log(`getProductPrice -> id ${msg.productId}`)
            var res = mockData.filter((product) => { return product["product_id"] == msg.productId})
            if (res.length > 0) {
                respond(null, { result: res[0].product_price });
            } else
                respond(null, { result: ''});
        }
        else {
            respond(null, { result: ''});
        }
    }

}