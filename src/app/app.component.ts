import { Component, AfterViewInit } from '@angular/core';
import { Sidenav } from 'materialize-css';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'aero-site';
  ngAfterViewInit() {
    Sidenav.init(document.querySelectorAll('.sidenav'));
  }

}
