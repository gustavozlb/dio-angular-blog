import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input() 
  photoCover: string = "";
  @Input() 
  cardTitle: string = "";
  @Input() 
  cardDescription: string = "";
  @Input() 
  Id: string = "0";
}
