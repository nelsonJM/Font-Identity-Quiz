// Chapter 13

// Doesn't work
// var image = document.getElementById("10-Reasons");
// EventUtil.addHandler(image, "load", function(event){
// 	event = EventUtil.getEvent(event);
// 	alert(EventUtil.getTarget(event).src);
// });

// works!
// EventUtil.addHandler(window, "load", function(){
// 	var image = document.createElement("img");
// 	EventUtil.addHandler(image, "load", function(event){
// 		event = EventUtil.getEvent(event);
// 		alert(EventUtil.getTarget(event).src);
// 	});
// 	document.body.appendChild(image);
// 	image.src = "http://10.10.4.15/live-sentry/wp-content/themes/thesis_185/custom/images/2-circle.jpg";
// });

// Add a script element
// EventUtil.addHandler(window, "load", function(){
// 	var script = document.createElement("script");
// 	script.type = "text/javascript";
// 	EventUtil.addHandler(script, "load", function(event){
// 		alert("Loaded");
// 	});
// 	script.src = "http://10.10.4.15/live-sentry/wp-content/themes/thesis_185/custom/js/my_flex.js";
// 	document.body.appendChild(script);
// });

// Add a link
// EventUtil.addHandler(window, "load", function(){
// 	var link = document.createElement("link");
// 	link.type = "text/css";
// 	link.rel = "stylesheet";
// 	EventUtil.addHandler(link, "load", function(event){
// 		alert("css loaded");
// 	});
// 	link.href = "http://10.10.4.15/live-sentry/wp-content/themes/thesis_185/custom/jquery.validity.css";
// 	document.getElementsByTagName("head")[0].appendChild(link);
// });

// Chapter 13 Screen coords
// var div = document.getElementById("main_gallery-1");
// EventUtil.addHandler(div, "click", function(event){
// 	event = EventUtil.getEvent(event);
// 	alert("Screen coordinates: " + event.screenX + "," + event.screenY);
// });

// Modifier keys
// var div = document.getElementById("main_gallery-1");
// EventUtil.addHandler(div, "click", function(event){
// 	event = EventUtil.getEvent(event);
// 	var keys = new Array();

// 	if (event.shiftKey) {
// 		keys.push("shift");
// 	}

// 	if (event.ctrlKey) {
// 		keys.push("ctrl");
// 	}

// 	if (event.altKey) {
// 		keys.push("alt");
// 	}

// 	if (event.metaKey) {
// 		keys.push("meta");
// 	}

// 	alert("Keys: " + keys.join(","));
// });

// Related elements
// var div = document.getElementById("main_gallery-1");
// EventUtil.addHandler(div, "mouseout", function(event) {
// 	event = EventUtil.getEvent(event);
// 	var target = EventUtil.getTarget(event);
// 	var relatedTarget = EventUtil.getRelatedTarget(event);
// 	alert("Moused out of " + target.tagName + " to " + relatedTarget.tagName);
// });

// Buttons
// var div = document.getElementById("main_gallery-1");
// EventUtil.addHandler(div, "mousedown", function(event) {
// 	event = EventUtil.getEvent(event);
// 	alert(EventUtil.getButton(event));
// });

// MouseWheel
// EventUtil.addHandler(document, "mousewheel", function(event) {
// 	event = EventUtil.getEvent(event);
// 	var delta = (client.engine.opera && client.engine.opera < 9.5 ? -event.wheelDelta : event.wheelDelta);
// 	alert(delta);
// });

// FF supports DOMMouseScroll event
// EventUtil.addHandler(window, "DOMMouseScroll", function(event) {
// 	event = EventUtil.getEvent(event);
// 	alert(event.detail);
// });

// Assigning the same event handler to both mousewheel and DOMMouseScroll
// (function() {
// 	function handleMouseWheel(event) {
// 		event = EventUtil.getEvent(event);
// 		var delta = EventUtil.getWheelDelta(event);
// 		alert(delta);
// 	}

// 	EventUtil.addHandler(document, "mousewheel", handleMouseWheel);
// 	EventUtil.addHandler(document, "DOMMouseScroll", handleMouseWheel);
// })();

