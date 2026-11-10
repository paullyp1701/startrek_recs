import { Component, Input } from '@angular/core';
import { Episode } from '../../models/episode';

@Component({
  selector: 'app-item-container',
  imports: [],
  templateUrl: './item-container.html',
  styleUrl: './item-container.css',
})
export class ItemContainer {

  @Input() episodeData!: Episode;

}
