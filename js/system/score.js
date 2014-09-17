(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['score'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"score\" style=\"text-align: center;\">\n<h1>"
    + escapeExpression(((stack1 = (depth0 && depth0.scoreCommentary)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n<h2>You answered "
    + escapeExpression(((stack1 = (depth0 && depth0.score)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " out of "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.yourChoices)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " correct.</h2>\n</div>\n<div class=\"nextSteps\" style=\"text-align: center;>\n<p><a href=\"/system-quiz\">Replay</a>, <a href=\"/webfont-quiz\">try the webfonts quiz</a>, or review your answers below.</p>\n</div>";
  return buffer;
  });
})();