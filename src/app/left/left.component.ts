import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {
  categories = [
    {
      title: 'Mèo Vàng',
    },
    {
      title: 'Mèo Đỏ',
    },
    {
      title: 'Mèo Xanh',
    },
    {
      title: 'Mèo Cam',
    },
    {
      title: 'Mèo Timd',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
