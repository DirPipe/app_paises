
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() searchEvent = new EventEmitter<string>();
  @Output() sortEvent = new EventEmitter<string>();

  // meotodo de busqueda

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.searchEvent.emit(value);
  }

   // merodo de sort
  onSort(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.sortEvent.emit(value);
  }
}

