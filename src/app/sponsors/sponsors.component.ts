import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.scss']
})
export class SponsorsComponent implements OnInit {
  sponsors;
  featured_sponsors = [];
  other_sponsors = [];

  constructor(
    private _api: ApiService
  ) { }

  ngOnInit() {
    let obs = this._api.getSponsors()
    obs.subscribe(data => {
      // Pulls Sponsors from DB
      this.sponsors = data['data'];
      this.sortSponsors();
        
    })
  }
  // Sorts Sponsors by tier
  sortSponsors(){
    for(var i = 0; i < this.sponsors.length; i++){
      if(this.sponsors[i].attributes.featured == true){
        this.featured_sponsors.push(this.sponsors[i].attributes);
      } else {
        this.other_sponsors.push(this.sponsors[i].attributes);
      }
    }
  }


}
