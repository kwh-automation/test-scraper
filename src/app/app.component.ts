import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ruby Test Scraper';
  Results: any;
  sendKeywordsToScraper() {
    const keyword = (<HTMLInputElement> document.getElementById('search1')).value;
    const keywordTwo = (<HTMLInputElement> document.getElementById('search2')).value;
    const keywords = [keyword, keywordTwo];
    console.log(keywords);
  }

  copyTestResults() {
    const copyText = (<HTMLInputElement> document.getElementById('results'));
    copyText.select();
    console.log(copyText);
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    alert('Copied test results: ' + copyText.value);
  }
}
