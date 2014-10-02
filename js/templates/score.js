(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['score'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"score\">\n	<h1>"
    + escapeExpression(lambda((depth0 != null ? depth0.scoreCommentary : depth0), depth0))
    + "</h1>\n	<h2>You answered "
    + escapeExpression(lambda((depth0 != null ? depth0.score : depth0), depth0))
    + " out of "
    + escapeExpression(lambda(((stack1 = (depth0 != null ? depth0.yourChoices : depth0)) != null ? stack1.length : stack1), depth0))
    + " correct.</h2>\n</div>";
},"useData":true});
})();