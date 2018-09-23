import { Component, OnInit } from '@angular/core';
import {PageTitleService} from '../../services/page-title.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private pageTitle: string = '';

  constructor(private pageTitleService: PageTitleService) {  }

  ngOnInit() {
    this.pageTitleService.getPageTile()
        .subscribe(pageTitle => this.pageTitle = pageTitle);
  }

}
