import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MetaDataColumn } from '../interfaces/metacolumn.interface';
import { Examen } from '../models/examen.model';

@Injectable({
  providedIn: 'root'
})
export class ExamenesService {

  url = '/api/examenes/';
  

  records: Examen[] = [
    {
      medico: 'Dr. Juan Perez',
      paciente: 'Juan Perez',
      area: 'Cardiologia',
      tipo: 'Electrocardiograma',
      fecha: '2022-12-12'
    },
    {
      medico: 'Dr. Juan Perez',
      paciente: 'Juan Perez',
      area: 'Cardiologia',
      tipo: 'Electrocardiograma',
      fecha: '2022-12-12'
    },
  ]

  metaDataColumns: MetaDataColumn[] = [
    { field: "medico", title: "Médico" },
    { field: "paciente", title: "Paciente" },
    { field: "area", title: "Área" },
    { field: "tipo", title: "Tipo" },
    { field: "fecha", title: "Fecha" },
  ]

  constructor(private http: HttpClient) {
  }

  loadExamenes(): Observable<any> {
    return this.http.get(this.url);
  }

  loadExamen(id:string): Observable<any> {
    return this.http.get(this.url + id);
  }

  createExamen(examen: Examen): Observable<any> {
    return this.http.post(this.url, examen);
  }

  // updateAgency(agencia: Agency, id:string): Observable<any> {
  //   return this.http.put(this.url + id, agencia);
  // }

  deleteExamen(id: string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  getRecords(): any[] {
    return [...this.records];
  }

  getMetaDataColumns(): MetaDataColumn[] {
    return [...this.metaDataColumns];
  }

}