// Key Codes
// var textbox = document.getElementById("lead-message");
// EventUtil.addHandler(textbox, "keyup", function(event){
// 	event = EventUtil.getEvent(event);
// 	alert(event.keyCode);
// });

// Cross-browser for Key Codes
// var textbox = document.getElementById("lead-message");
// EventUtil.addHandler(textbox, "keypress", function(event){
// 	event = EventUtil.getEvent(event);
// 	alert(EventUtil.getCharCode(event));
// });

// The key and char properties of DOM level 3
// var textbox = document.getElementById("lead-message");
// EventUtil.addHandler(textbox, "keypress", function(event){
// 	event = EventUtil.getEvent(event);
// 	var identifier = event.key || event.keyIdentifier;
// 	if (identifier) {
// 		alert(identifier);
// 	}
// });

// The context menu event
// EventUtil.addHandler(window, "load", function(event) {
// 	var div = document.getElementById("myDiv");

// 	EventUtil.addHandler(div, "contextmenu", function(event) {
// 		event = EventUtil.getEvent(event);
// 		EventUtil.preventDefault(event);

// 		var menu = document.getElementById("myMenu");
// 		menu.style.left = event.clientX + "px";
// 		menu.style.top = event.clientY + "px";
// 		menu.style.visibility = "visible";
// 	});

// 	EventUtil.addHandler(document, "click", function(event) {
// 		document.getElementById("myMenu").style.visibility = "hidden";
// 	});
// });

// The beforeunload event
// EventUtil.addHandler(window, "beforeunload", function(event) {
// 	event = EventUtil.getEvent(event);
// 	var message = "I'm really going to miss you if you go.";
// 	event.returnValue = message;
// 	return message;
// });

// The DOMContentLoaded EventUtil
// EventUtil.addHandler(document, "DOMContentLoaded", function(event) {
// 	alert("Content loaded");
// });

// The readystatechange event
// EventUtil.addHandler(document, "readystatechange", function(event){
// 	if (document.readyState == "interactive"){
// 		alert("Content loaded");
// 	}
// });

// check for both interactive and complete phases
// EventUtil.addHandler(document, "readystatechange", function(event){
// 	if (document.readyState == "interactive" || document.readyState == "complete"){
// 		EventUtil.removeHandler(document, "readystatechange", arguments.callee);
// 		alert("Content loaded");
// 	}
// });

// readystatechange - For elements, use the same construct used with document - JS <script> - IE and Opera
// EventUtil.addHandler(window, "load", function(){
// 	var script = document.createElement("script");

// 	EventUtil.addHandler(script, "readystatechange", function(event){
// 		event = EventUtil.getEvent(event);
// 		var target = EventUtil.getTarget(event);

// 		if (target.readyState == "loaded" || target.readyState == "complete"){
// 			EventUtil.removeHandler(target, "readystatechange", arguments.callee);
// 			alert("Script Loaded");
// 		}
// 	});
// 	script.src = "http://10.10.4.15/live-sentry/wp-content/themes/thesis_185/custom/js/test/example.js";
// 	document.body.appendChild(script);
// });

// readystatechange - For elements, use the same construct used with document - CSS <link> - IE
// EventUtil.addHandler(window, "load", function(){
// 	var link = document.createElement("link");
// 	link.type = "text/css";
// 	link.rel = "stylesheet";

// 	EventUtil.addHandler(link, "readystatechange", function(event){
// 		event = EventUtil.getEvent(event);
// 		var target = EventUtil.getTarget(event);

// 		if (target.readyState == "loaded" || target.readyState == "complete"){
// 			EventUtil.removeHandler(target, "readystatechange", arguments.callee);
// 			alert("CSS Loaded");
// 		}
// 	});
// 	link.href = "http://10.10.4.15/live-sentry/wp-content/themes/thesis_185/custom/example.css";
// 	document.getElementsByTagName("head")[0].appendChild(link);
// });

// The pageshow and pagehide events
// (function(){
// 	var showCount = 0;

// 	EventUtil.addHandler(window, "load", function(){
// 		alert("Load fired");
// 	});

// 	EventUtil.addHandler(window, "pageshow", function(){
// 		showCount++;
// 		alert("Show has been fired " + showCount + " times.");
// 	});
// })();

