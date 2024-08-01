// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-item-add',
//   templateUrl: './item-add.component.html',
//   styleUrls: ['./item-add.component.css']
// })
// export class ItemAddComponent {
//
// }

// src/app/item-add/item-add.component.ts
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Import HttpClient for HTTP requests

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent {
  item = {
    name: '',
    description: ''
  };

  constructor(private http: HttpClient) {}

  updateItem(): void {
    // Define your API endpoint here
    const apiUrl = 'http://localhost:2030/post'; // Replace with your actual API endpoint

    // Send a POST request with the item data
    this.http.post(apiUrl, this.item).subscribe(
      response => {
        console.log('Item submitted successfully:', response);
        // Optionally reset the form or provide feedback to the user
        this.item = { name: '', description: '' };
      },
      error => {
        console.error('Error submitting item:', error);
      }
    );
  }
}
