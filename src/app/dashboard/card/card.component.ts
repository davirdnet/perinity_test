import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  colorButton = '';
  url = 'https://www.linkedin.com/in/davi-ribeiro-dias-b1abb04a/';

  constructor(
    private _dashboradService: DashboardService
  ) { }

  ngOnInit() {
  }

  onLike(card: any){
    card.likes++;
    this._dashboradService.incrementLike(card).subscribe();
    if (card.likes >= 5 && card.likes <= 10) {
      this.colorButton = 'primary';
    } else if (card.likes > 10) {
      this.colorButton = 'accent';
    }
  }

}
