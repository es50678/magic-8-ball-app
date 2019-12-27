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
            
    MagicEightBall.getAnswer = function(){
        setTimeout(function(){
            $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
        }, 500);
        var randomNumber = Math.floor(Math.random() * this.answerList.length);
        answer = this.answerList[randomNumber];
        setTimeout(function(){
            $("#8ball").effect("shake");
        }, 500);
        $("#answer").text(answer);
        $("#answer").fadeIn(8000);
        
    };

$("#answer").hide();
var showPrompt = function show_prompt() {
    $("#answer").hide();
    $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    setTimeout(function(){
        prompt("ask me a yes or no question");
    }, 500);
    MagicEightBall.getAnswer();   
}

$('#questionButton').click(showPrompt);