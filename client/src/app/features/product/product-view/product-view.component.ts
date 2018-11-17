import { OnInit, OnDestroy, Component } from '@angular/core';
import { Product } from '../shared/product.model';
import { Subject } from 'rxjs/Subject';
import { ProductResolveService } from '../shared/product-resolve.service';

@Component({
    templateUrl: './product-view.component.html',
})
export class ProductViewComponent implements OnInit, OnDestroy {
    public product: Product;
    public infoItems: object[];
    public title: string;
    private ngUnsubscribe: Subject<void> = new Subject<void>();
    constructor(private resolver: ProductResolveService) {
    }

    public ngOnInit(): void {
        this.resolver.onChanges
            .takeUntil(this.ngUnsubscribe)
            .subscribe((product: Product) => {
                this.product = product;
                this.createProperty();
            });
    }
    public ngOnDestroy(): void {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    public createProperty(): void {
        this.title = this.product.code;
        const descriptionProduct: string =
           'Descrição:' + this.product.description;
        const valueDescription: string =
            'Valor Unitario: ' + this.product.unitaryValue;
        this.infoItems = [
            {
                value: valueDescription,
                description: valueDescription,
            },
            {
                value: descriptionProduct,
                description: descriptionProduct,
            },
        ];
    }
}
