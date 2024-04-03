// Import Injectable decorator from Angular core
import { Injectable } from '@angular/core';

// Define a class for the data service
@Injectable({
  providedIn: 'root' // This makes the service available globally in the application
})
export class DataService {
  
  // Define a method to return hardcoded array of objects (products)
  getProducts() {
    // Hardcoded array of products
    const products = [
      { id: 1, name: 'Product 1', price: 10.99 },
      { id: 2, name: 'Product 2', price: 20.99 },
      { id: 3, name: 'Product 3', price: 30.99 }
      // Add more products as needed
    ];

    return products; // Return the array of products
  }
}
