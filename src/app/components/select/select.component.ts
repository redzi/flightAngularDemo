import { Component, OnInit } from '@angular/core';
import {SelectFlightService} from '../../services/select-flight.service';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor(private selectService: SelectFlightService) { }

  ngOnInit() {
  }

  getExecution() {
    this.selectService.getUrl('11111111');
  }
}
