# CrgEvents

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Publish to Github pages
Run the following commands

 `ng build --prod --base-href "/CRGEvents"`
 
 `ngh -branch=gh-pages`
 
## Deploy in cPanel

In order to deploy to cPanel, go to:
    
    1. https://www.romarg.ro/cont-client/ and login
    2. Navigate to Gazduire -> Gazduire Enduser and open crgevents.ro
    3. Click on access cPanel
    4. Go to File Manager, open public_html
    5. Run locally ng build --prod
    6. Create zip out if dist folder
    7. In cPanel, delete everything but cgi_bin and .htaccess
    8. In cPanel, click upload and select the prev created zip
    9. Extract archive in public_html folder
    10. DONE
