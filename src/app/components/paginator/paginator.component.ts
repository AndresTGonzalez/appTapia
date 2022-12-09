import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'tap-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {

  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>()
  @Input() lenght!: number

  pageSize = environment.PAGE_SIZE
  currentPage = 0

  constructor(private paginator: MatPaginatorIntl) {
    paginator.itemsPerPageLabel = 'Elementos';
    paginator.nextPageLabel = 'Siguiente';
    paginator.firstPageLabel = 'Primera Página';
    paginator.lastPageLabel = 'Última Página';
    paginator.previousPageLabel = 'Anterior';
    paginator.getRangeLabel = (page: number, pageSize: number, length: number) => {
      if (length == 0 || pageSize == 0) { return `0 de ${length}`; }
      length = Math.max(length, 0);
      const startIndex = page * pageSize;
      const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} de ${length}`;
    };
  }

  ngOnInit(): void {
  }

  changePage(event: any) {
    this.currentPage = event.pageIndex ?? event.value
    this.onChangePage.emit(this.currentPage)
  }

}
