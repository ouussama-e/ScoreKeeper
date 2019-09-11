import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  score1:any;
  score2:any;
  ScoreMax:any;
  GameOver:boolean;
  style1:boolean;
  style11:boolean;
  style2:boolean;
  style22:boolean;
 

  constructor() { 
    this.score1=0;
    this.score2=0;
    this.ScoreMax =10;
    this.GameOver=false;
    this.style1=true;
    this.style11=false;
    this.style2=true;
    this.style22=false;
  }

  ngOnInit() {
  }
  

 reset() {
    this.score1=0;
    this.score2=0;
    this.GameOver=false;
    this.style1=true;
    this.style11=false;
    this.style2=true;
    this.style22=false;   
}

increment1(){
  
  if(this.score1+1===this.ScoreMax){
    this.score1+=1;
    this.GameOver=true;
    this.style1=false;
    this.style11=true;
    
  }
  else{
  this.score1+=1;
}
}
increment2(){
  if(this.score2+1===this.ScoreMax){
    this.score2+=1;
    this.GameOver=true;
    this.style2=false;
    this.style22=true;
    
    }

    else{
   
    this.score2+=1;
  }
}


}
