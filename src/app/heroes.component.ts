import {
  Component,
  Provider,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.components.css']
})

export class HeroesComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  heroes: Hero[];
  selectedHero: Hero;
  hero: Hero = {
    id : 1,
    name : 'Windstorm'
  };

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    // this.heroes = this.heroService.getHeroes(); // approach to fetching static data
    this.heroService.getHeroes().then(heroes => this.heroes = heroes); // approach for fetching Promise data
  }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
