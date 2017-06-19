import { Component, Input } from '@angular/core';
import { Hero } from './hero';


const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice', detail: 'Mr. Nice is a epic hero with the ability to save the day with niceness.'},
  { id: 12, name: 'Narco',  detail: 'Nacro uses his mindwipe ability to erase memories.'},
  { id: 13, name: 'Bombasto',  detail:  'No bomb is too large for bombasta!'},
  { id: 14, name: 'Celeritas',  detail:  'He directs celestial beings to earth with his synchro power.'},
  { id: 15, name: 'Magneta',  detail:  'Using his magnetic force, he can imitate magneto!'},
  { id: 16, name: 'RubberMan',  detail: 'No party goes unsafely with this guy around!' },
  { id: 17, name: 'Dynama',  detail:  'Generating energy is his left hand rule!'},
  { id: 18, name: 'Dr IQ',  detail: 'This guy will catch you through his keen intellect!' },
  { id: 19, name: 'Magma',  detail: 'Using molten lava is his favorite technique.' },
  { id: 20, name: 'Tornado',  detail: 'He calls upon the wind to do his bidding! He is bringing the storm!' }
];




@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <hero-detail [hero]='selectedHero'></hero-detail>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" [class.selected]="hero === selectedHero" class='slide' (click)="onSelect(hero)">
      <span class="badge">{{hero.id}}</span> {{hero.name}}
    </li>
  </ul>
  
  `
})


export class AppComponent {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes = HEROES;
  onSelect(hero : Hero): void {
    this.selectedHero = hero;
  }
}

