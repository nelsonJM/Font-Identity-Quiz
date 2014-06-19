EventUtil.addHandler(window, "load", function() {

	


	var
	// allQuestions = [question1, question2, question3],
	qLength = 0;
	i=0,
	c=0,
	score=0,
	yourChoices = [],

	nextBtn = document.getElementById("qbtn"),
	backBtn = document.getElementById("bbtn"),

	grabQuestions = function() {
		$.getJSON('js/questions.json', function(data) {
			console.log(data);
			getStarted(data);
			
		});
	},

	getStarted = function(jsonData) {
		window.data = jsonData;
		qLength = data.questions.length;
		loadQuestion();
		loadChoiceInputs();
		loadChoices();
	},


	loadQuestion = function() {
		document.getElementById("question").innerHTML = "<p data-question="+data.questions.indexOf(data.questions[i])+">" + data.questions[i].question + "</p>";
		
	},

	loadChoiceInputs = function() {
		var qchoices = data.questions[i].choices;
		// var qchoices = allQuestions[i].choices;
		var len = qchoices.length;

		for (var c=0; c<len; c++) {
			var qChoice = document.createElement("input");
				qChoice.type = "radio";
				qChoice.name = "pick";
				qChoice.value = qchoices[c];
			var qChoiceLabel = document.createElement("label");

			if (yourChoices[i] && qchoices[c] === yourChoices[i]) {
				qChoice.checked = true;

			} else {
				// do nothing
				
			}

			document.getElementById("answers").appendChild(qChoice);
			document.getElementById("answers").appendChild(qChoiceLabel);
		}

	},

	removeInputs = function() {
		var answers = document.getElementById("answers");
		while (answers.firstChild) {
			answers.removeChild(answers.firstChild);
		}
	},

	loadChoices = function(){
		var currentChoices = document.querySelectorAll('#answers input');
		var cLabels = document.querySelectorAll('#answers label');
		var len = currentChoices.length;

		for (var c=0; c<len; c++) {
			// currentChoices[c].value = allQuestions[i].choices[c];
			cLabels[c].innerHTML = data.questions[i].choices[c];
		}
	},

	finalPage = function() {
		
		
		document.getElementById("question").innerHTML = "Thanks for playing. Your Score is: ";
		document.getElementById("answers").innerHTML = score;
		document.getElementById("controls").removeChild(nextBtn);
	},

	fadeOut = function() {
		var question = document.getElementById("question");
		var currentChoices = document.querySelectorAll('#answers input');
		var cLabels = document.querySelectorAll('#answers label');

		$(question).find('p').addClass("fadeOut");
		$(currentChoices).addClass("fadeOut");
		$(cLabels).addClass("fadeOut");
	},

	allTogether = function() {
		loadQuestion();
		removeInputs();
		loadChoiceInputs();
		loadChoices();
	};

	EventUtil.addHandler(backBtn, "click", function(){
		
		i--;
		console.log(i);
		loadQuestion();
		removeInputs();
		loadChoiceInputs();
		loadChoices();
	});
	

	EventUtil.addHandler(nextBtn, "click", function(){

		var currentChoices = document.querySelectorAll('#answers input');
		var len = currentChoices.length;
		var notAnswered = 1;
		var theAnswer = data.questions[i].correctAnswer;
		
		for (var c=0; c<len; c++){
				if (currentChoices[c].checked) {

					if ( c === theAnswer && !yourChoices[i] && data.questions[i] != data.questions[qLength - 1]) {

						yourChoices[i] = currentChoices[c].value;
						console.log(yourChoices[i]);
						alert("yay");
						score++;
						i++;

						fadeOut();
						// setTimeout(loadQuestion, 1000);
						// setTimeout(removeInputs, 1000);
						// setTimeout(loadChoiceInputs, 1000);
						// setTimeout(loadChoices, 1000);

						setTimeout(allTogether, 500);
					
					} else if ( c === theAnswer && yourChoices[i] && yourChoices[i] === currentChoices[c].value && data.questions[i] != data.questions[qLength - 1]) {

						yourChoices[i] = currentChoices[c].value;
						
						alert("stickin' to your guns, eh?");
						i++;

						fadeOut();
						// setTimeout(loadQuestion, 1000);
						// setTimeout(removeInputs, 1000);
						// setTimeout(loadChoiceInputs, 1000);
						// setTimeout(loadChoices, 1000);

						setTimeout(allTogether, 500);

					} else if ( c === theAnswer && yourChoices[i] && yourChoices[i] != data.questions[i].choices[theAnswer] && data.questions[i] != data.questions[qLength - 1]) {

						yourChoices[i] = currentChoices[c].value;
						
						alert("change is good");
						score++;
						i++;

						fadeOut();
						// setTimeout(loadQuestion, 1000);
						// setTimeout(removeInputs, 1000);
						// setTimeout(loadChoiceInputs, 1000);
						// setTimeout(loadChoices, 1000);

						setTimeout(allTogether, 500);

					} else if (c === theAnswer && data.questions[i] === data.questions[qLength - 1]) {

						yourChoices[i] = currentChoices[c].value;

						alert("all done");
						score++;
						// removeQuestion();
						// removeInputs();
						fadeOut();
						setTimeout(removeInputs, 500);
						setTimeout(finalPage, 500);

					} else if (c != theAnswer && !yourChoices[i] && data.questions[i] === data.questions[qLength - 1]) {

						yourChoices[i] = currentChoices[c].value;
						
						alert("all done");
						

						fadeOut();
						setTimeout(removeInputs, 500);
						setTimeout(finalPage, 500);

						
					} else if (c != theAnswer && yourChoices[i] && yourChoices[i] != data.questions[i].choices[theAnswer] && data.questions[i] != data.questions[qLength - 1]) {
						
						yourChoices[i] = currentChoices[c].value;
						
						alert("hmm");

						
						i++;

						fadeOut();
						// setTimeout(loadQuestion, 1000);
						// setTimeout(removeInputs, 1000);
						// setTimeout(loadChoiceInputs, 1000);
						// setTimeout(loadChoices, 1000);

						setTimeout(allTogether, 500);

					} else if (c != theAnswer && yourChoices[i] && yourChoices[i] === data.questions[i].choices[theAnswer] && data.questions[i] != data.questions[qLength - 1]) {

						yourChoices[i] = currentChoices[c].value;
						
						alert("too bad you changed your answer");
						score--;
						
						i++;

						fadeOut();
						// setTimeout(loadQuestion, 1000);
						// setTimeout(removeInputs, 1000);
						// setTimeout(loadChoiceInputs, 1000);
						// setTimeout(loadChoices, 1000);

						setTimeout(allTogether, 500);

					} else if (c != theAnswer && !yourChoices[i] && data.questions[i] != data.questions[qLength - 1]) {

						yourChoices[i] = currentChoices[c].value;
						
						alert("doh!");
					
						
						i++;

						fadeOut();
						// setTimeout(loadQuestion, 1000);
						// setTimeout(removeInputs, 1000);
						// setTimeout(loadChoiceInputs, 1000);
						// setTimeout(loadChoices, 1000);

						setTimeout(allTogether, 500);
						
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