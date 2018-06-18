//don't forget to put your input, output, eventemmitters, etc.
import { Component, Input  } from '@angular/core';

@Component({
  selector: 'child',
  //templateUrl: './child.component.html',
  template:`
  <h2>{{title}}</h2> 
  `,
  styleUrls: ['./child.component.css']
})

export class ChildComponent {
  //here you are telling it to take any value passed from parent 
  @Input() title : string;
 
}
