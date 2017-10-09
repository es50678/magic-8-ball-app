$(document).ready(function (){
    var MagicEightBall = {};
    MagicEightBall.answerList = 
        [ 
            "It is certain" , 
            "It is decidedly so", 
            "Without a doubt", 
            "Yes definitely", 
            "You may rely on it", 
            "As I see it, yes", 
            "Most likely"
        ];
            
    MagicEightBall.getAnswer = function(question){
        var randomNumber = Math.floor(Math.random() * this.answerList.length);
        answer = this.answerList[randomNumber];
        return answer;
    };
    console.log(MagicEightBall.getAnswer("When will the Skeleton War end?"));
});

