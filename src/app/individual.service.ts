import { Injectable } from '@angular/core';
import { individual } from 'src/models/individual';
import { ALUMNOS } from 'src/morck-alumnos';
import { Observable, of } from 'rxjs';
import { IndividualComponent } from 'src/components/individual/individual.component';
import { IndividualDetailsComponent } from '../components/individual-details/individual-details.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

export class IndividualService {

  constructor(private http: HttpClient) { }
  private borrarURL = 'http://localhost:8080/individuos/borrar';
  private listaURL = 'http://localhost:8080/individuos/lista';
  private individualURL = 'http://localhost:8080/individuos/buscar'
  private editURL = 'http://localhost:8080/individuos/reemplazar'
  private newURL = 'http://localhost:8080/individuos/nuevo'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getIndividuals(): Observable<individual[]> {
    return this.http.get<individual[]>(this.listaURL)
      .pipe(catchError(this.handleError<individual[]>('getIndividuals, []')));
  }
  
  getIndividual(id: number): Observable<individual> {
    return this.http.get<individual>(`${this.individualURL}/${id}`);
  }
  updateIndividual(individuo : individual): Observable<any>{
    return this.http.put(`${this.editURL}/${individuo.id}`, individuo, this.httpOptions)
    .pipe(catchError(this.handleError<any>('updateIndividual')));
  }
  addIndividual(individuo : individual) : Observable<individual>{
    return this.http.post<individual>(this.newURL, individuo, this.httpOptions)
  }
  deleteIndividual(id:number): Observable<individual> {
    return this.http.delete<individual>(`$this.borrarURL/${id}`, this.httpOptions)
    .pipe(catchError(this.handleError<individual>('borrar individuo')))
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}