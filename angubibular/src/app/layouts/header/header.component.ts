import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public checkStat = false;
  onClickToggle() {
    this.checkStat = false;
  }

  constructor() { }

  ngOnInit(): void {

    setTimeout(() => {
      this.checkStat = true;
    }, 1000);


  }

}
