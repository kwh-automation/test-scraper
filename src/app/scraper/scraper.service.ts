import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ScraperService {
  constructor(private httpClient: HttpClient) {
  }

  keywordsURL = 'http://heslopk19:8083/keywords';

  getKeywords(keywords: string[]): Observable<string[]> {
    return this.httpClient.get<string[]>(
      this.keywordsURL + '/' + keywords[0] + '/' + keywords[1] + '/' + keywords[2] + '/' + keywords[3] + '/' + keywords[4]);
  }
}
