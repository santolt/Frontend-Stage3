import { Injectable } from '@angular/core';
import { Card } from 'src/app/interfaces/card.interface';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private _cards: Card[] = [
    {
      imageNumber: '1',
      color: '#d4e2fc',
      text: 'Hiciste <br> <b>30</b> <br> viajes con la app de Uber. <br> Tú marcaste el camino pero te ayudamos a conseguir a alguien detrás del volante.'
    },
    {
      imageNumber: '2',
      color: '#ffe3ac',
      text: 'Has viajado más de <br> <b>178</b> <br> kilómetros. <br> Una gran forma de llegar a tus diferentes destinos.'
    },
    {
      imageNumber: '3',
      color: '#d2e8ec',
      text: 'Pasaste <br> <b>472</b> <br> minutos en el camino. <br> ¿Disfrutaste del paisaje?'
    },
    {
      imageNumber: '4',
      color: '#e3ddf2',
      text: '2021 fue el año del <br> <b>Logan</b> <br> De hecho, fue el vehículo que <br> más veces usaste.'
    },
    {
      imageNumber: '5',
      color: '#e0ecd2',
      text: '<b>Edwar Milton</b> <br> fue tu socio conductor personal. <br> Es broma! Edwar Milton fue el nombre más común.'
    },
    {
      imageNumber: '6',
      color: '#d2e8ec',
      text: 'Viajaste más en <br> <b>Domingo</b> <br> Quiere decir que hubo  <br> más diversión (o más trabajo).'
    }
  ];

  get cards(): Card[] {
      return [...this._cards];
  }

  constructor() {}

}