// Checking the persisted property of the event object for pageshow - not working
// (function(){
// 	var showCount = 0;

// 	EventUtil.addHandler(window, "load", function(){
// 		alert("Load fired");
// 	});

// 	EventUtil.addHandler(window, "pageshow", function(){
// 		showCount++;
// 		alert("Show has been fired " + showCount + " times. Persisted? " + event.persisted);
// 	});
// })();

// The pagehide event - fires whenever a page is unloaded from the browser - not working

// EventUtil.addHandler(window, "pagehide", function(event){
// 	alert(event.persisted );
// });

// The hashchange event - IE 8+, FF, Safari, Chrome Opera - only FF, Chrome, and Opera support oldURL and newURL
// EventUtil.addHandler(window, "hashchange", function(event){
// 	alert("Old URL: " + event.oldURL + "\nNew URL: " + event.newURL);
// });

// It's best to use the location object to determine the current hash
// EventUtil.addHandler(window, "hashchange", function(event){
// 	alert("Current has: " + location.hash);
// });

// Event Delegation
// var list = document.getElementById("myLinks");
// EventUtil.addHandler(list, "click", function(event){
// 	event = EventUtil.getEvent(event);
// 	var target = EventUtil.getTarget(event);

// 	switch(target.id){
// 		case "doSomething":
// 			document.title = "I changed the document's title";
// 			break;
// 		case "goSomewhere":
// 			location.href = "http://www.wrox.com";
// 			break;
// 		case "sayHi":
// 			alert("hi");
// 			break;
// 	}
// });

// Simulating events
// Mouse click
// var btn = document.getElementById("myBtn");

// var event = document.createEvent("MouseEvents");

// event.initMouseEvent("click", true, true, document.defaultView, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

// btn.dispatchEvent(event);

// Custom events
// var div = document.getElementById("myDiv"),
// 	event;

// EventUtil.addHandler(div, "myevent", function(event){
// 	alert("DIV: " + event.detail);
// });
// EventUtil.addHandler(document, "myevent", function(event){
// 	alert("DOCUMENT: " + event.detail);
// });

// if (document.implementation.hasFeature("CustomEvents", "3.0")){
// 	event = document.createEvent("CustomEvent");
// 	event.initCustomEvent("myevent", true, false, "Hello world!");
// 	div.dispatchEvent(event);
// }

// Form Fields
// var form = document.getElementById("myForm");
// var colorFields = form.elements["color"];
// alert(colorFields.length);

// var firstColorField = colorFields[0];
// var firstFormField = form.elements[0];
// alert(firstColorField === firstFormField);

// Prevent submitting form more than once
// var form = document.getElementById("myForm");
// EventUtil.addHandler(form, "submit", function(event){
// event = EventUtil.getEvent(event);
// var target = EventUtil.getTarget(event);

// var btn = target.elements["submit-btn"];

// btn.disabled = true;
// });

// Autofocus
// EventUtil.addHandler(window, "load", function(event){
// var element = document.forms[0].elements[0];

// if (element.autofocus !== true){
// element.focus(); console.log("JS focus");
// }
// });

// Common Form-field events
// var textbox = document.forms[0].elements[0];
// EventUtil.addHandler(textbox, "focus", function(event){
// event = EventUtil.getEvent(event);
// var target = EventUtil.getTarget(event);

// if (target.style.backgroundColor != "red"){
// target.style.backgroundColor = "yellow";
// }
// });

// EventUtil.addHandler(textbox, "blur", function(event){
// event = EventUtil.getEvent(event);
// var target = EventUtil.getTarget(event);

// if (/[^\d]/.test(target.value)){
// target.style.backgroundColor = "red";
// } else {
// target.style.backgroundColor = "";
// }
// });

// EventUtil.addHandler(textbox, "change", function(event){
// event = EventUtil.getEvent(event);
// var target = EventUtil.getTarget(event);

// if (/[^\d]./test(target.value)){
// target.style.backgroundColor = "red";
// } else {
// target.style.backgroundColor = "";
// }
// });

// Text selection
// var textbox = document.forms[0].elements[0];
// EventUtil.addHandler(textbox, "focus", function(event){
// event = EventUtil.getEvent(event);
// var target = EventUtil.getTarget(event);

