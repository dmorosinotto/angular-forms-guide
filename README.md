# AngularFormsGuide

> The examples in this repository are used in [A practical guide to Angular Template-Driven Forms](https://timdeschryver.dev/blog/a-practical-guide-to-angular-template-driven-forms)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

---

# CORSO - LINK UTILI

## BASI

- [Documentazione](https://angular.io/guide/forms-overview#setting-up-the-form-model) ufficiale AngularForms 👎
- [Video](https://youtu.be/xYv9lsrV0s4?si=cbtJrYxA5DyjKlOT) Kara demo base confronto tra Form
- - [Slides Kara](https://docs.google.com/presentation/d/1rufZvQabEwpinabiMRq1rAa5nWR3ZpsTvw4snePAsjM/preview) + [Repo Kara](https://github.com/kara/ac-forms) -> [Stackbliz](https://stackblitz.com/github/kara/ac-forms?file=src%2Fapp%2Fapp.component.html)

## INTERNALS

- [Video](https://youtu.be/CD_t3m2WMM8?si=Pi-xYdSFb906YFFr) Kara sui meccanismi interni (updateOn, CVA, NgControl/Container + project Form)
- [Docs](https://angular.io/api/forms/AbstractControlDirective#subclasses) Vera struttura delle Direttive AbstractControlDirective (NgControl/ControlContainer) + [proprietà](https://angular.io/api/forms/AbstractControl) di AbsractControl (FormControl/FormGroup/FormArray)
- [Articolo](https://angularindepth.com/posts/1055/never-again-be-confused-when-implementing-controlvalueaccessor-in-angular-forms) su Implementing ControlValueAccessor

## TDF = Template Driven Forms

- [Video](https://youtu.be/L7rGogdfe2Q?si=tHm8IK_z6eYA_m6t) WardBell su TDF + esempio [Stackbliz](http://stackblitz.com/edit/angular-kkatri)
- [Guida](https://timdeschryver.dev/blog/a-practical-guide-to-angular-template-driven-forms) pratica a TemplateDrivenForm + Codice [validator universale](https://timdeschryver.dev/blog/a-generic-angular-template-driven-validator#revalidating-the-validator) TDF con funzione
- [video](https://www.youtube.com/watch?v=7koRJKiBQGA) AngularNation su stesso argomento TDF + video su [validointi](https://youtu.be/ckxCgNE3SPI?si=KDj7y0DGhjmfpZsF) x TDF

## RF = Reactive Forms

- [Tutorial](https://this-is-angular.github.io/angular-guides/docs/fundamentals/forms-and-validation-in-angular-projects) Reactive Angular Forms
- [Annuncio](https://blog.angular.io/angular-v14-is-now-available-391a6db736af#e02b) TypedReactiveForm rilascio NG14 + [documentazione](https://angular.io/guide/typed-forms) ufficiale

## LIBRERIE E EXTRA

- [Lib](https://github.com/ngneat/error-tailor) Gestione messaggi errore con
- Vere Forms dinamiche (RF+config) con [ngx-formly](https://formly.dev/) + video [corso free](https://egghead.io/courses/configuration-based-reactive-angular-forms-with-ngx-formly-v5-16b2) by Juri su come usarla
- [Corso](https://www.simplified.courses/complex-angular-template-driven-forms) Brecht advance-angular-form + stackblitz esempio [TDF+signal](https://stackblitz.com/~/github.com/simplifiedcourses/template-driven-forms) + validazione con [vest](https://vestjs.dev)
