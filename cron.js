

const fs = require('fs')
const axios = require('axios')

// Get orders from doordash dashboard every 2 minutes
let timeOut = 1000;



setInterval(async function () {

    //get token from db for store 
    let store_id = 1108572 // from db

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
      })
      .catch(function (error) {
        console.log(error);
      });


}, timeOut)