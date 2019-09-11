    //global variables//
    var questionNumber = 0;
    var timer;
    var counter = 30;
    var correct = 0;
    var incorrect = 0;



    //variable with objects for references with userchoices//
    var triviaQuestions = [
        {

            question: 'In the popular TV show The Office, which restaurant chain was Pam banned from? ',
            choices: [' a: Taco Bell ', ' b: Carrabbas ', ' c: A Steakhouse '," d: Chili's "],
            answer: " d: Chili's "

        },

        {

            question: 'Every episode of Seinfeld contains an image or reference to what superhero ?',
            choices: [' a: Plastic Man ', ' b: Superman ', ' c: Spiderman ', ' d: Batman '],
            answer: ' b: Superman '

        },

        {

            question: 'Which pop star played 27 different instruments on their debut album For You?',
            choices: [' a: Michael Jackson ', ' b: Guns n Roses ', ' c: Prince ', ' d: Boyz 2 Men '],
            answer: ' c: Prince '

        },

        {

            question: "What was the name of Norm's wife on Cheers?",
            choices: [' a: Vera ', ' b: Denise ', ' c: Lucy ', ' d: Sally '],
            answer: ' a: Vera '

        },

        {

            question: 'What was the first sport televised in the U.S.?',
            choices: [' a: Ping Pong ', ' b: Horse Racing ', ' c: Baseball ', ' d: Football '],
            answer: ' c: Baseball '

        },

        {

            question: 'What was the first movie by Pixar to receive a rating higher than G in the United States?',
            choices: [' a: Finding Nemo ', ' b: The Incredibles ', ' c: Toy Story 4 ', ' d: Monsters Inc '],
            answer: ' b: The Incredibles '

        },

        {

            question: 'What color are aircraft black boxes? ',
            choices: [' a: Bright orange ', ' b: Black ', ' c: Pink ', ' d: Transparent '],
            answer: ' a: Bright orange '

        },

        {

            question: 'What famous general was once attacked by rabbits ?',
            choices: [' a: Alexander The Great ', ' b: Julius Caesar ', ' c: Genghis Khan ', ' d: Napolean '],
            answer: ' d: Napolean '

        },

        {

            question: 'Which NFL team appeared in four consecutive Super Bowls from 1991 - 1994 and lost them all? ',
            choices: [' a: Buffalo Bills ', ' b: NY Jets ', ' c: Oakland Raiders ', ' d: Chicago Cubs '],
            answer: ' a: Buffalo Bills '

        },

        {

            question: 'What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?',
            choices: [' a: Luke Skywalker ', ' b: Aragorn ', ' c: Boromir ', ' d: Frodo '],
            answer: ' d: Frodo '

        }



    ];


    
    

    //function to load questions and choices//
    function questionGenerator() {

        counter = 30;

        var newQuestion = triviaQuestions[questionNumber].question;
        var choices = triviaQuestions[questionNumber].choices;

        $('#timer').html('Timer:'  + counter);
        $('#questions').html(`<h1>${newQuestion}</h1><br>
            <div class ="row">${choicesGenerator(choices)}</div>
        `);

        timer = setInterval(timerControl, 1000);





    }

    //function to generate choices corresponding to questions//
    function choicesGenerator(choices) {

        var possibleAnswers = '';

        for (i = 0; i < choices.length; i++) {
            possibleAnswers += `<p class= "choice" data-answer="${choices[i]}">${choices[i]}</p>`;
        }

        return possibleAnswers;

    }

    questionGenerator();


    
    



    //function to initiate timer//
    function timerControl() {
        
        counter--;
        
        $('#timer').html('Timer: ' + counter);
        if (counter === 0) {
            timeOver();
        }


    }

    //function to stop timer//
    function timeOver() {

        clearInterval(timer);
        incorrect++;
        $("#incorrect").html('&nbsp Incorrect: ' + incorrect);
        nextQuestion();
    }
    

    //function for next question to load and end of game logic//
    function nextQuestion() {

        var outOfQuestions = (triviaQuestions.length -1) === questionNumber;
        if(outOfQuestions) {

            console.log("Game is Over!");
        }

        else {
        questionNumber++;
        questionGenerator();
        }
    }

    //enable on click function and obtain userAnswer values and apply conditionals//
    $(document).on('click', '.choice', function() {
    
            var userAnswer = $(this).attr('data-answer');
            var answer = triviaQuestions[questionNumber].answer;

            if (userAnswer == answer) {

                correct++;
                $("#correct").html('&nbsp Correct: ' + correct);
                clearInterval(timer);
                nextQuestion();

            }

            else {
                incorrect++;
                $("#incorrect").html('&nbsp Incorrect: ' + incorrect);
                clearInterval(timer);
                nextQuestion();
            }

            console.log('testing', userAnswer, answer);
    });

    //restart game link created//
    $("#restart").on("click", function () {
        clearInterval(timer);
        questionNumber = 0;
        timer;
        counter = 30;
        correct = 0;
        incorrect = 0;
        $("#incorrect").html('&nbsp Incorrect: ' + incorrect);
        $("#correct").html('&nbsp Correct: ' + correct);
        questionGenerator();

        



    });


 