module.exports = function(sails) {

    function wakeonlan() {

      var wol = require('wake-on-lan');

      wol('A0:D3:C1:4B:79:BB', {
        ip: '192.168.1.75',
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
