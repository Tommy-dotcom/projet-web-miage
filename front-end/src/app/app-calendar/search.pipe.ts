import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class SearchPipe implements PipeTransform {
    transform(items: any[], searchFilters: string): any[] {
        if(!items) return [];

        if(!searchFilters) return items;

        return items.filter( it => {
            return it.title.toLowerCase().includes(searchFilters.toLowerCase()) ||
                it.happen_at.toLowerCase().includes(searchFilters.toLowerCase()) ||
                it.modalityName.toLowerCase().includes(searchFilters.toLowerCase()) ||
                it.creatorFirstName.toLowerCase().includes(searchFilters.toLowerCase()) ||
                it.creatorLastName.toLowerCase().includes(searchFilters.toLowerCase());
        });
    }
}
