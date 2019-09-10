$(document).ready(function () {

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
            choices: ['Taco Bell', 'Carrabbas', 'A Steakhouse', "Chili's"],
            answer: "Chili's"

        },

        {

            question: 'Every episode of Seinfeld contains an image or reference to what superhero ?',
            choices: ['Plastic Man', 'Superman ', 'Spiderman', 'Batman'],
            answer: 'Superman'

        },

        {

            question: 'Which pop star played 27 different instruments on their debut album For You?',
            choices: ['Michael Jackson', 'Guns n Roses', 'Prince', 'Boyz 2 Men'],
            answer: 'Prince'

        },
    
        {

            question: "What was the name of Norm's wife on Cheers?",
            choices: ['Vera', 'Denise', 'Lucy', 'Sally'],
            answer: 'Vera'

        },

        {

            question: 'What was the first sport televised in the U.S.?',
            choices: ['Ping Pong', 'Horse Racing', 'Baseball', 'Football'],
            answer: 'Baseball'

        },

        {

            question: 'What was the first movie by Pixar to receive a rating higher than G in the United States?',
            choices: ['Finding Nemo', 'The Incredibles', 'Toy Story 4', 'Monsters Inc'],
            answer: 'The Incredibles'

        },

        {

            question: 'What color are aircraft black boxes? ',
            choices: ['Bright orange ', 'Black', 'Pink ', 'Transparent '],
            answer: 'Bright orange '

        },

        {

            question: 'What famous general was once attacked by rabbits ?',
            choices: ['Alexander The Great', 'Julius Caesar', 'Genghis Khan', 'Napolean '],
            answer: 'Napolean '

        },

        {

            question: 'Which NFL team appeared in four consecutive Super Bowls from 1991 - 1994 and lost them all? ',
            choices: ['Buffalo Bills ', 'Washington Redskins', 'Oakland Raiders', 'Chicago Cubs'],
            answer: 'Buffalo Bills '

        },

        {

            question: 'What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?',
            choices: ['Luke Skywalker ', 'Aragorn ', 'Boromir', 'Frodo '],
            answer: 'Frodo '

        }
    
    
    
    ];





    //function to load questions//
    function questionGenerator () {

        var newQuestion = triviaQuestions[questionNumber].question;
        var userChoices = triviaQuestions[questionNumber].choices;

        $('#timer').html('Timer: '+ '<br>' + counter);
        $('#questions').html(newQuestion);
        console.log (newQuestion);

    }
     questionGenerator();




});  