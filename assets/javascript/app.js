    //global variables//
    var questionNumber = 0;
    var timer;
    var counter = 5;
    var correct = 0;
    var incorrect = 0;



    //variable with objects for references with userchoices//
    var triviaQuestions = [
        {

            question: 'In the popular TV show The Office, which restaurant chain was Pam banned from? ',
            choices: ['&nbsp a: &nbsp; Taco Bell &nbsp', '&nbsp b: &nbsp; Carrabbas &nbsp', '&nbsp c: &nbsp; A Steakhouse &nbsp', "&nbsp d: &nbsp; Chili's &nbsp"],
            answer: "&nbsp d: &nbsp; Chili's &nbsp"

        },

        {

            question: 'Every episode of Seinfeld contains an image or reference to what superhero ?',
            choices: ['&nbsp a: &nbsp; Plastic Man &nbsp', '&nbsp b: &nbsp; Superman &nbsp', '&nbsp c: &nbsp; Spiderman &nbsp', '&nbsp d: &nbsp; Batman &nbsp'],
            answer: '&nbsp b: &nbsp; Superman &nbsp'

        },

        {

            question: 'Which pop star played 27 different instruments on their debut album For You?',
            choices: ['&nbsp a: &nbsp; Michael Jackson &nbsp', '&nbsp b: &nbsp; Guns n Roses &nbsp', '&nbsp c: &nbsp; Prince &nbsp', '&nbsp d: &nbsp; Boyz 2 Men &nbsp'],
            answer: '&nbsp c: &nbsp; Prince &nbsp'

        },

        {

            question: "What was the name of Norm's wife on Cheers?",
            choices: ['&nbsp a: &nbsp; Vera &nbsp', '&nbsp b: &nbsp; Denise &nbsp', '&nbsp c: &nbsp; Lucy &nbsp', '&nbsp d: &nbsp; Sally &nbsp'],
            answer: '&nbsp a: &nbsp; Vera &nbsp'

        },

        {

            question: 'What was the first sport televised in the U.S.?',
            choices: ['&nbsp a: &nbsp; Ping Pong &nbsp', '&nbsp b: &nbsp; Horse Racing &nbsp', '&nbsp c: &nbsp; Baseball &nbsp', '&nbsp d: &nbsp; Football &nbsp'],
            answer: '&nbsp c: &nbsp; Baseball &nbsp'

        },

        {

            question: 'What was the first movie by Pixar to receive a rating higher than G in the United States?',
            choices: ['&nbsp a: &nbsp; Finding Nemo &nbsp', '&nbsp b: &nbsp; The Incredibles &nbsp', '&nbsp c: &nbsp; Toy Story 4 &nbsp', '&nbsp d: &nbsp; Monsters Inc &nbsp'],
            answer: '&nbsp b: &nbsp; The Incredibles &nbsp'

        },

        {

            question: 'What color are aircraft black boxes? ',
            choices: ['&nbsp a: &nbsp; Bright orange &nbsp', '&nbsp b: &nbsp; Black &nbsp', '&nbsp c: &nbsp; Pink &nbsp', '&nbsp d: &nbsp; Transparent &nbsp'],
            answer: '&nbsp a: &nbsp; Bright orange &nbsp'

        },

        {

            question: 'What famous general was once attacked by rabbits ?',
            choices: ['&nbsp a: &nbsp; Alexander The Great &nbsp', '&nbsp b: &nbsp; Julius Caesar &nbsp', '&nbsp c: &nbsp; Genghis Khan &nbsp', '&nbsp d: &nbsp; Napolean &nbsp'],
            answer: '&nbsp d: &nbsp; Napolean &nbsp'

        },

        {

            question: 'Which NFL team appeared in four consecutive Super Bowls from 1991 - 1994 and lost them all? ',
            choices: ['&nbsp a: &nbsp; Buffalo Bills &nbsp', '&nbsp b: &nbsp; Washington Redskins &nbsp', '&nbsp c: &nbsp; Oakland Raiders &nbsp', '&nbsp d: &nbsp; Chicago Cubs &nbsp'],
            answer: '&nbsp a: &nbsp; Buffalo Bills &nbsp'

        },

        {

            question: 'What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?',
            choices: ['&nbsp a: &nbsp; Luke Skywalker &nbsp', '&nbsp b: &nbsp; Aragorn &nbsp', '&nbsp c: &nbsp; Boromir &nbsp', '&nbsp d: &nbsp; Frodo &nbsp'],
            answer: '&nbsp d: &nbsp; Frodo &nbsp'

        }



    ];


    
    

    //function to load questions and choices//
    function questionGenerator() {

        counter = 5;

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



 