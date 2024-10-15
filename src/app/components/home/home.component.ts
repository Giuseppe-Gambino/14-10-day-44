import { totPost } from '../../../../public/tot-post';
import { Ipost } from './../../modules/ipost';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  postArr: Ipost[] = [];

  ngOnInit() {
    this.postArr = totPost.posts;
    // this.postArr = totPost.posts.slice(0, 4);
    console.log('totpost', totPost);
  }
}
