import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Episode } from './models/episode';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})

export class DataImportService {
    constructor(private http: HttpClient) {}

    loadMediaData(): Observable<Episode[]> {

        return this.http.get('data/data.csv', {
            responseType: 'text'
        }).pipe(

            map(csvData => {

                const rows = csvData.split(/\r?\n/);

                // Skip header row
                const mediaData: Episode[] = rows.slice(1)
                    .filter(row => row.trim() !== '')
                    .map(row => {

                        const values = row.split(',').map(value => value.replace(/~/g, ','));

                        return {
                        category: values[0],
                        title: values[1],
                        season: Number(values[2]),
                        episodeNumber: values[3],
                        seriesName: values[4],
                        description: values[5],
                        imdbLink: values[6],
                        imgSource: values[7],
                        justification: values[8],
                        comments: values[9]

                    } as Episode;
                });

                return mediaData;
            })
        );
    }

}