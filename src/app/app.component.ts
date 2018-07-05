import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {
  pdfSrc = '../assets/test.pdf';

  @ViewChild('scrollOne') scrollOne: ElementRef;
  @ViewChild('scrollTwo') scrollTwo: ElementRef;

  updateScroll() {
    const scrollOne = this.scrollOne.nativeElement as HTMLElement;
    const scrollTwo = this.scrollTwo.nativeElement as HTMLElement;

    // do logic and sets
    scrollTwo.scrollTop = scrollOne.scrollTop;
  }
}
