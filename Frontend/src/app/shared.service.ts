import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIUrl = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }

  //Eps
  getEpsList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/eps/');
  }

  addEps(val: any) {
    return this.http.post(this.APIUrl + '/eps/', val);
  }

  updateEps(val: any) {
    return this.http.put(this.APIUrl + '/eps/', val);
  }

  deleteEps(val: any) {
    return this.http.delete(this.APIUrl + '/eps/' + val);
  }

  //Rol
  getRolList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/rol/');
  }

  addRol(val: any) {
    return this.http.post(this.APIUrl + '/rol/', val);
  }

  updateRol(val: any) {
    return this.http.put(this.APIUrl + '/rol/', val);
  }

  deleteRol(val: any) {
    return this.http.delete(this.APIUrl + '/rol/' + val);
  }

  //Usuario
  getUsuarioList(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/usuario/');
  }

  addUsuario(val: any) {
    return this.http.post(this.APIUrl + '/usuario/', val);
  }

  updateUsuario(val: any) {
    return this.http.put(this.APIUrl + '/usuario/', val);
  }

  deleteUsuario(val: any) {
    return this.http.delete(this.APIUrl + '/usuario/' + val);
  }

  getAllEpsNombres(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/eps/');
  }

  getAllRolNombres(): Observable<any[]> {
    return this.http.get<any[]>(this.APIUrl + '/rol/');
  }
}
