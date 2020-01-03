import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

   images = [];
   alias = '';
   imageSize = 0;

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
