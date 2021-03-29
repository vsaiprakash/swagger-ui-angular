import { Component, AfterViewInit, ElementRef } from '@angular/core';
import SwaggerUI from 'swagger-ui';
import { CustomSwaggerLayoutPlugin } from './custom-swagger-layout';
import { CustomSwaggerPlugin } from './custom-swagger-plugin';
// const SwaggerUIWithCodeSnippet = require('./custom-swagger-layout');
// const MyComponentPlugin = require('./custom-swagger-layout');

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
      url: 'assets/petstore.json',
      // url: 'https://petstore.swagger.io/v2/swagger.json',
      // layout: "CustomSwaggerLayout",
      plugins: [
        // CustomSwaggerLayoutPlugin
        CustomSwaggerPlugin
      ]
    });
  }
}
