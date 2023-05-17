import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-oplenguagesmodule',
  templateUrl: './oplenguagesmodule.component.html',
  styleUrls: ['./oplenguagesmodule.component.css']
})
export class OplenguagesmoduleComponent {
@Input() Word : string = '';
@Input() op: string = '';



lenguage1out: string = '';
lenguage2out: string = '';
arrayAux : string[] = [] ;

lenguage1 : string[] = [] ;
lenguage2 : string[] = [] ;
result  : string[] = [] ;
resultOut : string = "" ;

Addwordl1(word : string){
  this.lenguage1.push(word);
  this.lenguage1out = this.lenguage1.toString();
}
Addwordl2(word : string){
  this.lenguage2.push(word);
  this.lenguage2out = this.lenguage2.toString();
}
operationSelect(op : string){
  if(op == 'interseccion'){
    this.interseccion();
  }else if(op == 'diferencia'){
    this.diferencia();
  }else if(op == 'concatenacion'){
    this.concatenacion();
  }
  this.resultOut = this.result.toString();
}

interseccion(){
  
  for(let i = 0 ; i < this.lenguage1.length ; i++){
    console.log("iteracion interseccion "+i+ " "+this.lenguage2[i]);
    
    if(this.lenguage1.includes(this.lenguage2[i])){
      this.arrayAux.push(this.lenguage2[i]);
    }
  }
  this.result=this.arrayAux;
  this.arrayAux=[];

}
diferencia(){
  this.arrayAux = [];
  for(let i = 0 ; i < this.lenguage1.length ; i++){
    console.log("iteracion diferencia "+i);
    
    if(!this.lenguage2.includes(this.lenguage1[i])){
      console.log("borrado "+this.lenguage2[i]);
      
      this.arrayAux.push(this.lenguage1[i]);
    }
  }
  this.result=this.arrayAux;
  this.arrayAux=[];
}
concatenacion(){
  let lL1= this.lenguage1.length;
  for(let i = 0 ; i < lL1 ; i++){
    console.log("iteracion concatenacion L1 "+i+" "+this.lenguage1.length);
    for(let j = 0 ; j < this.lenguage2.length ; j++){
      console.log("iteracion concatenacion "+i+" "+j);
      
      this.arrayAux.push(this.lenguage1[i]+"*"+this.lenguage2[j]);
    }
  }
  this.result=this.arrayAux;
  this.arrayAux=[];
}
}
