const store = require('./models/store.model');
const deliveryChannelModel = require('./models/deliveryChannel.model');

const fs = require('fs')
const axios = require('axios')

// Get orders from doordash dashboard every 2 minutes
let timeOut = DOORDASH_ORDER_CRON_TIME;



setTimeout(async function () {

    //get token from db for store 
    let store_id = 1108572 // from db

    let config = {
        method: 'get',
        url: `https://merchant-mobile-bff.doordash.com/v1/active_orders/${store_id}?auto_confirm=false`,
        headers: {
            'Authorization': 'JWT ' + token,// from db
            'Cookie': 'dd_device_id_2=dx_a80138056180477d91faf475d13923f1; dd_device_id=dx_391c52cf8cea48e599b897eb990490fe; __cfduid=d0097d7c5bc2bd15284c899bfc8ca504b1613043461; __cf_bm=c22eaa7c8601845686d24bb5b0ed9f04342e5639-1613127946-1800-AeTYGSGiFY0xb0i1OzrwtBIcb/weujW70GXBgsInE28DrMnQ0LxDAmxQi9PNXokZdWE2e7ped1zOT9HNAFp2U5I='
        }
    };

    let response = await axios(config);
    let orders = JSON.parse(response.data.payload)


    // let  order_id = orders.id get orderid from response

    // call prism doordash webhook to notify new order
    // {
    //     event_type:'orders.notification',
    //    meta:{resource_id :order_id, user_id:}
    // }



    // call prism doordash webhook to notify cancelled order
    // {
    //     event_type:'orders.cancel',
    //    meta:{resource_id :order_id, user_id:}
    // }

}, timeOut)