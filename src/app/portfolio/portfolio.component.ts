import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  constructor() {

  };
  tab: string = '新生兒寫真';
  showTabContent(clickedTab) {
    this.tab = clickedTab
  }
  portfolioCover = [
    {
      name: '新生兒寫真',
      img: 'assets/images/portfolio/newBorn.jpg',
    },
    {
      name: '全家福',
      img: 'assets/images/portfolio/family.jpg',
    },
    {
      name: '孕媽咪寫真',
      img: 'assets/images/portfolio/pregnant.jpg',
    },
    {
      name: '婚紗',
      img: 'assets/images/portfolio/wedding.jpg',
    },
    {
      name: '仙人掌婚禮',
      img: 'assets/images/portfolio/wedding2.jpg',
    },
    {
      name: '婚禮紀錄',
      img: 'assets/images/portfolio/weddingRecord.jpg',
    },
    {
      name: '藝術照',
      img: 'assets/images/portfolio/art.jpg',
    },
    {
      name: 'PM相本',
      img: 'assets/images/portfolio/PMalbum.png',
    }
  ]

  ngOnInit(): void {
  }

}
