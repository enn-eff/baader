// Import necessary modules and decorators from Angular core.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Import the AppRoutingModule, which manages the app's routing.
import { AppRoutingModule } from './app-routing.module';

// Import the main component and other components used in the app.
import { AppComponent } from './app.component';
import { UserListComponent } from './module-components/user-list/user-list.component';
import { ProductListComponent } from './module-components/product-list/product-list.component';
import { TableComponent } from './shared-components/table/table.component';

// Import the custom FilterPipe for filtering data in the app.
import { FilterPipe } from './filter.pipe';

@NgModule({
  // Declarations: List of components, pipes, and directives used in the app.
  declarations: [
    AppComponent,
    UserListComponent,
    ProductListComponent,
    TableComponent,
    FilterPipe, // Include the custom FilterPipe in declarations.
  ],

  // Imports: List of other modules the app depends on.
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],

  // Providers: Services, dependencies, or other injectables that the app may use.
  providers: [],

  // Bootstrap: The root component of the app to be loaded at startup.
  bootstrap: [AppComponent],
})
export class AppModule {}
