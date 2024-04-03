import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/dataservice.service';

@Component({
  selector: 'app-dataservice',
  templateUrl: './dataservice.component.html',
  styleUrl: './dataservice.component.css'
})
export class DataserviceComponent implements OnInit {

    products: any[] = []; // Array to store products
  
    constructor(private dataService: DataService) { }
  
    ngOnInit(): void {
      // Call the getProducts() method of DataService to fetch products
      this.products = this.dataService.getProducts();
    }
  
  }

