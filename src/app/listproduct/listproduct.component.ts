import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listproduct',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent implements OnInit {
  products = [
    {
      name: 'Product 1',
    },
    {
      name: 'Product 2',
    },
    {
      name: 'Product 3',
    },
    {
      name: 'Product 4',
    },
    {
      name: 'Product 5',
    },
    {
      name: 'Product 6',
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
