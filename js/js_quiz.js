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

	nextBtn = document.getElementById("qbtn"),

	loadQuestion = function() {
		document.getElementById("question").innerHTML = allQuestions[i].question;
	},

	removeQuestion = function() {
		var question = document.getElementById("question");
		while (question.firstChild) {
			question.removeChild(question.firstChild);
		}
	},

	loadChoiceInputs = function() {
		var qchoices = allQuestions[i].choices;
		var len = qchoices.length;

		for (var c=0; c<len; c++) {
			var qChoice = document.createElement("input");
			qChoice.type = "radio";
			qChoice.name = "pick";
			qChoice.value = allQuestions[i].choices[c];

			var qChoiceLabel = document.createElement("label");

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
		
			currentChoices[c].value = allQuestions[i].choices[c];

			cLabels[c].innerHTML = allQuestions[i].choices[c];
		}
	},

	finalPage = function() {
		
		document.getElementById("question").innerHTML = "Thanks for playing. Your Score is: ";

		document.getElementById("answers").innerHTML = score;
		document.getElementById("controls").removeChild(nextBtn);
	};

	

	EventUtil.addHandler(nextBtn, "click", function(){

		var currentChoices = document.querySelectorAll('#answers input');
		var len = currentChoices.length;
		
		for (var c=0; c<len; c++){
				if (currentChoices[c].checked !== 1) {
					alert('hold up partner. answer the question');
					return false;
				}
				else if (currentChoices[c].checked && c === allQuestions[i].correctAnswer && allQuestions[i] != allQuestions[qLength - 1]) {
					console.log(currentChoices[c]);
					alert("yay");
					score++;
					i++;

					loadQuestion();
					removeInputs();
					loadChoiceInputs();
					loadChoices();
				} else if (currentChoices[c].checked && c === allQuestions[i].correctAnswer && allQuestions[i] === allQuestions[qLength - 1]) {
					alert("all done");
					score++;
					removeQuestion();
					removeInputs();
					finalPage();

				} else if (currentChoices[c].checked && c != allQuestions[i].correctAnswer && allQuestions[i] === allQuestions[qLength - 1]) {
					alert("all done");
					removeQuestion();
					removeInputs();
					finalPage();
					
				} else if (currentChoices[c].checked && c != allQuestions[i].correctAnswer && allQuestions[i] != allQuestions[qLength - 1]) {
					alert("you'll get better");
					i++;
					loadQuestion();
					removeInputs();
					loadChoiceInputs();
					loadChoices();
				}

		}
		
	});

	loadQuestion();
	loadChoiceInputs();
	loadChoices();

});