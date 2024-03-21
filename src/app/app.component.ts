import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <nav>
      <h3>TEMPLATE FORM SAMPLES:</h3>
      <a routerLink="/01-input-types">InputTypes</a> |
      <a routerLink="/02-validation">Validation</a> |
      <a routerLink="/03-errors">Errors</a> |
      <a routerLink="/04-dynamic">Dynamic</a> |
      <a routerLink="/05-sub-form-components">SubForm</a> |
      <a routerLink="/06-wizard">Wizard</a> |
      <a routerLink="/00-wardbell">WardBell Heros</a> |
    </nav>
    <div class="container mx-auto">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {}
