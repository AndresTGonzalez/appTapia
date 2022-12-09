import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormComponent } from 'src/app/components/form/form.component';
import { MetaDataColumn } from 'src/app/interfaces/metacolumn.interface';
import { ExamenesService } from 'src/app/services/examenes.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tap-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit {

  @Output() evento = new EventEmitter<any>();

  data: any[] = []
  records: any[] = []
  totalRecords = this.data.length
  metaDataColumns: MetaDataColumn[] = []

  constructor(private servicio: ExamenesService, private snackBar: MatSnackBar) {
    this.records = this.servicio.getRecords()
    this.metaDataColumns = this.servicio.getMetaDataColumns()
    this.loadExamenes()
  }

  onEvento(row: any) {
    this.evento.emit(row);
  }

  recargar() {
    this.loadExamenes()
  }

  onSubmit() {
    console.log("hello");
  }

  loadExamenes() {

    console.log(this.servicio.loadExamenes().subscribe((data: any) => {
      this.records = data
      this.totalRecords = this.records.length
      this.changePage(0)
    }, (error) => {
      console.log(error)
    }
    )
    )
  }

  loadExamen() {

  }

  changePage(page: number) {
    const pageSize = environment.PAGE_SIZE;
    const skip = pageSize * page;
    this.data = this.records.slice(skip, skip + pageSize);
  }

  showMessage(message: string, duration: number = 5000) {
    this.snackBar.open(message, '', { duration });
  }

  delete(row: any) {
    this.servicio.deleteExamen(row._id).subscribe(() => {
      this.loadExamenes();
      this.showMessage("Examen eliminado");
    });
  }

  onclick() {
    console.log("hello");
  }

  ngOnInit(): void {
  }

}
