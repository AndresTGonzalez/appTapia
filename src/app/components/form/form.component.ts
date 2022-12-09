import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Examen } from 'src/app/models/examen.model';
import { ExamenesService } from 'src/app/services/examenes.service';

@Component({
  selector: 'tap-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // @Input() row: any;
  @Output() evento = new EventEmitter<any>();


  form: FormGroup;

  constructor(private servicio: ExamenesService) {
    this.form = new FormGroup({
      medico: new FormControl(''),
      paciente: new FormControl(''),
      area: new FormControl(''),
      tipo: new FormControl(''),
      fecha: new FormControl(''),
    });
  }

  onEvento() {
    this.evento.emit();
  }

  // loadExamen(row: any) {
  //   this.form.value.medico = row.medico;
  //   this.form.value.paciente = row.paciente;
  //   this.form.value.area = row.area;
  //   this.form.value.tipo = row.tipo;
  //   this.form.value.fecha = row.fecha;
  // }

  ngOnInit(): void {
  }

  loadExamen(row: any) {
    this.form.setValue({
      medico: row.medico,
      paciente: row.paciente,
      area: row.area,
      tipo: row.tipo,
      fecha: row.fecha,
    })
  }

  onSubmit() {
    const examen: Examen = {
      medico: this.form.get('medico')?.value,
      paciente: this.form.get('paciente')?.value,
      area: this.form.get('area')?.value,
      tipo: this.form.get('tipo')?.value,
      fecha: this.form.get('fecha')?.value,
    }
    this.servicio.createExamen(examen).subscribe(() => {
      this.onEvento();
      this.form.reset();
    });
    
  }

  onclick() {
    const examen: Examen = {
      medico: this.form.value.medico,
      paciente: this.form.value.paciente,
      area: this.form.value.area,
      tipo: this.form.value.tipo,
      fecha: this.form.value.fecha,
    }
    console.log(this.servicio.createExamen(examen).subscribe(() => {
      this.servicio.loadExamenes();
    }));
  }

}
