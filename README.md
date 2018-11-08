# Goldclicker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.4. It can be viewed for a limited time at [http://tests.pluto.probono.net/](http://tests.pluto.probono.net/).

## Code Structure

The root component for Goldclicker is `goldclick.component.ts`, with the corresponding template by the same name but with an `html` extension. Each country listing is found in the `listing.component.html` template file. The `listings` folder contains code for each country listing, including a number of model objects.

Normally Angular apps use their own custom element names. However, in this case the widget is a pure table, so I opted to couch the data in a traditional html table but with custom attributes for the Angular templates. This is semantically correct, and the benefits of this better confirm to WCAG 2.0, as well as have an impact on SEO. 

While reviewing and illucidating the code with comments, I was struck how well strict typing helps to document your code.

### Sorting

I implemented the sorting algorithms listed in the problem description by first checking the column attribute (number of gold, or number total, etc.) and then comparing their weighted scores. To do this I hashed together a number where each type of medal was added to a power of 10, at the intervals one, one thousand, and one million. Added together this allows one to simply compare a large number that has the different medal wins baked in. This means that if, when sorting total medals, the total is a tie, and the number of golds is also a tie, then it goes to silver, and then to bronze. 

## Fonts

The font for the country codes might be Nimbus Sans Round Heavy, which is $19.95 on myfonts.com. However, probably one of the Helvetica-type fonts would suffice. For this I went with Google's free Roboto in three weights.

## Angular

To see the Angular system in all its glory, first install the `@angular/cli` package globally via npm. Then `npm install` in the root of the project folder (where the `package.json` file is located.) 

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
