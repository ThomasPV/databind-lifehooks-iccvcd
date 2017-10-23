import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

   @Output() evenEvent = new EventEmitter<{countE: number}>();
   @Output() oddEvent = new EventEmitter<{countO: number}>();
    public count: number = 0;
    public emitter;

  constructor() { }

  ngOnInit() {
  }


triggerEvent(){

    this.emitter= setInterval(()=>{
                    
                                    this.count+=Math.floor(Math.random()*10);
                                    if(this.count%2 == 0 ){
                                        
                                            this.evenEvent.emit({countE: this.count});
                                            console.log('even'+this.count);

                                    }else{
                                            this.oddEvent.emit({countO: this.count});
                                            console.log('odd'+this.count);

                                        }  
                            },1000);
            
}


    
    stopEvent(){ clearInterval(this.emitter); }


}
