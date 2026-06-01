import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';
import { BigCardComponent } from '../../components/big-card/big-card.component';
import { SmallCardComponent } from '../../components/small-card/small-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, MenuTitleComponent, BigCardComponent, SmallCardComponent],
  templateUrl: './home.component.html'
})
export class HomeComponent {}
