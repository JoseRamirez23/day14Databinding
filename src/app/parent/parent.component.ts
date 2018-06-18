import { Component } from '@angular/core';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
//this is the text that will be display once Input into child
 childTitle :string = "Text passed to child";

 
}
