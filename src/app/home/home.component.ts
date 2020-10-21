import { Component, OnInit } from '@angular/core';
import { Parallax } from 'materialize-css';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Parallax.init(document.querySelectorAll('.parallax'));
  }

}
