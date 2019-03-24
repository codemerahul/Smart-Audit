/**
 * Created by Rahul Singh   - The Index of Routes
 */

(function() {
  var childProcess = require("child_process");
  var oldSpawn = childProcess.spawn;
  function mySpawn() {
      console.log('spawn called');
      console.log(arguments);
      var result = oldSpawn.apply(this, arguments);
      return result;
  }
  childProcess.spawn = mySpawn;
})();

module.exports = function (app) {

  // The route path
  app.use('/api/v1', require('./routes/apiv1'));

}
