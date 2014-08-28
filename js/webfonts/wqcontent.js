(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['wqcontent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div id=\"question\">\n				\n	<div data-question=\"";
  if (helper = helpers.questionIndex) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.questionIndex); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\">\n		<img src='";
  if (helper = helpers.src) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.src); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "'/>\n	</div>\n\n</div>\n<div id=\"answers\">\n	\n	<input type=\"radio\" name=\"answer\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n	<label for=\"\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</label>\n	<input type=\"radio\" name=\"answer\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1[1])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n	<label for=\"\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1[1])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</label>\n	<input type=\"radio\" name=\"answer\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1[2])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" />\n	<label for=\"\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.options)),stack1 == null || stack1 === false ? stack1 : stack1[2])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</label>\n	\n</div>";
  return buffer;
  });
})();