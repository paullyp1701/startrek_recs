import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemContainer } from './components/item-container/item-container';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ItemContainer
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('startrek_recs');
}
