import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-list', // Selector del componente de la lista de países
  standalone: true, // Indica que es un componente independiente
  imports: [CommonModule, HttpClientModule], // Importa módulos necesarios
  templateUrl: './country-list.component.html', // Ruta al archivo HTML del componente
  styleUrls: ['./country-list.component.css'] // Ruta al archivo CSS del componente
})
export class CountryListComponent implements OnInit {
  countries: any[] = []; // Almacena la lista de todos los países
  filteredCountries: any[] = []; // Almacena la lista de países filtrados

  constructor(private countryService: CountryService) { }

  // Método de inicialización del componente
  ngOnInit(): void {
    // Obtiene la lista de países del servicio
    this.countryService.getCountries().subscribe(data => {
      this.countries = data;
      this.filteredCountries = data;
    });
  }

  // Filtra la lista de países según el término de búsqueda
  onSearch(term: string): void {
    this.filteredCountries = this.countries.filter(country =>
      country.name.common.toLowerCase().includes(term.toLowerCase())
    );
  }

  // Ordena la lista de países según la propiedad especificada
  onSort(property: string): void {
    this.filteredCountries.sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });
  }
}

