function showQuestions(questions, quizContainer){
		// code will go here
	}

	function showResults(questions, quizContainer, resultsContainer){
		// code will go here
	}

	// show the questions
	showQuestions(questions, quizContainer);

	// when user clicks submit, show results
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}


	// for each question...
	for(var i=0; i<questions.length; i++){
		
		// first reset the list of answers
		answers = [];

		// for each available answer to this question...
		for(letter in questions[i].answers){

			// ...add an html radio button
			answers.push(
				'<label>'
					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
					+ letter + ': '
					+ questions[i].answers[letter]
				+ '</label>'
			);
		}// add this question and its answers to the output
		output.push(
			'<div class="question">' + questions[i].question + '</div>'
			+ '<div class="answers">' + answers.join('') + '</div>'
		);
	}

	// finally combine our output list into one string of html and put it on the page
	quizContainer.innerHTML = output.join('');

                                   showQuestions(questions, quizContainer);
                                   function showResults(questions, quizContainer, resultsContainer){
	
	// gather answer containers from our quiz
	var answerContainers = quizContainer.querySelectorAll('.answers');
	
	// keep track of user's answers
	var userAnswer = '';
	var numCorrect = 0;
	
	// for each question...
	for(var i=0; i<questions.length; i++){

		// find selected answer
		userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
		
		// if answer is correct
		if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			numCorrect++;
			
			// color the answers green
			answerContainers[i].style.color = 'lightgreen';
		}
		// if answer is wrong or blank
		else{
			// color the answers red
			answerContainers[i].style.color = 'red';
		}
	}

	// show number of correct answers out of total
	resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
}
    // on submit, show results
submitButton.onclick = function(){
	showResults(questions, quizContainer, resultsContainer);
}
    var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
    generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

//Specify the class that you want to select
var x = document.getElementsByClassName("ms-webpart-chrome-title");
var i;
var c;

//specify the colors you want to use
var colors = ["#009933", "#006699", "#33cccc", "#99cc00", "#f60"];
var d = colors.length;

for (i = 0; i < x.length; i++){
    while (i < d) {
        c = i;
        var random_color = colors[c];
        x[i].style.borderTopColor = random_color;
        i++;
    }
    while (i >= d) {
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        x[i].style.borderTopColor = random_color;
        i++;
    }
}