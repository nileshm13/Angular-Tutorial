import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopMenuComponent } from './header/top-menu/top-menu.component';
import { MainMenuComponent } from './header/main-menu/main-menu.component';
import { TopHeaderComponent } from './top-header/top-header.component';
import { ContainerComponent } from './container/container.component';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductListComponent } from './container/product-list/product-list.component';
import { ProductComponent } from './container/product-list/product/product.component';
import { FilterComponent } from './container/product-list/filter/filter.component';
import { ProductDetailsComponent } from './container/product-details/product-details.component';
import { NgTemplateExampleComponent } from './container/ng-template-example/ng-template-example.component';
import { NgContainerExampleComponent } from './container/ng-container-example/ng-container-example.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopMenuComponent,
    MainMenuComponent,
    TopHeaderComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FilterComponent,
    ProductDetailsComponent,
    NgTemplateExampleComponent,
    NgContainerExampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
