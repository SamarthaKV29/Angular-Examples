import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styles: [`.details{
              display: block;
              margin-right: 100px;
              border-radius: 4px;
              background-color: #ccc;
              width: 12em;
              position: relative;
              left: -300px;
              -webkit-animation: slide 1s forwards;
              -webkit-animation-delay: 0.5s;
              animation: slide 1s forwards;
              animation-delay: 0.5s;
            }

            @-webkit-keyframes slide {
              100% { left: 0; }
            }

            @keyframes slide {
              100% { left: 0; }
            }

            .details::content{
              padding: 1%;
            }

            p .detail {
              color: white;
            }`]
})
export class HeroDetailComponent implements OnInit {
    constructor(
      private heroService: HeroService,
      private route: ActivatedRoute,
      private location: Location
    ) {}

    @Input() hero: Hero;

    ngOnInit(): void {
      this.route.paramMap
      .switchMap((params: ParamMap) => 
    this.heroService.getHero(+params.get('id'))).subscribe(hero => this.hero = hero);
    }

    goBack(): void{
      this.location.back();
    }
}

