import { Component } from '@angular/core';
import { KeywordsModel } from './scraper/keywords.model';
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
  Results: any;
  testList: string[] = [];
  user: any;

  validationBoxChecked() {
    const validationCheckbox = (document.getElementById('validation-tests').getAttribute('ng-model'));
    if (validationCheckbox) {
      console.log(true);
      return true;
    } else {
      return false;
    }
  }

  sendKeywordsToScraper() {
    const keyword = (<HTMLInputElement> document.getElementById('search1')).value;
    const keywordTwo = (<HTMLInputElement> document.getElementById('search2')).value;
    const keywords: string[] = [keyword, keywordTwo];
    console.log(keywords);
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
