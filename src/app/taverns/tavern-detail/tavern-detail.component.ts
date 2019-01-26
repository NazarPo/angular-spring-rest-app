import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TavernService } from '../tavern.service';
import { TavernModel } from '../../tavern.model';

@Component({
  selector: 'app-tavern-detail',
  templateUrl: './tavern-detail.component.html',
  styleUrls: ['./tavern-detail.component.css']
})
export class TavernDetailComponent implements OnInit {

  tavern: TavernModel;

  constructor(
    private route: ActivatedRoute,
    private tavernService: TavernService,
    private location: Location
  ) {
  }

  ngOnInit() {
    this.getTavern();
  }

  getTavern(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tavernService.getTavern(id)
      .subscribe((tavern: TavernModel) => this.tavern = tavern);
  }

  goBack(): void {
    this.location.back();
  }

  deleteHeroFromTavern(heroId: number): void {
    this.tavernService.removeHeroFromTavern(this.tavern.id, heroId)
      .subscribe(() => {
        this.getTavern();
      });
  }
}
