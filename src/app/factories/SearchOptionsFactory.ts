import {SearchOptionsService} from '../services/search-options.service';

export function createSearchOptionsFactory() {
    return new SearchOptionsService('SYS', 'MEL', new Date());
}
