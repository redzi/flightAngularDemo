import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {BreadCrumb} from '../model/navigation/BreadCrumb';

@Injectable({
  providedIn: 'root'
})
export class PageTitleService {

  private subject: Subject<string> = new Subject<string>();

  constructor() { }

  emitPageTitle (breadCrumbs: Array<BreadCrumb>) {
    const lastPageBreadcrumb: BreadCrumb = breadCrumbs.slice(-1)[0];
    this.subject.next(lastPageBreadcrumb.label);
  }

  getPageTile (): Observable<string> {
    return this.subject.asObservable();
  }
}
