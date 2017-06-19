import { Component, Input } from '@angular/core';
import { Hero } from './hero';
@Component({
  selector: 'hero-detail',
  template: `
  <h2 *ngIf="hero">{{hero.name}} details!</h2>
  
  <div class="details" *ngIf="hero">
    <label>Name: </label>
    <input [(ngModel)]="hero.name" placeholder="name">
    <p class="detail"> {{hero.detail}} </p>
  </div>`
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}