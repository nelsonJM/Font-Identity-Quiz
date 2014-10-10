(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['nextstep'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "<div class=\"nextSteps\">\n	<p>\n		Review your answers below, <a href=\"/Font-Identity-Quiz/"
    + escapeExpression(lambda((depth0 != null ? depth0.quizType : depth0), depth0))
    + "-quiz/\" class=\"dotted\">replay</a>, or <a href=\"/Font-Identity-Quiz/\" class=\"dotted\">try another quiz</a>.\n	</p>\n</div>	";
},"useData":true});
})();