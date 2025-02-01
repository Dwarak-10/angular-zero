import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from "./menu/menu.component";
import { MenuItemComponent } from "./menu/menu-item/menu-item.component";

@Component({
  selector: 'app-root',
  imports: [ MenuComponent, MenuItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
