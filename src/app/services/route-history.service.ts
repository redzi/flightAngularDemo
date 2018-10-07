import { Injectable } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/internal/operators';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteHistoryService {

  private history: Array<ActivatedRoute> = [];
  private subject: Subject<ActivatedRoute[]> = new Subject<ActivatedRoute[]>();

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  loadRouting(): void {
    this.router.events
        .pipe(
            filter(event => event instanceof NavigationEnd),
            map(event => this.activatedRoute.root)
        )
        .subscribe(
            (root) => {
              if (root.firstChild.snapshot.data['breadcrumb'] && root.root.firstChild.snapshot.data['breadcrumb'] === 'Search Page') {
                this.clearHistory();
              }
              this.history = [...this.history, root.firstChild];
              this.subject.next(this.history);
      });
  }

  getHistory(): Observable<Array<ActivatedRoute>> {
    return this.subject.asObservable();
  }

  private clearHistory() {
      this.history = [];
  }
}
