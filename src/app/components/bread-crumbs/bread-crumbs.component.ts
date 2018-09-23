import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {BreadCrumb} from '../../model/navigation/BreadCrumb';
import {distinctUntilChanged, filter} from 'rxjs/internal/operators';
import {Subject} from 'rxjs';
import {PageTitleService} from '../../services/page-title.service';

const BREADCRUMB = 'breadcrumb';

@Component({
    selector: 'app-bread-crumbs',
    templateUrl: './bread-crumbs.component.html',
    styleUrls: ['./bread-crumbs.component.css']
})
export class BreadCrumbsComponent implements OnInit {

    public breadcrumbs: Array<BreadCrumb>;

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private pageTitleService: PageTitleService) {
        this.breadcrumbs = [];
    }

    ngOnInit() {
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                distinctUntilChanged()
            )
            .subscribe(event => {
                this.breadcrumbs = this.generateBreadcrumbs(this.activatedRoute.root);
                this.pageTitleService.emitPageTitle(this.breadcrumbs);
            });
    }

    generateBreadcrumbs(route: ActivatedRoute, url: string = '', breadCrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {

        for (const childRoute of route.children) {

            if ( !(childRoute.routeConfig && childRoute.routeConfig.data && childRoute.routeConfig.data[BREADCRUMB]) ) {
                return this.generateBreadcrumbs(childRoute, url, breadCrumbs);
            }

            const label = childRoute.routeConfig.data[BREADCRUMB];
            const path = childRoute.routeConfig.path;
            const nextUrl = `${url}/${path}`;

            const breadCrumb: BreadCrumb = {
                label: label,
                url: nextUrl
            };

            breadCrumbs = [...breadCrumbs, breadCrumb];

            if (childRoute.children.length === 0) {
                return breadCrumbs;
            }

            this.generateBreadcrumbs(childRoute, nextUrl, breadCrumbs);
        }
    }
}
