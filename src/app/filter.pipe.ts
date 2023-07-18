import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  /* PipeTransform interface requires the implementation of the transform method.
   This method takes an array of items and a search text as input and returns a filtered array.*/
  transform(items: any[], searchText: string): any[] {
    // If the input array or the search text is not provided, return the original array.
    if (!items || !searchText) {
      return items;
    }

    // Convert the search text to lowercase for case-insensitive searching.
    searchText = searchText.toLowerCase();

    // Filter the items array based on the search criteria.
    return items.filter((item) => this.searchInObject(item, searchText));
  }

  // A helper method to recursively search for the search text within nested objects.
  private searchInObject(item: any, searchText: string): boolean {
    // Loop through each property (key) in the current object (item).
    for (const key in item) {
      if (item.hasOwnProperty(key)) {
        const value = item[key];
        // If the property's value is an object, recursively search in that object.
        if (typeof value === 'object') {
          if (this.searchInObject(value, searchText)) {
            return true;
          }
        } else {
          /* If the property's value is not an object, convert it to a string
          and check if the search text is included in it (case-insensitive).*/
          const strValue = String(value).toLowerCase();
          if (strValue.includes(searchText)) {
            return true;
          }
        }
      }
    }

    // If the search text is not found in the current object or its nested objects, return false.
    return false;
  }
}
