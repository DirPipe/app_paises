import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { CountryListComponent } from './components/country-list/country-list.component';

@Component({
  selector: 'app-root', // Selector del componente raíz
  standalone: true, 
  imports: [
    CommonModule,
    
    SearchBarComponent, // Importa el componente de la barra de búsqueda
    CountryListComponent // Importa el componente de la lista de países
  ],
  templateUrl: './app.component.html', // Ruta al archivo HTML del componente
  styleUrls: ['./app.component.css'] // Ruta al archivo CSS del componente
})
export class AppComponent {
  // Referencia al componente CountryListComponent
  @ViewChild(CountryListComponent) countryListComponent!: CountryListComponent;

  // manejamos el evento de busqueda
  handleSearch(term: string): void {
    if (this.countryListComponent) {
      this.countryListComponent.onSearch(term);
    }
  }

  // manejamos el evento de ordenacion
  handleSort(property: string): void {
    if (this.countryListComponent) {
      this.countryListComponent.onSort(property);
    }
  }
}

