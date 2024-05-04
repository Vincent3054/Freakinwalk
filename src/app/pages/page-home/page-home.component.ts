import { Component } from '@angular/core';
import { SplitmediaTextComponent } from './../../shared/compoents/splitmedia-text/splitmedia-text.component';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [SplitmediaTextComponent],
  templateUrl: './page-home.component.html',
  styleUrl: './page-home.component.scss'
})
export class PageHomeComponent {
  images = [
    "../../../assets/images/visual3.png",
    "../../../assets/images/visual1.png",
    "../../../assets/images/visual2.png"
  ];
  currentIndex = 1; // 預設顯示 "視覺圖一"，即 index 1

  changeImage(direction: string): void {
    if (direction === 'next') {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    } else if (direction === 'prev') {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    }
    this.updateImageSrc();
  }

  updateImageSrc(): void {
    const imageElement = document.querySelector('.visual-img') as HTMLImageElement;
    if (imageElement) {
      imageElement.src = this.images[this.currentIndex];
    }
  }
}
