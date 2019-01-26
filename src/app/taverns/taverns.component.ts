import {Component, OnInit} from '@angular/core';
import {TavernModel} from '../tavern.model';
import {TavernService} from './tavern.service';

@Component({
  selector: 'app-taverns',
  templateUrl: './taverns.component.html',
  styleUrls: ['./taverns.component.css']
})
export class TavernsComponent implements OnInit {

  taverns: TavernModel[];

  constructor(private tavernService: TavernService) {
  }

  ngOnInit() {
    this.getTaverns();
  }

  getTaverns(): void {
    this.tavernService.getTaverns()
      .subscribe((taverns: TavernModel[]) => this.taverns = taverns);
  }

  deleteTavern(id: number): void {
    this.tavernService.deleteTavern(id)
      .subscribe(() => this.getTaverns());
  }
}
