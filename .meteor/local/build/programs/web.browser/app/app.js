var require = meteorInstall({"imports":{"ui":{"body.html":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// imports/ui/body.html                                                                  //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
module.link("./template.body.js", { "*": "*+" });

///////////////////////////////////////////////////////////////////////////////////////////

},"template.body.js":function(){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// imports/ui/template.body.js                                                           //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //

Template.body.addContent((function() {
  var view = this;
  return HTML.DIV({
    class: "container"
  }, HTML.Raw("\n    <header>\n      <h1>Todo List</h1>\n    </header>\n \n    "), HTML.UL("\n      ", Blaze.Each(function() {
    return Spacebars.call(view.lookup("tasks"));
  }, function() {
    return [ "\n        ", Spacebars.include(view.lookupTemplate("task")), "\n      " ];
  }), "\n    "), "\n  ");
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("task");
Template["task"] = new Template("Template.task", (function() {
  var view = this;
  return HTML.LI(Blaze.View("lookup:text", function() {
    return Spacebars.mustache(view.lookup("text"));
  }));
}));

///////////////////////////////////////////////////////////////////////////////////////////

},"body.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// imports/ui/body.js                                                                    //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 0);
let Tasks;
module.link("../api/tasks.js", {
  Tasks(v) {
    Tasks = v;
  }

}, 1);
module.link("./body.html");
Template.body.helpers({
  tasks() {
    return Tasks.find({});
  }

});
///////////////////////////////////////////////////////////////////////////////////////////

}},"api":{"tasks.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// imports/api/tasks.js                                                                  //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////
//                                                                                       //
// client/main.js                                                                        //
//                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////
                                                                                         //
module.link("../imports/ui/body.js");
///////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});

var exports = require("/client/main.js");