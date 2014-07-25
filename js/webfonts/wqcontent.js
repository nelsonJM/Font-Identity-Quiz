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
    + "'/>\n	</div>\n\n</div>\n<div id=\"answers\">\n	\n	<input type=\"radio\" name=\"answer\" value=\"";
  if (helper = helpers.choice1) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.choice1); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n	<label for=\"\">";
  if (helper = helpers.choice1) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.choice1); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\n	<input type=\"radio\" name=\"answer\" value=\"";
  if (helper = helpers.choice2) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.choice2); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n	<label for=\"\">";
  if (helper = helpers.choice2) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.choice2); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\n	<input type=\"radio\" name=\"answer\" value=\"";
  if (helper = helpers.choice3) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.choice3); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "\" />\n	<label for=\"\">";
  if (helper = helpers.choice3) { stack1 = helper.call(depth0, {hash:{},data:data}); }
  else { helper = (depth0 && depth0.choice3); stack1 = typeof helper === functionType ? helper.call(depth0, {hash:{},data:data}) : helper; }
  buffer += escapeExpression(stack1)
    + "</label>\n	\n</div>";
  return buffer;
  });
})();