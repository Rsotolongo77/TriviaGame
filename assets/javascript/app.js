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
            choices: ['&nbsp a: &nbsp; Taco Bell', '&nbsp b: &nbsp; Carrabbas', '&nbsp c: &nbsp; A Steakhouse', "&nbsp d: &nbsp; Chili's"],
            answer: "&nbsp d: &nbsp; Chili's"

        },

        {

            question: 'Every episode of Seinfeld contains an image or reference to what superhero ?',
            choices: ['&nbsp a: &nbsp; Plastic Man', '&nbsp b: &nbsp; Superman ', '&nbsp c: &nbsp; Spiderman', '&nbsp d: &nbsp; Batman'],
            answer: '&nbsp b: &nbsp; Superman'

        },

        {

            question: 'Which pop star played 27 different instruments on their debut album For You?',
            choices: ['&nbsp a: &nbsp; Michael Jackson', '&nbsp b: &nbsp; Guns n Roses', '&nbsp c: &nbsp; Prince', '&nbsp d: &nbsp; Boyz 2 Men'],
            answer: '&nbsp c: &nbsp; Prince'

        },

        {

            question: "What was the name of Norm's wife on Cheers?",
            choices: ['&nbsp a: &nbsp; Vera', '&nbsp b: &nbsp; Denise', '&nbsp c: &nbsp; Lucy', '&nbsp d: &nbsp; Sally'],
            answer: '&nbsp a: &nbsp; Vera'

        },

        {

            question: 'What was the first sport televised in the U.S.?',
            choices: ['&nbsp a: &nbsp; Ping Pong', '&nbsp b: &nbsp; Horse Racing', '&nbsp c: &nbsp; Baseball', '&nbsp d: &nbsp; Football'],
            answer: '&nbsp c: &nbsp; Baseball'

        },

        {

            question: 'What was the first movie by Pixar to receive a rating higher than G in the United States?',
            choices: ['&nbsp a: &nbsp; Finding Nemo', '&nbsp b: &nbsp; The Incredibles', '&nbsp c: &nbsp; Toy Story 4', '&nbsp d: &nbsp; Monsters Inc'],
            answer: '&nbsp b: &nbsp; The Incredibles'

        },

        {

            question: 'What color are aircraft black boxes? ',
            choices: ['&nbsp a: &nbsp; Bright orange ', '&nbsp b: &nbsp; Black', '&nbsp c: &nbsp; Pink ', '&nbsp d: &nbsp; Transparent '],
            answer: '&nbsp a: &nbsp; Bright orange '

        },

        {

            question: 'What famous general was once attacked by rabbits ?',
            choices: ['&nbsp a: &nbsp; Alexander The Great', '&nbsp b: &nbsp; Julius Caesar', '&nbsp c: &nbsp; Genghis Khan', '&nbsp d: &nbsp; Napolean '],
            answer: '&nbsp d: &nbsp; Napolean '

        },

        {

            question: 'Which NFL team appeared in four consecutive Super Bowls from 1991 - 1994 and lost them all? ',
            choices: ['&nbsp a: &nbsp; Buffalo Bills ', '&nbsp b: &nbsp; Washington Redskins', '&nbsp c: &nbsp; Oakland Raiders', '&nbsp d: &nbsp; Chicago Cubs'],
            answer: '&nbsp a: &nbsp; Buffalo Bills '

        },

        {

            question: 'What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?',
            choices: ['&nbsp a: &nbsp; Luke Skywalker ', '&nbsp b: &nbsp; Aragorn ', '&nbsp c: &nbsp; Boromir', '&nbsp d: &nbsp; Frodo '],
            answer: '&nbsp d: &nbsp; Frodo '

        }



    ];


    
    

    //function to load questions and choices//
    function questionGenerator() {



        var newQuestion = triviaQuestions[questionNumber].question;
        var choices = triviaQuestions[questionNumber].choices;

        $('#timer').html('Timer:'  + counter);
        $('#questions').html(`<h1>${newQuestion}</h1><br>
            <h3>${choicesGenerator(choices)}</h3> 
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


    function timeOver() {

        clearInterval(timer);
    }
    





 