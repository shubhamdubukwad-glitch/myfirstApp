import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i love angular..!!';

  skills:Array<string>=["html","css","js","angular","sass","boostrap","mongoDb"];

  fruits:Array<string>=["APPLE","MANGO","BANANA","ORANGE","GREEN APPLE"];

  city:Array<string>=["udgir","latur","pune","mumbai","thane"]
}

