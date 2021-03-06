class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
        console.log(contestantCount)
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
    background("lightblue")
    //write code to show a heading for showing the result of Quiz
    textSize(30)
    fill("brown")
    text("RESULT OF THE QUIZ",340,50)
    
    //call getContestantInfo( ) here
    Contestant.getPlayerInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants !==undefined){
      var display_answers=230;
      fill("blue")
      textSize(20)
      text("NOTE:CONTESTANT WHO'S ANSWER IS CORRECT ARE HIGHLIGHTED IN GREEN COLOUR",130,320)
      for(var plr in allContestants){
        var correctAns="2";
        if(correctAns === allContestants[plr].answer)
      fill("green")
      else
      fill("red");

      display_answers+=30;
      textSize(15);
      text(allContestants[plr].name + ": "+ allContestants[plr].answer, 250,display_answers)
      }
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
