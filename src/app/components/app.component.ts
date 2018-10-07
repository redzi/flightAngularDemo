import {Component, OnInit} from '@angular/core';
import {RouteHistoryService} from '../services/route-history.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(private routeHistoryService: RouteHistoryService) {
      this.routeHistoryService.loadRouting();
    }

    ngOnInit() {
  }
}
