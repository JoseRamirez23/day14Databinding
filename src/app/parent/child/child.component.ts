//don't forget to put your input, output, eventemmitters, etc.
import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'child',
  //templateUrl: './child.component.html',
  template:`
  <h2>{{title}}</h2> 

  <button type="button" (click)="notifyParent()">Click me!</button>
  `,
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {
  //here you are telling it to take any value passed from parent 
  @Input() title : string;

  @Output() emitter = new EventEmitter<string>();
 
  newString:string ="It works";
  
  notifyParent(){
    this.emitter.emit(this.newString);

  }

  ngOnInit(){
    
  }
}
