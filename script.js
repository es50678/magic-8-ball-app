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
            
    MagicEightBall.getAnswer = function(q){
        var randomNumber = Math.floor(Math.random() * this.answerList.length);
        answer = this.answerList[randomNumber];
        $("#answer").text(answer);
    };

var showPrompt = function show_prompt() {
    var question = prompt("Ask Me Anything");
    MagicEightBall.getAnswer(question);
}

$('#questionButton').click(showPrompt);