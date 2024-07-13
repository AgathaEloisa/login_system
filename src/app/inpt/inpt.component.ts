import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inpt',
  templateUrl: './inpt.component.html',
  styleUrls: ['./inpt.component.css'],
  standalone: true,
  imports: []
})

export class InptComponent implements OnInit {
  // inptName valor del input
  @Input() name : string = '';
      // inptType tipo de input ej:text
  @Input() type :  string = 'text';
      // inptId id
  @Input() id : string = '';
      // inptErr mensaje de error
  @Input() errText : string = '';
      // inptPlaceholder placeholder
  @Input() placeholder : string = '';  
  constructor(
  ) {}

  ngOnInit(): void {}

}
