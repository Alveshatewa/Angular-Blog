import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input()
  photoCover:string = ""

  @Input()
  author:string = ""
  
  @Input()
  cardTtitle: string = ""

  @Input()
  CardDescription: string = ""
  
  constructor(){}

  /*ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }*/

}
