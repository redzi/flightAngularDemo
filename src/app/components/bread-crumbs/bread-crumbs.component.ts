import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {BreadCrumb} from '../../model/navigation/BreadCrumb';
import {distinctUntilChanged, filter} from 'rxjs/internal/operators';
import {PageTitleService} from '../../services/page-title.service';
import {RouteHistoryService} from '../../services/route-history.service';
import {Observable} from 'rxjs';

const BREADCRUMB = 'breadcrumb';

@Component({
    selector: 'app-bread-crumbs',
    templateUrl: './bread-crumbs.component.html',
    styleUrls: ['./bread-crumbs.component.css']
})
export class BreadCrumbsComponent implements OnInit {

    public breadcrumbs: Array<BreadCrumb>;

    constructor(private routeHistoryService: RouteHistoryService, private pageTitleService: PageTitleService) {
        this.breadcrumbs = [];
    }

    ngOnInit() {
        this.routeHistoryService.getHistory()
            .subscribe((history: ActivatedRoute[]) => {
                this.breadcrumbs = this.generateBreadcrumbs(history);
                this.pageTitleService.emitPageTitle(this.breadcrumbs);
            });
    }

    generateBreadcrumbs(history: ActivatedRoute[]) {

        let url: string = '';
        let breadcrumbs: BreadCrumb[] = [];

        for (const route of history) {

            if (!(route && route.routeConfig && route.routeConfig.data && route.routeConfig.data[BREADCRUMB])) {
                continue;
            }

            const label = route.routeConfig.data[BREADCRUMB];
            const path = route.routeConfig.path;
            url = `${url}/${path}`;

            const breadCrumb: BreadCrumb = {
                label: label,
                url: url
            };

            breadcrumbs = [...breadcrumbs, breadCrumb];
        }

        return breadcrumbs;
    }
}
