const fs = require('fs')
const axios = require('axios')

// Get orders from doordash dashboard every 2 minutes
let timeOut = 1000*30;




// var config = {
//     method: 'post',
//     url: 'https://merchant-mobile-bff.doordash.com/v2/confirm_order/7889d4cb-cd0f-4d1a-a7f3-4d7f7c24a2fb',
//     headers: { 
//       'Authorization': 'JWT eyJhbGciOiJIUzI1NiJ9.eyJvcmlnX2lhdCI6MTYxOTUzMzkyNSwiZXhwIjoxNjE5NzkzMTI1LCJ1c2VyIjp7ImF1dGhfdmVyc2lvbiI6NCwiaXNfc3RhZmYiOmZhbHNlLCJpZCI6MjkxNjYxMjQ5LCJlbWFpbCI6ImRlc2ljaG9wc2luY0BnbWFpbC5jb20ifSwiY2lkIjoxNjQ4MTcxODU4MTAxNzg0NzY1fQ.8zNszrOl9uyB9wrHU8_Tzhud55O-jFb-D2YdWAem2Eg', 
//       'Host': '', 
//       'Cookie': '__cf_bm=bac9f8a949de80d52e1d3695174331d15e3a08e5-1619533971-1800-ATltBx+BQz+LxMfzdWdtto+pH2rna50QUfRMIDySmx84Od2SCE0xIx7irX0sLZ5HBYo1g5s9+uZ94okguVSL3tk=; __cfduid=d17db63d38a23ad4618590eee98d1a5f21619533971'
//     },
//     data : {
//       prep_time : 15
//     }
//   };
      
//       axios(config)
//       .then(function (response) {
//           // let jsondata=JSON.parse(response.data.payload)
//           console.log(response.data);
//       })
//       .catch(function (error) {
//         console.log(error);
//       });

    //   console.log(response.data);
    //   { delivery_uuid: '7889d4cb-cd0f-4d1a-a7f3-4d7f7c24a2fb' }


    // var config = {
    //     method: 'post',
    //     url: 'https://merchant-mobile-bff.doordash.com/v2/confirm_ready_for_pickup/7889d4cb-cd0f-4d1a-a7f3-4d7f7c24a2fb',
    //     headers: { 
    //       'Authorization': 'JWT eyJhbGciOiJIUzI1NiJ9.eyJvcmlnX2lhdCI6MTYxOTUzMzkyNSwiZXhwIjoxNjE5NzkzMTI1LCJ1c2VyIjp7ImF1dGhfdmVyc2lvbiI6NCwiaXNfc3RhZmYiOmZhbHNlLCJpZCI6MjkxNjYxMjQ5LCJlbWFpbCI6ImRlc2ljaG9wc2luY0BnbWFpbC5jb20ifSwiY2lkIjoxNjQ4MTcxODU4MTAxNzg0NzY1fQ.8zNszrOl9uyB9wrHU8_Tzhud55O-jFb-D2YdWAem2Eg', 
    //       'Host': '', 
    //       'Cookie': '__cf_bm=bac9f8a949de80d52e1d3695174331d15e3a08e5-1619533971-1800-ATltBx+BQz+LxMfzdWdtto+pH2rna50QUfRMIDySmx84Od2SCE0xIx7irX0sLZ5HBYo1g5s9+uZ94okguVSL3tk=; __cfduid=d17db63d38a23ad4618590eee98d1a5f21619533971'
    //     }
    //   };
          
    //       axios(config)
    //       .then(function (response) {
    //           // let jsondata=JSON.parse(response.data.payload)
    //             console.log(response.data);
    //         //   { delivery_uuid: '7889d4cb-cd0f-4d1a-a7f3-4d7f7c24a2fb' }
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });

    var config = {
        method: 'post',
        url: 'https://merchant-mobile-bff.doordash.com/v2/confirm_picked_up/7889d4cb-cd0f-4d1a-a7f3-4d7f7c24a2fb',
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
            //   { delivery_uuid: '7889d4cb-cd0f-4d1a-a7f3-4d7f7c24a2fb' }
          })
          .catch(function (error) {
            console.log(error);
          });