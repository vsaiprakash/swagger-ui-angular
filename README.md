# Swagger UI Angular

Steps to Install swagger-ui:
Install https://www.npmjs.com/package/swagger-ui
```
npm i swagger-ui
```

Add CSS style sheet for swagger ui to angular.json file:
```
{
  // ...
  "projects": {
    "swagger-ui-angular": {
      // ...
      "architect": {
        "build": {
         // ...
            "styles": [
              "node_modules/swagger-ui/dist/swagger-ui.css"
            ],
         },
       }
     }
   }
}
```

Now we need to add swaggerUI instance in ngAfterViewInit(){ }
```
import { Component, AfterViewInit, ElementRef } from '@angular/core';
import SwaggerUI from 'swagger-ui'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'swagger-ui-angular';
  constructor(private el: ElementRef) {
    console.log("App Constructor")
  }
  ngAfterViewInit() {
    const ui = SwaggerUI({
      dom_id: '#swagger-ui',
      url: 'assets/petstore.json'
    });
  }
}
```

template file:
```
<h2>{{title}}</h2>
<div id="swagger-ui">
  Swagger UI
</div>
```

References:
Feature
Reference Link
Example Project
https://github.com/agoncal/swagger-ui-angular6
SwaggerUI({   }) properties:
https://swagger.io/docs/open-source-tools/swagger-ui/usage/configuration/
Installation Steps
https://github.com/swagger-api/swagger-ui/blob/HEAD/docs/usage/installation.md
Themes to use for swagger-ui
https://github.com/ostranme/swagger-ui-themes


	
	
