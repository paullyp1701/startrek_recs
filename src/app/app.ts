import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemContainer } from './components/item-container/item-container';
import { DataImportService } from './data-import-service';
import { Episode } from './models/episode';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ItemContainer,
    NgFor,
    NgIf
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit {
  protected readonly title = signal('startrek_recs');

  episodes: Episode[] = [];

  constructor(private dataImportService: DataImportService) {}

  ngOnInit(): void {
    this.dataImportService.loadMediaData().subscribe(data => {

        this.episodes = data;

        console.log("App episodes:", this.episodes);
        console.log("Third episode:", this.episodes[2]);

    });

  }
}