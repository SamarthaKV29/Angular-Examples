import { Component, Input, OnInit } from '@angular/core';
import { Hero } from './hero';
import { Router } from '@angular/router';
import { HeroService } from './hero.service';




@Component({
  selector: 'my-heroes',
  styleUrls: ['./heroes.component.css'],
  templateUrl: './heroes.component.html',
  providers: []

})


export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];
  constructor(
    private router: Router,
    private heroService: HeroService
  ) {}

  onSelect(hero : Hero): void {
    this.selectedHero = hero; 
  }
  getHeroes(): void{
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  ngOnInit(): void{
    this.getHeroes();
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}

