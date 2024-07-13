import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { InptComponent } from '../inpt/inpt.component';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
  standalone: true,
  imports: [FormsModule, InptComponent],
})
export class FormularioComponent implements OnInit {
  InptName: string = 'title';
  InptType: string = 'title'
  InptId: string = 'title'
  InpterrText: string = 'title';
  InptPlaceholder: string = 'title'; 

  constructor() { }

  ngOnInit(): void {
  }

}
