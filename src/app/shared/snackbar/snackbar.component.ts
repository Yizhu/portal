import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor() { }
  
  @Input()
  type: string;

  @Input()
  msg: string;

  show: string;
  
  ngOnInit() {
  }

  showBar() {
    this.show = this.type + " show";
    setTimeout(() => { this.show = null }, 3000);
  }

}
