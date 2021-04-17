class Quiz {
  constructor(){

  }

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
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();

    //write code to change the background color here
    background("yellow")

    //write code to show a heading for showing the result of Quiz
    text("answers",200,300)
    //call getContestantInfo( ) here
    Contestant.getContestantInfo();

    //write condition to check if contestantInfor is not undefined
    if(allContestants != undefined){
      var y = 250
       for(var plr in allContestants){
          var correctAns = "2"
          var correction;
          if(allContestants[plr].answer == correctAns){
          correction = "right"
          fill("green");
          }else{
            correction = "wrong"
            fill("red");
          }
           text(allContestants[plr].name+" - "+allContestants[plr].answer+" - "+correction,300,y)
           y=y+30
       }
    }
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
