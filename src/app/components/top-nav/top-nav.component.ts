import { Component } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent {
  
  goToLinkedIn() {
    const url = 'http://www.linkedin.com/in/zef-anderson-0998bab6';
    window.open(url, '_blank');
  }

  goToGitHub() {
    const url = 'http://github.com/ZefAnderson';
    window.open(url, '_blank');
  }

  sendEmail() {
    const email = 'bcdfezz@gmail.com';
    const mailtoLink = `mailto:${email}`;
    window.open(mailtoLink);
  }
}
