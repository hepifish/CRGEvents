import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  private entries: GalleryModel[] = [];
  constructor() { }

  ngOnInit() {
    this.entries.push({size: 6, alias: 'travel'});
    this.entries.push({size: 7, alias: 'balloon'});
    this.entries.push({size: 9, alias: 'traditional'});
    this.entries.push({size: 6, alias: 'teddy'});
  }
}

export interface GalleryModel {
  size: number;
  alias: string;
}
