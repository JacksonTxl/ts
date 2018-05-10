<<<<<<< HEAD
import { Component } from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
import {TestUtil} from './util/Function-Util';
>>>>>>> 1c4bd6526524447343b4e50a1f3ead8f42837b88

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
<<<<<<< HEAD
export class AppComponent {
  title = 'app';
}
=======
export class AppComponent implements OnInit {
  ngOnInit () {
    TestUtil.canvasUtil();
  }
}

>>>>>>> 1c4bd6526524447343b4e50a1f3ead8f42837b88
