module.exports = function(sails) {

    function wakeonlan() {

      var wol = require('wake-on-lan');
        sals.log("test wakeonlan");
      wol('A8:D3:F7:4C:21:6C', {
        ip: '192.168.1.121',
        port: 9
      }, function(error) {
        if(error) {
          // handle error
          return;
        }
      });
    }

    return {
        wakeonlan: wakeonlan
    };
};
