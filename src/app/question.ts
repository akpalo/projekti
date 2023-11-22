

export class Question {
    questionTxt: string;
    feedback: string;
    
 
  constructor(q: string) {
    this.questionTxt = q;
    this.feedback = 'Ei vielä arvioitu';
    
  }
  
 
  setFeedback(value: number) {
    console.log(value)
    if (value == 0){
      this.feedback = 'En osaa sanoa'
    }
    else if (value == 1){
      this.feedback = 'Huono'
    }
    else if (value == 2){
      this.feedback = 'Ok'
    }
    else if (value == 3){
      this.feedback = 'Hyvä'
    }
    else {
      this.feedback = 'Ei vielä arvioitu'
    }
}
 

}
