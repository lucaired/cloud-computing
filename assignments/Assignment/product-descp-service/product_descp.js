module.exports = function (options) {
    //Import the mock data json file
    const mockData = require('./MOCK_DATA.json');

    //Add the patterns and their corresponding functions
    this.add('role:product,cmd:getProductURL', productURL);
    this.add('role:product,cmd:getProductName', productName);


    //To DO: add the pattern functions and describe the logic inside the function
    function productURL(msg, respond) {
        if(msg.productId){
            console.log(`getProductURL -> id ${msg.productId}`)
            var res = mockData.filter((product) => { return product["product_id"] == msg.productId})
            if (res.length > 0) {
                respond(null, { result: res[0].product_url });
            } else
                respond(null, { result: ''});
        }
        else {
            respond(null, { result: ''});
        }
    }

    function productName(msg, respond) {
        if(msg.productId){
            console.log(`getProductName -> id ${msg.productId}`)
            var res = mockData.filter((product) => { return product["product_id"] == msg.productId})
            if (res.length > 0) {
                respond(null, { result: res[0].product_name });
            } else {
                respond(null, { result: ''});
            }
        }
        else {
            respond(null, { result: ''});
        }
    }
}