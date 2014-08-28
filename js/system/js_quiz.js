EventUtil.addHandler(window, "load", function() {
	
	var
	qLength = 0;
	i=0,
	c=0,
	score=0,
	yourChoices = [],

	nextBtn = document.getElementById("qbtn"),
	backBtn = document.getElementById("bbtn"),

	welcomeMsg = function() {
		var loggedInUser = CookieUtil.get("name");
		
		if (loggedInUser) {
			document.getElementById("login").innerHTML = "Player, "+loggedInUser+ ".";
		} else {
			document.getElementById("login").innerHTML = "Guest";
		}
	},

	grabQuestions = function() {
		$.getJSON('../js/system/questions.json', function(data) {
			console.log(data);
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
					answerJSON.questions[i].options[j].checked = "true";
				}
			}
			
		}
		console.log(answerJSON);
		finalPage(answerJSON);
	},

	finalPage = function(feedMe) {

		var renderer = Handlebars.templates["answers"];
		var scoreRenderer = Handlebars.templates["score"];

		var result = renderer(feedMe);
		var score = scoreRenderer(window);

		$("#container").html(result);
		$("#scorebox").html(score);

	},

	fadeOut = function() {
		var question = document.getElementById("question");
		var currentChoices = document.querySelectorAll('#answers');
		

		$(question).addClass("fadeOut");
		$(currentChoices).addClass("fadeOut");
	},

	prevAnswer = function() {
		var currentChoices = document.querySelectorAll('#answers input');
		var prevSelection = $(currentChoices[yourChoices[i].answerIndex]);
		console.log(prevSelection);
		$(prevSelection).attr('checked', true);
	},

	EventUtil.addHandler(backBtn, "click", function(){
		
		i--;
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
						finalJSON();

					} else if (c != theAnswer && !yourChoices[i] && data.questions[i] === data.questions[qLength - 1]) {

						yourChoices[i] = {
							answerIndex: c,
							answerName: currentChoices[c].value
						};
						
						// alert("all done");
						
						fadeOut();
						// setTimeout(finalPage, 500);
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

welcomeMsg();
grabQuestions();
	

});