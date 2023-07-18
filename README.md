# AngularTask

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Git Clone

Clone the repository.

## NPM Install

Run `npm install` for installing the required npm dependencies.

## Run Application

Run `ng serve` for serving the application.

##

# Brief Explanation

- Created two components for user and product lists.

- Created one dynamic table component for both components that takes columns and data as an input.

- The TableComponent is a versatile Angular component that can be used to display, sort, paginate, and edit tabular data with support for nested properties. Its flexibility makes it a valuable asset in projects where tabular data presentation and manipulation are required.

- FilterPipe is a custom Angular pipe designed to provide case-insensitive filtering for an array of items. It allows users to search for specific text across all properties of the items, including properties within nested objects. This can be useful for implementing search functionality in Angular applications, particularly in scenarios where complex data structures require comprehensive searching capabilities.

- Interfaces are used to ensure consistent and type-safe data handling in an Angular application. They provide a clear structure for objects representing users, table columns, products, and product ratings, making it easier to work with these objects and enforce data integrity throughout the application.

- FetchTableDataService is an Angular service that encapsulates the data-fetching logic for two different types of data: users and products. It communicates with the server APIs through HTTP GET requests and returns the fetched data as observables. Other components in the Angular application can inject this service and subscribe to the returned observables to obtain the data and work with it asynchronously in their templates or logic.
