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

	finalPage = function() {
		var yourAnswers = JSON.stringify(yourChoices);
		console.log(yourAnswers);
		document.getElementById("question").innerHTML = "Thanks for playing. Your Score is: ";
		document.getElementById("answers").innerHTML = score;
		document.getElementById("controls").removeChild(nextBtn);
		// replay?
		// pick another quiz?
	},

	fadeOut = function() {
		var question = document.getElementById("question");
		var currentChoices = document.querySelectorAll('#answers');
		

		$(question).addClass("fadeOut");
		$(currentChoices).addClass("fadeOut");
	},

	EventUtil.addHandler(backBtn, "click", function(){
		
		i--;
		console.log(i);
		loadQuestion();
	});
	
	EventUtil.addHandler(nextBtn, "click", function(){

		var currentChoices = document.querySelectorAll('#answers input');
		var len = currentChoices.length;
		var notAnswered = 1;
		var theAnswer = data.questions[i].correctAnswer;
		
		for (var c=0; c<len; c++){
				if (currentChoices[c].checked) {

					if ( c === theAnswer && !yourChoices[i] && data.questions[i] != data.questions[qLength - 1]) {

						yourChoices[i] = c;
						
						console.log(yourChoices[i]);
						// alert("yay");
						score++;
						i++;

						fadeOut();

						setTimeout(loadQuestion, 500);
					
					} else if ( c === theAnswer && yourChoices[i] && yourChoices[i] === c && data.questions[i] != data.questions[qLength - 1]) {

						yourChoices[i] = c;
						
						// alert("stickin' to your guns, eh?");
						i++;

						fadeOut();

						setTimeout(loadQuestion, 500);

					} else if ( c === theAnswer && yourChoices[i] && yourChoices[i] != c && data.questions[i] != data.questions[qLength - 1]) {

						yourChoices[i] = c;
						
						// alert("change is good");

						score++;
						i++;

						fadeOut();

						setTimeout(loadQuestion, 500);

					} else if (c === theAnswer && data.questions[i] === data.questions[qLength - 1]) {

						yourChoices[i] = c;

						// alert("all done");
						score++;
		
						fadeOut();
						
						setTimeout(finalPage, 500);

					} else if (c != theAnswer && !yourChoices[i] && data.questions[i] === data.questions[qLength - 1]) {

						yourChoices[i] = c;
						
						// alert("all done");
						
						fadeOut();
						setTimeout(finalPage, 500);

						
					} else if (c != theAnswer && yourChoices[i] && yourChoices[i] != theAnswer && data.questions[i] != data.questions[qLength - 1]) {
						
						yourChoices[i] = c;
						
						// alert("hmm");

// ended here with the c stuff
						
						i++;

						fadeOut();
	
						setTimeout(loadQuestion, 500);

					} else if (c != theAnswer && yourChoices[i] && yourChoices[i] === theAnswer && data.questions[i] != data.questions[qLength - 1]) {

						yourChoices[i] = c;
						
						// alert("too bad you changed your answer");
						score--;
						
						i++;

						fadeOut();

						setTimeout(loadQuestion, 500);

					} else if (c != theAnswer && !yourChoices[i] && data.questions[i] != data.questions[qLength - 1]) {

						yourChoices[i] = c;
						
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