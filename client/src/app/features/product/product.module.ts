import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../../shared/shared.module';
import { GridModule } from '@progress/kendo-angular-grid';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductService, QueryService } from './shared/product.service';
import { ProductResolveService } from './shared/product-resolve.service';
import { NDDBreadcrumbModule } from '../../shared/ndd-ng-breadcrumb';
import { NDDTabsbarModule } from '../../shared/ndd-ng-tabsbar/component';
import { NDDTitlebarModule } from '../../shared/ndd-ng-titlebar/component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductDetailComponent } from './product-view/product-details/product-detail.component';
import { ProductEditComponent } from './product-view/product-edit/product-edit.component';

@NgModule({
    imports: [
        SharedModule,
        HttpClientModule,
        ProductRoutingModule,
        GridModule,
        NDDBreadcrumbModule,
        NDDTabsbarModule,
        NDDTitlebarModule,
    ],
    declarations: [
        ProductListComponent,
        ProductCreateComponent,
        ProductViewComponent,
        ProductDetailComponent,
        ProductEditComponent,
    ],
    providers: [
        ProductService,
        QueryService,
        ProductResolveService,
    ],
})
export class ProductModule {
    //
}
