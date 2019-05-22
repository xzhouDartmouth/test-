var require = meteorInstall({"imports":{"api":{"tasks.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// imports/api/tasks.js                                              //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.export({
  Tasks: () => Tasks
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Tasks = new Mongo.Collection('tasks');
///////////////////////////////////////////////////////////////////////

}}},"server":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// server/main.js                                                    //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
module.link("../imports/api/tasks.js");
Meteor.startup(() => {// code to run on server at startup
});
///////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/server/main.js");
//# sourceURL=meteor://💻app/app/app.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvaW1wb3J0cy9hcGkvdGFza3MuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3NlcnZlci9tYWluLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydCIsIlRhc2tzIiwiTW9uZ28iLCJsaW5rIiwidiIsIkNvbGxlY3Rpb24iLCJNZXRlb3IiLCJzdGFydHVwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBQSxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUFDQyxPQUFLLEVBQUMsTUFBSUE7QUFBWCxDQUFkO0FBQWlDLElBQUlDLEtBQUo7QUFBVUgsTUFBTSxDQUFDSSxJQUFQLENBQVksY0FBWixFQUEyQjtBQUFDRCxPQUFLLENBQUNFLENBQUQsRUFBRztBQUFDRixTQUFLLEdBQUNFLENBQU47QUFBUTs7QUFBbEIsQ0FBM0IsRUFBK0MsQ0FBL0M7QUFFcEMsTUFBTUgsS0FBSyxHQUFHLElBQUlDLEtBQUssQ0FBQ0csVUFBVixDQUFxQixPQUFyQixDQUFkLEM7Ozs7Ozs7Ozs7O0FDRlAsSUFBSUMsTUFBSjtBQUFXUCxNQUFNLENBQUNJLElBQVAsQ0FBWSxlQUFaLEVBQTRCO0FBQUNHLFFBQU0sQ0FBQ0YsQ0FBRCxFQUFHO0FBQUNFLFVBQU0sR0FBQ0YsQ0FBUDtBQUFTOztBQUFwQixDQUE1QixFQUFrRCxDQUFsRDtBQUFxREwsTUFBTSxDQUFDSSxJQUFQLENBQVkseUJBQVo7QUFHaEVHLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlLE1BQU0sQ0FDbkI7QUFDRCxDQUZELEUiLCJmaWxlIjoiL2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbiBcbmV4cG9ydCBjb25zdCBUYXNrcyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCd0YXNrcycpOyIsImltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0ICcuLi9pbXBvcnRzL2FwaS90YXNrcy5qcyc7XG5cbk1ldGVvci5zdGFydHVwKCgpID0+IHtcbiAgLy8gY29kZSB0byBydW4gb24gc2VydmVyIGF0IHN0YXJ0dXBcbn0pO1xuXG4iXX0=
