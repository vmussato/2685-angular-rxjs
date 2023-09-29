import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Item, LivrosResultado } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly API = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private hppt: HttpClient) { }

  buscar(valorDigitado: string): Observable<Item[]> {
    const params = new HttpParams().append('q', valorDigitado);

    return this.hppt.get<LivrosResultado>(this.API, { params }).pipe(
      tap(retornoAPI => console.log('Fluxo do tap', retornoAPI)),
      map(resultado => resultado.items),
      tap(resultado => console.log('fluxo após map', resultado))
    );
  }
}
