// import { Component, OnInit } from '@angular/core';
// import { OperationService } from './operation.service';
//
// @Component({
//   selector: 'app-operation-list',
//   templateUrl: './operation-list.component.html',
//   styleUrls: ['./operation-list.component.css']
// })
// export class OperationListComponent implements OnInit {
//   operations: any[] = [];
//
//   constructor(private operationService: OperationService) { }
//
//   ngOnInit(): void {
//     this.loadOperations();
//   }
//
//   loadOperations(): void {
//     this.operationService.getOperations().subscribe(
//       data => this.operations = data,
//       error => console.error('Error fetching operations', error)
//     );
//   }
//
//   addOperation(operationData: any): void {
//     this.operationService.createOperation(operationData).subscribe(
//       () => this.loadOperations(),
//       error => console.error('Error adding operation', error)
//     );
//   }
//
//   updateOperation(id: string, updatedData: any): void {
//     this.operationService.updateOperation(id, updatedData).subscribe(
//       () => this.loadOperations(),
//       error => console.error('Error updating operation', error)
//     );
//   }
//
//   deleteOperation(id: string): void {
//     this.operationService.deleteOperation(id).subscribe(
//       () => this.loadOperations(),
//       error => console.error('Error deleting operation', error)
//     );
//   }
// }
