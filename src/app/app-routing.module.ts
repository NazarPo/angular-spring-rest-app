import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './heroes/hero-detail/hero-detail.component';
import { GuildsComponent } from './guilds/guilds.component';
import { GuildDetailComponent } from './guilds/guild-detail/guild-detail.component';
import { TavernsComponent } from './taverns/taverns.component';
import { TavernDetailComponent } from './taverns/tavern-detail/tavern-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'guilds', component: GuildsComponent },
  { path: 'heroes/:id', component: HeroDetailComponent },
  { path: 'guilds/:id', component: GuildDetailComponent },
  { path: 'taverns', component: TavernsComponent },
  { path: 'taverns/:id', component: TavernDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
