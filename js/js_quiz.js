EventUtil.addHandler(window, "load", function() {
	
	var
	qLength = 0;
	i=0,
	c=0,
	score=0,
	yourChoices = [],
	scoreCommentary="",

	nextBtn = document.getElementById("qbtn"),
	backBtn = document.getElementById("bbtn"),

	grabQuestions = function() {
		$.getJSON('data/questions.json', function(data) {
			getStarted(data);
		});
	},

	getStarted = function(jsonData) {
		window.data = jsonData;
		qLength = data.questions.length;
		loadQuestion();
	},

	loadQuestion = function(jsonData) {
		
		var renderer = Handlebars.templates["qcontent"];
		var result = renderer(data.questions[i]);
		$("#container").html(result);
	},

	finalJSON = function() {
		var answerJSON = data;

		for (var i = 0; i < answerJSON.questions.length; i++) {
			for (var j = 0; j < answerJSON.questions[i].options.length; j++) {
				if (answerJSON.questions[i].options[j].name == yourChoices[i].answerName) {
					answerJSON.questions[i].options[j].checked = true;
				}
			}
			
		}
		console.log(answerJSON);
		finalPage(answerJSON);
	},

	finalPage = function(feedMe) {
		var quizData = feedMe,
			renderer = Handlebars.templates["answers"],
			scoreRenderer = Handlebars.templates["score"],
			nextStepR = Handlebars.templates["nextstep"],

			result = renderer(quizData),
			ns = nextStepR(quizData),
			score = scoreRenderer(window);
		
		$("body").addClass("final-page");

		$("#container").html(result);

		$(score).insertAfter("#quiz");
		$(ns).insertAfter(".score");
		
		removeControls();
	},

	fadeOut = function() {
		var question = $("#question");
		var currentChoices = $('#answers');
		

		$(question).addClass("fadeOut");
		$(currentChoices).addClass("fadeOut");
	},

	prevAnswer = function() {
		var currentChoices = document.querySelectorAll('#answers input');
		var prevSelection = $(currentChoices[yourChoices[i].answerIndex]);
		console.log(prevSelection);
		$(prevSelection).attr('checked', true);
	},

	removeControls = function() {
		$('#controls').remove();
	},

	setScoreCommentary = function() {
		var div = score / yourChoices.length;
		var rem = yourChoices.length % score;
		switch (div) {
			case 1:
				scoreCommentary = "Respect.";
			break;
			case 0.8:
				scoreCommentary = "Good job!";
			break;
			case 0.6:
				scoreCommentary = "Keep at it.";
			break;
			case 0.4:
				scoreCommentary = "Eh, you'll get better.";
			break;
			case 0.2:
				scoreCommentary = "Hang in there.";
			break;
			default:
				scoreCommentary = "Hey, is that a bird?";
			break;
		}
	},

	EventUtil.addHandler(backBtn, "click", function(){
		
		i--;
		console.log(i);
		if (i === -1) {
			i = 0;
		}
		console.log(i);
		loadQuestion();
		prevAnswer();
	});
	
	EventUtil.addHandler(nextBtn, "click", function(){

		var currentChoices = document.querySelectorAll('#answers input');
		var len = currentChoices.length;
		var notAnswered = 1;
		var theAnswer = data.questions[i].correctAnswer;
		
		for (var c=0; c<len; c++){
				if (currentChoices[c].checked) {

					if ( c === theAnswer && !yourChoices[i] && data.questions[i] != data.questions[qLength - 1]) {

						yourChoices[i] = {
							answerIndex: c,
							answerName: currentChoices[c].value
						};

						console.log(yourChoices[i]);
						// alert("yay");
						score++;
						i++;

						fadeOut();

						setTimeout(loadQuestion, 500);
					
					} else if ( c === theAnswer && yourChoices[i] && yourChoices[i].answerIndex === c && data.questions[i] != data.questions[qLength - 1]) {

						yourChoices[i] = {
							answerIndex: c,
							answerName: currentChoices[c].value
						};
						
						// alert("stickin' to your guns, eh?");
						i++;

						fadeOut();

						setTimeout(loadQuestion, 500);

					} else if ( c === theAnswer && yourChoices[i] && yourChoices[i].answerIndex != c && data.questions[i] != data.questions[qLength - 1]) {

						yourChoices[i] = {
							answerIndex: c,
							answerName: currentChoices[c].value
						};
						
						// alert("change is good");

						score++;
						i++;

						fadeOut();

						setTimeout(loadQuestion, 500);

					} else if (c === theAnswer && data.questions[i] === data.questions[qLength - 1]) {

						yourChoices[i] = {
							answerIndex: c,
							answerName: currentChoices[c].value
						};

						// alert("all done");
						score++;
		
						fadeOut();
						
						// setTimeout(finalPage, 500);
						setScoreCommentary();
						finalJSON();

					} else if (c != theAnswer && !yourChoices[i] && data.questions[i] === data.questions[qLength - 1]) {

						yourChoices[i] = {
							answerIndex: c,
							answerName: currentChoices[c].value
						};
						
						// alert("all done");
						
						fadeOut();
						// setTimeout(finalPage, 500);
						setScoreCommentary();
						finalJSON();
						
					} else if (c != theAnswer && yourChoices[i] && yourChoices[i].answerIndex != theAnswer && data.questions[i] != data.questions[qLength - 1]) {
						
						yourChoices[i] = {
							answerIndex: c,
							answerName: currentChoices[c].value
						};
						
						// alert("hmm");

// ended here with the c stuff
						
						i++;

						fadeOut();
	
						setTimeout(loadQuestion, 500);

					} else if (c != theAnswer && yourChoices[i] && yourChoices[i].answerIndex === theAnswer && data.questions[i] != data.questions[qLength - 1]) {

						yourChoices[i] = {
							answerIndex: c,
							answerName: currentChoices[c].value
						};
						
						// alert("too bad you changed your answer");
						score--;
						
						i++;

						fadeOut();

						setTimeout(loadQuestion, 500);

					} else if (c != theAnswer && !yourChoices[i] && data.questions[i] != data.questions[qLength - 1]) {

						yourChoices[i] = {
							answerIndex: c,
							answerName: currentChoices[c].value
						};
						
						// alert("doh!");
					
						
						i++;

						fadeOut();

						setTimeout(loadQuestion, 500);
						
					}
				} else if(notAnswered === len) {
					alert('hold on partner. answer the question');
					return false;
				} else {
					notAnswered++;
					
				}
				
		}
		
	});

grabQuestions();

});