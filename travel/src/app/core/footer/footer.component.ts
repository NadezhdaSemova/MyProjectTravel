import { Component } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  goToInstagram(): void {
    window.open('https://www.instagram.com/');
  }

  goToFacebook(): void {
    window.open('https://www.facebook.com/')
  }

  goToYouTube(): void {
    window.open('https://www.youtube.com/')
  }

}
