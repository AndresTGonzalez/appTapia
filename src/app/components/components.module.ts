import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { TableComponent } from './table/table.component';
import { ContainerComponent } from './container/container.component';
import { FormComponent } from './form/form.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    TableComponent,
    ContainerComponent,
    FormComponent,
    PaginatorComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatDividerModule,
    MatTableModule,
    FlexLayoutModule,
    MatPaginatorModule,
    PerfectScrollbarModule,
    MatCardModule,
    MatButtonModule,
    MatTooltipModule,
    ReactiveFormsModule
    
  ],
  exports: [
    HeaderComponent,
    TableComponent,
    ContainerComponent,
    FormComponent,
    PaginatorComponent,
    PerfectScrollbarModule,
    MatIconModule,
    MatTableModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
