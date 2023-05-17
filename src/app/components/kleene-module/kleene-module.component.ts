import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-kleene-module',
  templateUrl: './kleene-module.component.html',
  styleUrls: ['./kleene-module.component.css']
})
export class KleeneModuleComponent {
  @Input() word : string = "";
  @Input() levelInput : number = 0;
  
  lenguage : string[] = [];
  lenguageOut : string = "";
  result: string[][] = [];
  resultOut : string = "";
  lenguageAux : string[] = [];

  addWord(word: string){
    this.lenguage.push(word);
    this.lenguageOut = this.lenguage.toString();
  }
  generateKleene(levelInput: number){
      this.resultOut = "L"+0+": "+"ε"+"\n";
      this.result.push(["ε"])
      for (let i = 1; i < levelInput+1; i++) {
        console.log("iteracion: "+i);
        if(i===1){
          this.result.push(this.lenguage);
          this.resultOut += "L"+i+": "+this.lenguage.toString()+"\n";
        }
        else{
          let idx = this.result[this.result.length-1].length   ;
          for(let j = 0; j < idx ; j++){
            for(let k = 0; k < this.lenguage.length; k++){
              this.lenguageAux.push(this.result[this.result.length-1][j]+"*"+this.lenguage[k])
              //console.log(this.result[this.result.length-1][j]+"*"+this.result[1][k]+" "+(this.result[idx].length)+" "+idx+" "+j+" "+k+"\n");
              
            }
            
          }
          this.result.push(this.lenguageAux);
          this.resultOut += "L"+i+": "+ this.lenguageAux.toString()+"\n";
          this.lenguageAux = [];
        }
        
      }
      
    
    

    
  }

}
