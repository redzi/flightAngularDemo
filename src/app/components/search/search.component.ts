import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchOptionsService} from '../../services/search-options.service';
import {Search} from '../../model/Search';

const from = 'SYD';
const to = 'MEL';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private search: Search;
  private now: Date = new Date();

  @Output()
  private searchParameters: EventEmitter<Search> = new EventEmitter();

  constructor(private searchOptions: SearchOptionsService) {
    this.search = new Search(from, to, this.now);
  }

  emitSearchParameters() {
    this.searchParameters.emit(this.search);
  }


  ngOnInit() {
  }

}
