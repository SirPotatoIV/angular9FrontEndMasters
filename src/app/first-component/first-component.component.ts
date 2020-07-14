import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  name = "jake";
  themeColor = "red";
  updateColor = function(){
    console.log("updated color!!")
    this.themeColor = 'salmon';
  }

  constructor() {}

  ngOnInit(): void {
  }

}
