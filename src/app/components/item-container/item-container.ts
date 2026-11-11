import { Component, Input } from '@angular/core';
import { Episode } from '../../models/episode';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-item-container',
  imports: [CommonModule],
  templateUrl: './item-container.html',
  styleUrl: './item-container.css',
})
export class ItemContainer {

  @Input() episodeData!: Episode;

}
