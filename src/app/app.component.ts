import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isHidden: boolean;

  ngOnInit() {
    this.isHidden = true;
  }

  toggleMenu() {
    this.isHidden = !this.isHidden;
  }
}
