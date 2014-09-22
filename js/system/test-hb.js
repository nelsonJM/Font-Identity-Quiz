var source = $("#whatNowEnd").html();
		var template = Handlebars.compile(source);
		var context = {quiz: "system", nextQuiz: "webfonts"};
		var html = template(context);
		$("footer").html(html);