// target.select();
// });

// The Select Event
// var textbox = document.forms[0].elements["textbox1"];
// EventUtil.addHandler(textbox, "select", function(event){
// alert("Text selected: " + textbox.value);
// });

// Retrieving selected text
// var textbox = document.forms[0].elements[0];
// function getSelectedText(textbox){
// if (typeof textbox.selectionStart == "number"){
// return textbox.value.substring(textbox.selectionStart, textbox.selectionEnd);
// } else if (document.selection){
// return document.selection.createRange().text;
// }
// }

// Partial text selection - Single function for cross-browser usage
// function selectText(textbox, startIndex, stopIndex){
// 	if (textbox.setSelectionRange){
// 		textbox.setSelectionRange(startIndex, stopIndex);
// 	} else if (textbox.createTextRange){
// 		var range = textbox.createTextRange();
// 		range.collapse(true);
// 		range.moveStart("character", startIndex);
// 		range.moveEnd("character", stopIndex - startIndex);
// 		range.select();
// 	}
// 	textbox.focus();
// }

// Blocking Characters
// var textbox = document.forms[0].elements[0];
// EventUtil.addHandler(textbox, "keypress", function(event){
// 	event = EventUtil.getEvent(event);
// 	var target = EventUtil.getTarget(event);
// 	var charCode = EventUtil.getCharCode(event);

// 	if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 9 && !event.ctrlKey) {
// 		EventUtil.preventDefault(event);
// 	}
// });

// Dealing with the clipboard
// var textbox = document.forms[0].elements[0];
// EventUtil.addHandler(textbox, "paste", function(event){
// 	event = EventUtil.getEvent(event);
// 	var text = EventUtil.getClipboardText(event);

// 	if (!/^\d*$/.test(text)){
// 		EventUtil.preventDefault(event);
// 	}
// });

// Automatic Tab Forward
// (function(){
// 	function tabForward(event){
// 		event = EventUtil.getEvent(event);
// 		var target = EventUtil.getTarget(event);

// 		if (target.value.length == target.maxLength){
// 			var form = target.form;

// 			for (var i=0, len=form.elements.length; i < len; i++) {
// 				if (form.elements[i] == target) {
// 					if (form.elements[i+1]){
// 						form.elements[i+1].focus();
// 					}
// 					return;
// 				}
// 			}
// 		}
// 	}

// 	var textbox1 = document.getElementById("txtTel1");
// 	var textbox2 = document.getElementById("txtTel2");
// 	var textbox3 = document.getElementById("txtTel3");

// 	EventUtil.addHandler(textbox1, "keyup", tabForward);
// 	EventUtil.addHandler(textbox2, "keyup", tabForward);
// 	EventUtil.addHandler(textbox3, "keyup", tabForward);
// })();

// Alternate input types
// var input = document.createElement("input");
// input.type = "email";
// var isEmailSupported = (input.type == "email");

// Options selection
// var selectbox = document.forms[0].elements["location"];
// var selectedIndex = selectbox.selectedIndex;
// var selectedOption = selectbox.options[selectedIndex];
// alert("Selected index: " + selectedIndex + "\nSelected text: " + selectedOption.text + "\nSelected value: " + selectedOption.value);

// Loop over options collection and test the selected property
// var selectbox = document.forms[0].elements["location"];
// var selectedIndex = selectbox.selectedIndex;
// var selectedOption = selectbox.options[selectedIndex];

// function getSelectedOptions(selectbox){
// 	var result = new Array();
// 	var option = null;

// 	for (var i=0, len=selectbox.options.length; i < len; i++){
// 		option = selectbox.options[i];
// 		if (option.selected) {
// 			result.push(option);
// 		}
// 	}
// 	return result;
// }

// Get information about the selected options
// function getSelectedOptions(selectbox){
// 	var result = new Array();
// 	var option = null;

// 	for (var i=0, len=selectbox.options.length; i < len; i++){
// 		option = selectbox.options[i];
// 		if (option.selected) {
// 			result.push(option);
// 		}
// 	}
// 	return result;
// }

