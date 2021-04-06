import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { styles } from './top-bar.component.styles';



@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.styles.ts']
})
export class TopBarComponent implements OnInit {
  current = 'asdasdasdasdasdads';
  classes = styles;

  constructor(private route: ActivatedRoute) {
    console.log(route);
  }

  ngOnInit(): void {
    console.log(this.route);
  }
}
