
const fs = require('fs')
const axios = require('axios')

let timeOut=1000*60*60*24
// login everyday and get auth token for doordash api



setTimeout(function () {
    //get these credentials from db
    let creds = '{"credentials":{"password":"qRfr7CDPYTQNCF7","email":"desichopsinc@gmail.com"}}';


    try {
        let config = {
          method: 'post',
          url: 'https://identity.doordash.com/api/v1/auth/token',
          headers: {
            'Authorization': 'Ft98fOkQwIcAAAAAAAAAANmMvfQvWUg8AAAAAAAAAACimJeZMkWvEwAAAAAAAAAA',
            'User-Agent': 'DoordashMerchant/2.61.1 (Android 8.1.0; unknown Custom Phone)',
            'X-Device-Id': '418a448c7dd7a5be',
            'X-Correlation-Id': '57102645-e08d-45cc-a6a6-a5f8c5b1ec00',
            'Content-Type': 'application/json; charset=UTF-8',
            'Content-Length': '76',
            'Host': 'identity.doordash.com',
            'Connection': 'close',
            'Accept-Encoding': 'gzip, deflate',
            'X-NewRelic-ID': 'XAUEWF5SGwEJV1ZRDgEE',
            'Cookie': 'dd_device_id_2=dx_a80138056180477d91faf475d13923f1; dd_device_id=dx_391c52cf8cea48e599b897eb990490fe; __cfduid=d4adcb8a9901b0958080b468449805fb11612432482; __cfduid=d0097d7c5bc2bd15284c899bfc8ca504b1613043461; __cf_bm=f81ea22a3b36afdc9d77b69f4ee57e057addfe98-1613114189-1800-Adi13lfPwviWKglP4sxyduNEdy3g03cxHZXAw7pWXvAdOYn0nrM54rYnA25DmrA/p4U6Nd/2GP2Y2eUHb9/aulE='
          },
          data: creds
        };
    
        let response = await axios(config)
        let auth_token= response.data.token.token
        // save  token to database
      } catch (error) {
        console.log(error);
      }

    // call doordash auth api >> get merchant token > send to store db

}, timeOut)