// var selectbox = document.getElementById("selLocation");
// var selectedOptions = getSelectedOptions(selectbox);
// var message = "";



// for (var i=0, len=selectedOptions.length; i < len; i++){
// 		message += "Selected index: " + selectedOptions[i].index + "\nSelected text: " + selectedOptions[i].text + "\nSelected value: " + selectedOptions[i].value + "\n\n";
// 	}
// alert(message);

// Add options - using the DOM
// var selectbox = document.getElementById("selLocation");
// var newOption = document.createElement("option");
// newOption.appendChild(document.createTextNode("Option text"));
// newOption.setAttribute("value", "Option value");

// selectbox.appendChild(newOption);

// Add options - using the Option constructor
// var selectbox = document.getElementById("selLocation");
// var newOption = new Option("Option text", "Option value");
// selectbox.appendChild(newOption);

// Add options - using the select box's add() method
// best solution. Ensures option is added at end of list in all browsers. If you need to insert a new option into a position other than last, you should use the DOM technique and insertBefore().
// var selectbox = document.getElementById("selLocation");
// var newOption = new Option("Option text", "Option value");
// selectbox.add(newOption, undefined); 

// Moving and reordering options
// var selectbox1 = document.getElementById("selLocations1");
// var selectbox2 = document.getElementById("selLocations2");

// selectbox2.appendChild(selectbox1.options[0]);

// Move an option up one spot in the select box
// var selectbox = document.getElementById("selLocation");
// var optionToMove = selectbox.options[1];
// selectbox.insertBefore(optionToMove, selectbox.options[optionToMove.index-1]);

// Move option down one spot
// var selectbox = document.getElementById("selLocation");
// var optionToMove = selectbox.options[1];
// selectbox.insertBefore(optionToMove, selectbox.options[optionToMove.index+2]);

// Form Serialization
// function serialize(form) {
// 	var parts = [],
// 		field = null,
// 		i,
// 		len,
// 		j,
// 		optLen,
// 		option,
// 		optValue;

// 	for (i=0, len=form.elements.length; i < len; i++) {
// 		field = form.elements[i];

// 		switch(field.type){
// 			case "select-one":
// 			case "select-multiple":

// 				if (field.name.length) {
// 					for (j=0, optLen = field.options.length; j < optLen; j++) {
// 						option = field.options[j];
// 						if (option.selected) {
// 							optValue = "";
// 							if (option.hasAttribute) {
// 								optValue = (option.hasAttribute("value") ? option.value : option.text);
// 							} else {
// 								optValue = (option.attributes["value"].specified ? option.value : option.text);
// 							}

// 							parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(optValue));
// 						}
// 					}
// 				}
// 				break;

// 				case undefined: //fieldset
// 				case "file": //file input
// 				case "submit": //submit button
// 				case "reset": //reset button
// 				case "button": //custom button
// 					break;

// 					case "radio": //radio button
// 					case "checkbox": //checkbox
// 						if (!field.checked) {
// 							break;
// 						}
// 						/* falls through */

// 					default:
// 						//don't include form fields without names
// 						if (field.name.length) {
// 							parts.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
// 						}
// 		}
// 	}
// 	return parts.join("&");
// }

// Rich Text Editing - enable
// EventUtil.addHandler(window, "load", function() {
// 	frames["richedit"].document.designMode = "on";
// });

// Modify appearance of iframe rich text area
// toggle bold text in an iframe
// frames["richedit"].document.execCommand("bold", false, null);

// Create link to wrox
// frames["richedit"].document.execCommand("create link", false, "http://www.wrox.com");

// Use the same methods to act on a contenteditable section of the page
// toggle bold text
// document.execCommand("bold", false, null);

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
	};

	

	EventUtil.addHandler(nextBtn, "click", function(){

		var currentChoices = document.querySelectorAll('#answers input');
		var len = currentChoices.length;
		
		for (var c=0; c<len; c++){
			if (currentChoices[c].checked && c === allQuestions[i].correctAnswer && allQuestions[i] != allQuestions[qLength - 1]) {
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
				
			} else {
				// do nothing
			}

		}
		
	});

	loadQuestion();
	loadChoiceInputs();
	loadChoices();

});