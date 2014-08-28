(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['score'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"score\">\n<h2>You're score is:</h2>\n<br/>\n<p>"
    + escapeExpression(((stack1 = (depth0 && depth0.score)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n</div>";
  return buffer;
  });
})();