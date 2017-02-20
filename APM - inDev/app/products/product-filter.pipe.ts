import { PipeTransform, Pipe } from '@angular/core'; //Imported modules

import { IProduct } from './product';

@Pipe({ //Decoration
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform { //Class declaration, Implementing interface

    transform( value : IProduct[], filterBy : string ) : IProduct[] {
            filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
            return filterBy ? value.filter(( product : IProduct ) =>
                product.productName.toLocaleLowerCase().indexOf( filterBy ) !== -1 ) : value;
    }
}
