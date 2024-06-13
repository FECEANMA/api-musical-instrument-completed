import { Component, OnInit } from '@angular/core';
import { InstrumentComponent } from '../../instrument/instrument.component';
import { CrudComponent } from '../../crud/crud.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [InstrumentComponent, CrudComponent],
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
