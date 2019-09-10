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

            question: '',
            choices: ['a', 'b', 'c', 'd'],
            answer: 'd'

        },

        {

            question: '',
            choices: ['a', 'b', 'c', 'd'],
            answer: 'a'

        },
    
        {

            question: '',
            choices: ['a', 'b', 'c', 'd'],
            answer: 'a'

        },

        {

            question: '',
            choices: ['a', 'b', 'c', 'd'],
            answer: 'a'

        },

        {

            question: '',
            choices: ['a', 'b', 'c', 'd'],
            answer: 'a'

        },

        {

            question: '',
            choices: ['a', 'b', 'c', 'd'],
            answer: 'a'

        },

        {

            question: '',
            choices: ['a', 'b', 'c', 'd'],
            answer: 'a'

        },

        {

            question: '',
            choices: ['a', 'b', 'c', 'd'],
            answer: 'a'

        },

        {

            question: '',
            choices: ['a', 'b', 'c', 'd'],
            answer: 'a'

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