 var axios = require('axios');

 const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=9362d7bc95c06c335ba31cc4a0a20f8d&units=imperial';

 module.exports = {
     getTemp : function(location){
         var encodedLocation = encodeURIComponent(location);
         var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

         return axios.get(requestURL).then(             
             function(res){
                 
                if(res.data.cod && res.data.message){
                    throw new Error(res.data.message);
                } else{
                    return res.data.main.temp;
                }                    
             },
             function(res){                                  
                 throw new Error(res.data.message);
             }
         );
     }
 }