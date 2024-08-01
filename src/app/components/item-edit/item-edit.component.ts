import {Component, signal, WritableSignal} from '@angular/core';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent {
  item: WritableSignal<any> = signal<any>(null)
  updateItem = signal<any | null>(null);
}

