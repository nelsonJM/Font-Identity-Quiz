(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['next_step'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"nextSteps\" style=\"text-align: center;\">\n	<p>\n		<a href=\"/"
    + escapeExpression(((helper = (helper = helpers.questionType || (depth0 != null ? depth0.questionType : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"questionType","hash":{},"data":data}) : helper)))
    + "-quiz\">Replay</a> | <a href=\"/\">Try another quiz</a> | <a href=\"#top\">Go to Top</a>\n	</p>\n</div>	";
},"useData":true});
})();