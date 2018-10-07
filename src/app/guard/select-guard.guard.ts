import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {ExecutionCookieReaderService} from '../services/execution-cookie-reader.service';
import {SelectedOfferProviderService} from '../services/selected-offer-provider.service';

@Injectable({
  providedIn: 'root'
})
export class SelectGuardGuard implements CanActivate {

  constructor (private router: Router, private executionCookieService: ExecutionCookieReaderService,
               private selectedOfferProvider: SelectedOfferProviderService) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      try {
          this.executionCookieService.getExecution();
      } catch (error) {
          this.router.navigate(['search']);
          return false;
      }

      return !!this.selectedOfferProvider.selectedOffer;
  }
}
