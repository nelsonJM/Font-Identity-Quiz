(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['answers'] = template({"1":function(depth0,helpers,partials,data) {
  var stack1, helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing, buffer = "		<div class=\"review\" style=\"overflow: hidden; margin-bottom: 2em;\">\n			<div class=\"qa\">\n				<div class=\"answer-name\" style=\"color: rgb(5, 113, 197); font-size: 1.5em; font-weight:bold; padding:5px 15px;\">\n					<span class=\"info-text\">Font name:</span> "
    + escapeExpression(lambda((depth0 != null ? depth0.correctAnswerName : depth0), depth0))
    + "\n				</div>\n				<div class=\"question\">\n						\n					<div data-question=\""
    + escapeExpression(lambda((depth0 != null ? depth0.questionIndex : depth0), depth0))
    + "\">\n						<img src='../images/system/question"
    + escapeExpression(((helper = (helper = helpers.questionIndex || (depth0 != null ? depth0.questionIndex : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"questionIndex","hash":{},"data":data}) : helper)))
    + ".png'/>\n					</div>\n					\n				</div>\n				<div class=\"response-answer\">\n					<div class=\"answers\" style=\"overflow: hidden;\">\n						<div style=\"padding: 5px 15px; font-weight:bold; float:left;\">\n							<span class=\"info-text\" style=\"font-size: 16px;\">You answered...</span>\n						</div>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.options : depth0), {"name":"each","hash":{},"fn":this.program(2, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n					</div>\n					\n				</div>\n				\n				\n			</div>\n			\n		</div>\n";
},"2":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "						<div class=\"answer-choices\" data-answer=\""
    + escapeExpression(((helper = (helper = helpers.isCorrect || (depth0 != null ? depth0.isCorrect : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"isCorrect","hash":{},"data":data}) : helper)))
    + "\" data-choice=\""
    + escapeExpression(((helper = (helper = helpers.checked || (depth0 != null ? depth0.checked : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"checked","hash":{},"data":data}) : helper)))
    + "\" style=\"float: left;\">\n";
  stack1 = helpers['if'].call(depth0, (depth0 != null ? depth0.checked : depth0), {"name":"if","hash":{},"fn":this.program(3, data),"inverse":this.program(5, data),"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "							<label for=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</label>\n						</div>\n";
},"3":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "								<input type=\"radio\" id=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + escapeExpression(((helper = (helper = helpers.checked || (depth0 != null ? depth0.checked : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"checked","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + escapeExpression(lambda((depth0 != null ? depth0.questionIndex : depth0), depth0))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" checked=\"checked\" />\n";
},"5":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, lambda=this.lambda;
  return "								<input type=\"radio\" id=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" class=\""
    + escapeExpression(((helper = (helper = helpers.checked || (depth0 != null ? depth0.checked : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"checked","hash":{},"data":data}) : helper)))
    + "\" name=\""
    + escapeExpression(lambda((depth0 != null ? depth0.questionIndex : depth0), depth0))
    + "\" value=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" disabled/>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<div class=\"row\" style=\"overflow: hidden;\">\n	<div class=\"col-1\" style=\"width: 95%; margin: 0 auto;\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.questions : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "	</div>\n</div>";
},"useData":true});
})();