import { Component, OnInit } from '@angular/core';
import {TestUtil} from './util/Function-Util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  ngOnInit () {
    TestUtil.canvasUtil();
  }
}

