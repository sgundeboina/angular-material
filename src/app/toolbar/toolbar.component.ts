import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() deviceXs: boolean | undefined;

  showMenu: boolean | undefined;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    if (this.deviceXs) {
      this.showMenu = true;
    } else {
      this.showMenu = false;

    }
  }

  toggleMenue(): void {
    this.showMenu = !this.showMenu;
  }
}
