import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    searchText = searchText.toLowerCase();

    return items.filter(item => this.searchInObject(item, searchText));
  }

  private searchInObject(item: any, searchText: string): boolean {
    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        const value = item[key];
        if (typeof value === 'object') {
          // Recursively search in nested objects
          if (this.searchInObject(value, searchText)) {
            return true;
          }
        } else {
          // Convert value to string and search for searchText
          const strValue = String(value).toLowerCase();
          if (strValue.includes(searchText)) {
            return true;
          }
        }
      }
    }

    return false;
  }
}
