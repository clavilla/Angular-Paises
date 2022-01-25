import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebaunce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.debouncer//Emite el valor 300 ms despues que la persona dejo de escribir
      .pipe(debounceTime(300))
      .subscribe( valor => {
      this.onDebaunce.emit(valor);
    });
  }

  buscar() {
    this.onEnter.emit( this.termino );

  }

  teclaPresionada() {
    this.debouncer.next( this.termino );
  }

  constructor() { }




}
