const fs = require('fs')
const axios = require('axios')

// Get orders from doordash dashboard every 2 minutes
let timeOut = 1000*30;




    var config = {
        method: 'get',
        url: 'https://merchant-mobile-bff.doordash.com/v1/active_orders/979007?auto_confirm=false',
        headers: { 
          'Authorization': 'JWT eyJhbGciOiJIUzI1NiJ9.eyJvcmlnX2lhdCI6MTYxOTUzMzkyNSwiZXhwIjoxNjE5NzkzMTI1LCJ1c2VyIjp7ImF1dGhfdmVyc2lvbiI6NCwiaXNfc3RhZmYiOmZhbHNlLCJpZCI6MjkxNjYxMjQ5LCJlbWFpbCI6ImRlc2ljaG9wc2luY0BnbWFpbC5jb20ifSwiY2lkIjoxNjQ4MTcxODU4MTAxNzg0NzY1fQ.8zNszrOl9uyB9wrHU8_Tzhud55O-jFb-D2YdWAem2Eg', 
          'Host': '', 
          'Cookie': '__cf_bm=bac9f8a949de80d52e1d3695174331d15e3a08e5-1619533971-1800-ATltBx+BQz+LxMfzdWdtto+pH2rna50QUfRMIDySmx84Od2SCE0xIx7irX0sLZ5HBYo1g5s9+uZ94okguVSL3tk=; __cfduid=d17db63d38a23ad4618590eee98d1a5f21619533971'
        }
      };
      
      axios(config)
      .then(function (response) {
          // let jsondata=JSON.parse(response.data.payload)
          console.log(response.data);
        //   console.log(response.data.kitchen);
      })
      .catch(function (error) {
        console.log(error);
      });




    //   console.log(response.data);
    //   {
    //     need_action: [],
    //     kitchen: [
    //       {
    //         estimated_pickup_time: '2021-04-28T16:53:15.07Z',
    //         order: [Object],
    //         print_details: [Object]
    //       }
    //     ],
    //     ready: [],
    //     scheduled: [],
    //     customer_editing: []
    //   }

    //   console.log(response.data.kitchen);
    //   [
    //     {
    //       estimated_pickup_time: '2021-04-28T16:53:15.07Z',
    //       order: {
    //         delivery_uuid: '7889d4cb-cd0f-4d1a-a7f3-4d7f7c24a2fb',
    //         customer_name: 'Lakshmi P.',
    //         customer_name_localized: 'Lakshmi P',
    //         dasher_status: 'NOT_ASSIGNED',
    //         dasher_confirmed_at_sore_time: null,
    //         dasher_at_store_time: null,
    //         dasher_eta_secs: null,
    //         order_protocol: 'TABLET',
    //         large_order: false,
    //         order_labels: [],
    //         is_viewed: false,
    //         item_count: 1,
    //         delivery_status: 'NEW',
    //         pickup_customer_status: null,
    //         customer_pickup_at_store_time: null,
    //         fulfillment_type: 'DASHER',
    //         order_experience: 'DOORDASH'
    //       },
    //       print_details: {
    //         delivery_uuid: '7889d4cb-cd0f-4d1a-a7f3-4d7f7c24a2fb',
    //         customer_name: 'Lakshmi P.',
    //         customer_name_localized: 'Lakshmi P',
    //         customer_phone: '',
    //         customer_address: null,
    //         dasher_instructions: null,
    //         net_sub_total_monetary_fields: null,
    //         promotion_title: '',
    //         sub_total: 399,
    //         total: 446,
    //         tax: 47,
    //         tips: 0,
    //         subTotal_monetary_fields: [Object],
    //         total_monetary_fields: [Object],
    //         tax_monetary_fields: [Object],
    //         tips_monetary_fields: null,
    //         pre_merchant_tips_monetary_fields: null,
    //         item_count: 1,
    //         print_statuses: [],
    //         order_status: 'NEW',
    //         estimated_pickup_time: '2021-04-28T16:53:15.07Z',
    //         print_order_item: [Array],
    //         hide_sales_tax: false,
    //         fulfillment_type: 'DASHER'
    //       }
    //     }
    //   ]

    // console.log(response.data.kitchen[0]);
    // {
    //     estimated_pickup_time: '2021-04-28T16:53:15.07Z',
    //     order: {
    //       delivery_uuid: '7889d4cb-cd0f-4d1a-a7f3-4d7f7c24a2fb',
    //       customer_name: 'Lakshmi P.',
    //       customer_name_localized: 'Lakshmi P',
    //       dasher_status: 'NOT_ASSIGNED',
    //       dasher_confirmed_at_sore_time: null,
    //       dasher_at_store_time: null,
    //       dasher_eta_secs: null,
    //       order_protocol: 'TABLET',
    //       large_order: false,
    //       order_labels: [],
    //       is_viewed: false,
    //       item_count: 1,
    //       delivery_status: 'NEW',
    //       pickup_customer_status: null,
    //       customer_pickup_at_store_time: null,
    //       fulfillment_type: 'DASHER',
    //       order_experience: 'DOORDASH'
    //     },
    //     print_details: {
    //       delivery_uuid: '7889d4cb-cd0f-4d1a-a7f3-4d7f7c24a2fb',
    //       customer_name: 'Lakshmi P.',
    //       customer_name_localized: 'Lakshmi P',
    //       customer_phone: '',
    //       customer_address: null,
    //       dasher_instructions: null,
    //       net_sub_total_monetary_fields: null,
    //       promotion_title: '',
    //       sub_total: 399,
    //       total: 446,
    //       tax: 47,
    //       tips: 0,
    //       subTotal_monetary_fields: { amount: 399, currency: 'USD', decimal_places: 2 },
    //       total_monetary_fields: { amount: 446, currency: 'USD', decimal_places: 2 },
    //       tax_monetary_fields: { amount: 47, currency: 'USD', decimal_places: 2 },
    //       tips_monetary_fields: null,
    //       pre_merchant_tips_monetary_fields: null,
    //       item_count: 1,
    //       print_statuses: [],
    //       order_status: 'NEW',
    //       estimated_pickup_time: '2021-04-28T16:53:15.07Z',
    //       print_order_item: [ [Object] ],
    //       hide_sales_tax: false,
    //       fulfillment_type: 'DASHER'
    //     }
    //   }