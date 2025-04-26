

interface List{
  id:number,
  img:string,
  title:string,
  dec:string,
  link:string
}



import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-child-list-component',
  imports: [],
  templateUrl: './child-list-component.component.html',
  styleUrl: './child-list-component.component.css'
})
export class ChildListComponentComponent {

  @Input('list') list!:List;

  constructor(){

  }

}
