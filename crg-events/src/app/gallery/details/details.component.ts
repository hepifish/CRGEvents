import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private images = [];
  private alias = '';
  private imageSize = 0;

  // TODO change this to i18n and use alias.title & alias.info
  private title = 'AirBalloon Baby Party';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.alias = params.get('alias');
      this.imageSize = parseInt(params.get('size'), 10);
      for (let i = 1; i <= this.imageSize; i++) {
        this.images.push(this.alias + '_' + i);
      }
    });
  }
}
