import { Component } from '@angular/core';
import {ScraperService} from './scraper/scraper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private scraperService: ScraperService) {

  }
  title = 'Ruby Test Scraper';
  testList: string[] = [];
  keyword = '';
  keywordTwo = '';
  validation = true;
  functional = true;
  testPaths = false;

  sendKeywordsToScraper() {
    let validationString;
    let functionalString;
    let testPathString;

    if (this.validation) {
      validationString = 'true';
    } else {
      validationString = 'false';
    }
    if (this.functional) {
      functionalString = 'true';
    } else {
      functionalString = 'false';
    }
    if (this.testPaths) {
      testPathString = 'true';
    } else {
      testPathString = 'false';
    }
    const keywords: string[] = [this.keyword, this.keywordTwo, validationString, functionalString, testPathString];
    this.scraperService.getKeywords(keywords).subscribe(lst => this.testList = lst);
  }

  copyTestResults() {
    const copyText = document.getElementById('results') as HTMLTextAreaElement;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Copied test results: ' + copyText.value);
  }
}
