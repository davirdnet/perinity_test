import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cards: any = [];
  loading = true;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.getCards();    
  }

  getCards() {
    this.httpClient.get('/api/skills').subscribe(
        (ret: Observable<any>) => {
          this.cards = ret;
          this.loading = false;
        });
    
  }

}
