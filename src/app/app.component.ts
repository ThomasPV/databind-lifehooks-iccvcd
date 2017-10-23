import { Component } from '@angular/core';

 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    
   evenStack:{value:number}[]=[];
   oddStack:{value:number}[]=[];
    
    evenCountAdd(evenData){
        this.evenStack.push({value:evenData.countE});
        console.log();
    }
    oddCountAdd(oddData){
        this.oddStack.push({value:oddData.countO});
        console.log(oddData.countO);
    }
}
