EventUtil.addHandler(window, "load", function() {

	var question1 = {
		question: "What's Josh's favorite color?",
		choices: ["red", "green", "blue"],
		correctAnswer: 1
	},

	question2 = {
		question: "What's Josh's favorite animal?",
		choices: ["dog", "rabbit", "cat"],
		correctAnswer: 2
	},

	question3 = {
		question: "What's Josh's favorite food?",
		choices: ["enchiladas", "green chile", "blue cheese dressing"],
		correctAnswer: 0
	},

	allQuestions = [question1, question2, question3],

	qLength = allQuestions.length,

	i=0,
	c=0,
	score=0,

	yourChoices = [],

	nextBtn = document.getElementById("qbtn"),
	backBtn = document.getElementById("bbtn"),

	loadQuestion = function() {
		document.getElementById("question").innerHTML = "<p data-question="+allQuestions.indexOf(allQuestions[i])+">" + allQuestions[i].question + "</p>";
		
	},

	// removeQuestion = function() {
	// 	var question = document.getElementById("question");
	// 	$(question).find('p').addClass("fadeOut");
	// 	while (question.firstChild) {
	// 		question.removeChild(question.firstChild);
	// 	}
	// },

	loadChoiceInputs = function() {
		var qchoices = allQuestions[i].choices;
		var len = qchoices.length;

		for (var c=0; c<len; c++) {
			var qChoice = document.createElement("input");
				qChoice.type = "radio";
				qChoice.name = "pick";
				qChoice.value = allQuestions[i].choices[c];
			var qChoiceLabel = document.createElement("label");

			if (allQuestions[i].choices[c] === yourChoices[i]) {
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
			cLabels[c].innerHTML = allQuestions[i].choices[c];
		}
	},

	finalPage = function() {
		
		
		document.getElementById("question").innerHTML = "Thanks for playing. Your Score is: ";
		document.getElementById("answers").innerHTML = score;
		document.getElementById("controls").removeChild(nextBtn);
	};

	fadeOut = function() {
		var question = document.getElementById("question");
		var currentChoices = document.querySelectorAll('#answers input');
		var cLabels = document.querySelectorAll('#answers label');

		$(question).find('p').addClass("fadeOut");
		$(currentChoices).addClass("fadeOut");
		$(cLabels).addClass("fadeOut");
	};

	EventUtil.addHandler(backBtn, "click", function(){
		
		i--;
		loadQuestion();
		removeInputs();
		loadChoiceInputs();
		loadChoices();
	});
	

	EventUtil.addHandler(nextBtn, "click", function(){

		var currentChoices = document.querySelectorAll('#answers input');
		var len = currentChoices.length;
		var notAnswered = 1;
		
		for (var c=0; c<len; c++){
				if (currentChoices[c].checked) {
					
					if (c === allQuestions[i].correctAnswer && allQuestions[i] != allQuestions[qLength - 1]) {

						yourChoices[i] = currentChoices[c].value;
						
						alert("yay");
						score++;
						i++;

						fadeOut();
						setTimeout(loadQuestion, 1000);
						setTimeout(removeInputs, 1000);
						setTimeout(loadChoiceInputs, 1000);
						setTimeout(loadChoices, 1000);
					} else if (c === allQuestions[i].correctAnswer && allQuestions[i] === allQuestions[qLength - 1]) {

						yourChoices[i] = currentChoices[c].value;

						alert("all done");
						score++;
						// removeQuestion();
						// removeInputs();
						fadeOut();
						setTimeout(removeInputs, 1000);
						setTimeout(finalPage, 1000);

					} else if (c != allQuestions[i].correctAnswer && allQuestions[i] === allQuestions[qLength - 1]) {

						yourChoices[i] = currentChoices[c].value;
						if (score === 0) {
							score = 0;
						} else {
							score--;
						}
						alert("all done");
						// removeQuestion();
						// removeInputs();
						fadeOut();
						setTimeout(removeInputs, 1000);
						setTimeout(finalPage, 1000);

						
					} else if (c != allQuestions[i].correctAnswer && allQuestions[i] != allQuestions[qLength - 1]) {

						yourChoices[i] = currentChoices[c].value;
						if (score <= 0) {
							score = 0;
						} else if(score > 0) {
							score = score;
						} else {
							// do nothing
						}
						alert("you'll get better");
						i++;

						fadeOut();
						setTimeout(loadQuestion, 1000);
						setTimeout(removeInputs, 1000);
						setTimeout(loadChoiceInputs, 1000);
						setTimeout(loadChoices, 1000);
					}
				} else if(notAnswered === len) {
					alert('hold on partner. answer the question');
					return false;
				} else {
					notAnswered++;
					
				}
				
		}
		
	});

	loadQuestion();
	loadChoiceInputs();
	loadChoices();

});