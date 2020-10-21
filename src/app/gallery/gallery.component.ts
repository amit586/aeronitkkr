import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Materialbox } from 'materialize-css';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit, AfterViewInit  {

  constructor() { }

  ngOnInit() {

  }
  ngAfterViewInit() {
    Materialbox.init(document.querySelectorAll('.materialboxed'));
  }
}
