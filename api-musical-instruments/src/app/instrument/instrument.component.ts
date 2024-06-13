import { Component, OnInit } from '@angular/core';
import { InstrumentService } from '../services/instrument.service';
import { InstrumentInterface } from '../interfaces/instrument.interface';

@Component({
  selector: 'app-instrument',
  standalone: true,
  imports: [],
  templateUrl: './instrument.component.html',
  styleUrl: './instrument.component.css'
})
export class InstrumentComponent implements OnInit{
  instrumentList: InstrumentInterface[]=[];
  constructor(private instrumentService: InstrumentService){}

ngOnInit(): void {
  this.getInstruments()
}
getInstruments(){
  this.instrumentService.getInstruments().subscribe({
    next: (result) => {
      this.instrumentList = result;
    },
    error: (err)=>{
      console.log(err);
    }
  })
}
}
