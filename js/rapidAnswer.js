var rapidAnswer = angular.module('rapidAnswer', [])

.factory('RapidAnswer', function ($http) {


    var countTimer = 90;
    var questions = [{
        id: 1,
        quesNo: "Q1",
        question: "A home town boy and lovingly called the “Prodigal son” by the Panther faithful, He won the title with Jaipur in 2014 and is hoping to do it again, who are we talking about ?",

        model: "quest1",
        options: [{
            "id": "radio1",
            "name": " Navneet Gautam",
            answer: true

        }, {
            "id": "radio2",
            "name": "Somvir Shekhar"

        }, {
            "id": "radio3",
            "name": "Manoj Dhull"

        }, {
            "id": "radio4",
            "name": "Kamal Kishor"
        }]
    }, {
        id: 2,
        quesNo: "Q2",
        question: "The Panthers call this den, Home.",
        model: "quest2",
        options: [{
            "id": "radio1",
            "name": " Sawai Mansingh Indoor Stadium",
            answer: true
        }, {
            "id": "radio2",
            "name": "Luv Kush Indoor Stadium",

        }, {
            "id": "radio3",
            "name": "Indira Indoor Stadium"
        }, {
            "id": "radio4",
            "name": "Rajiv Gandhi & Indoor Stadium"
        }]
    }, {
        id: 3,
        quesNo: "Q3",
        question: "The Panthers roared into the 2014 finals and grabbed their first PKL title vs U Mumba, where were the finals held?",
        model: "quest3",
        options: [{
            "id": "radio1",
            "name": "  Mumbai",
            answer: true
        }, {
            "id": "radio2",
            "name": "Pune"
        }, {
            "id": "radio3",
            "name": "Hyderabad"

        }, {
            "id": "radio4",
            "name": "Rajasthan"
        }]
    }, {
        id: 4,
        quesNo: "Q4",
        question: "At 186 cms, this panther towers alongside his teammates, a formidable raider, who is the man in question?",
        model: "quest4",
        options: [{
            "id": "radio1",
            "name": "  Selvamani K",
            answer: true

        }, {
            "id": "radio2",
            "name": "Santhapanaselvam"
        }, {
            "id": "radio3",
            "name": "Vignesh B"
        }, {
            "id": "radio4",
            "name": "Kamal Kishor"
        }]
    }, {
        id: 5,
        quesNo: "Q5",
        question: " Just a Teenager, this Panther is our youngest player on the roster this season, any guesses?",
        model: "quest5",
        options: [{
            "id": "radio1",
            "name": "  Rahul Choudhary",
            answer: true
        }, {
            "id": "radio2",
            "name": "Ajit Singh"
        }, {
            "id": "radio3",
            "name": "Siddharth"
        }, {
            "id": "radio4",
            "name": "Ravinder Kumar"
        }]
    }, {
        id: 6,
        quesNo: "Q6",
        question: "In the recent bidding war, we won this man’s signature ! commanding the rank of Sgt. Af. the nation is in debt to him & we are proud to have him Roar Pink.",
        model: "quest6",
        options: [{
            "id": "radio1",
            "name": " Ravinder Kumar",
            answer: true
        }, {
            "id": "radio2",
            "name": "Siddharth "
        }, {
            "id": "radio3",
            "name": "Sunil Siddhgavali"
        }, {
            "id": "radio4",
            "name": "Ajit Singh"
        }]
    }, {
        id: 7,
        quesNo: "Q7",
        question: "The costliest player in Panther history, this man was also conferred upon the highest prize an athlete can receive in India.",
        model: "quest7",
        options: [{
            "id": "radio1",
            "name": " Manjeet Chhillar",
            answer: true
        }, {
            "id": "radio2",
            "name": "Navneet Gautam"
        }, {
            "id": "radio3",
            "name": "Somvir Shekhar"
        }, {
            "id": "radio4",
            "name": "Selvamani K"
        }]
    }, {
        id: 8,
        quesNo: "Q8",
        question: "Last season’s leading raider with the Pink Panther’s, this man hails from Panipat and won the World Cup in 2016.",
        model: "quest8",
        options: [{
            "id": "radio1",
            "name": " Jasvir Singh.",
            answer: true
        }, {
            "id": "radio2",
            "name": "Ajit Singh"
        }, {
            "id": "radio3",
            "name": "Navneet Gautam"
        }, {
            "id": "radio4",
            "name": "Somvir Shekhar"
        }]
    }, {
        id: 9,
        quesNo: "Q9",
        question: "Our coach for the past 2 seasons and soon to be 3, he is the man who led the Indian National side to the World cup in 2016 & led us all the way to the finals last year.        ",
        model: "quest9",
        options: [{
            "id": "radio1",
            "name": "Balwan Singh",
            answer: true
        }, {
            "id": "radio2",
            "name": "Baskaran Kasinathan "
        }, {
            "id": "radio3",
            "name": "Ravi Shetty"
        }, {
            "id": "radio4",
            "name": "Ashok Shinde"
        }]
    }, {
        id: 10,
        quesNo: "Q10",
        question: "A Panther for the very first time, this All-rounder from the Republic Of Korea, will participate for the very first time in the PKL.",
        model: "quest10",
        options: [{
            "id": "radio1",
            "name": "Donggyu Kim",
            answer: true
        }, {
            "id": "radio2",
            "name": "Jaemin Lee"
        }, {
            "id": "radio3",
            "name": "CHEOL GYU SHIN"
        }, {
            "id": "radio4",
            "name": "GYUNG TAE KIM"
        }]
    }];
    var answered;

    return {

        changeTimerRapid: function () {
            var rapidTimer = $.jStorage.get("rapidTimer");
            var returnVal;
            if (rapidTimer && rapidTimer != 1) {
                returnVal = rapidTimer - 1;
                $.jStorage.set("rapidTimer", returnVal);
            } else if (rapidTimer != 1) {
                returnVal = countTimer;
                $.jStorage.set("rapidTimer", returnVal);
            } else {
                $.jStorage.set("rapidTimer", null);
                returnVal = 0;
            }
            return returnVal;
        },
        getTotalTime: function () {
            return countTimer;
        },
        getQuestion: function (questionNo) {
            return questions[questionNo - 1];
        },
        getTotalQuestion: function () {
            return questions.length;
        },
        lastAnswer: function () {
            return questions.length;
        },
        saveAnswer: function (answer) {
            var answered;
            if ($.jStorage.get("Answered")) {
                answered = $.jStorage.get("Answered");
            } else {
                answered = questions;
            }
            console.log(answer);
            var index = _.findIndex(answered, function (question) {
                return (question.id == answer.id);
            });
            console.log(index);
            answered[index] = answer;
            console.log(answered);
            $.jStorage.set("Answered", answered);
        },
        getScore: function () {
            var score;
            var arr = [];
            if ($.jStorage.get("Answered")) {
                answered = $.jStorage.get("Answered");
                arr = _.map(answered, function (n) {
                    return n.options;
                });
                arr = _.flattenDeep(arr);
                var correctAnswer = _.filter(arr, function (n) {
                    return (n.selected && n.answer);
                });
                score = correctAnswer.length;
            } else {
                score = 0;
            }
            $.jStorage.flush();
            return score;
        }

    };
});