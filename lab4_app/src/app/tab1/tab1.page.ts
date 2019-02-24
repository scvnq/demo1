import { Component, ElementRef, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

 @ViewChild('keyword')keywords: ElementRef;
 constructor(private _http: HttpClient) {
 }
 keywordValue: any;
 itemList = [];

  getInfo() {
    this.keywordValue = this.keywords.nativeElement.value;
      console.log(this.keywordValue);
    if (this.keywordValue !== null) {
      this._http.get('https://kgsearch.googleapis.com/v1/entities:search?query=' + this.keywordValue + '&key=AIzaSyDOtZXlT2Wea6cR0rZWaxsR2tlFHsiiKTE&limit=1&indent=True')
          .subscribe( (data:any)=>{
          console.log(data);
              console.log(data.itemListElement[0].result.description);
              console.log(data.itemListElement[0].result.image.contentUrl);
              console.log(data.itemListElement[0].result.detailedDescription.articleBody);
          for (var i=0; i < data.itemListElement.length;i++) {
            this.itemList[i] = {
              "name": data.itemListElement[0].result.description,
              "icon": data.itemListElement[0].result.image.contentUrl,
              "des": data.itemListElement[0].result.detailedDescription.articleBody,
              "txt": "https://stream.watsonplatform.net/text-to-speech/api/v1/synthesize?username=f61d1286-72ec-4d67-a0a2-16969a62acac&password=4AmGC8jSSy5G&text="+ data.itemListElement[i].result.detailedDescription.articleBody +""
            }
              console.log(this.itemList[i].name);
              console.log(this.itemList[i].icon);
              console.log(this.itemList[i].des);
              console.log(this.itemList[i].txt);
          }


          });
    }
  }



}
