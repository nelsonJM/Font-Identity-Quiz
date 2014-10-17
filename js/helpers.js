Handlebars.registerHelper('noteboxes', function(items, options) {
	  var out = "<div class='answer-note'>";

	  for(var i=0, l=items.length; i<l; i++) {
	    out = out + "<h3>" + options.fn(items[i].letter) + "</h3>";
	  }

	  return out + "</div>";
	});