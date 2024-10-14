import { Component } from '@angular/core';
import { Ipost } from '../../modules/ipost';
import { totPost } from '../../../../public/tot-post';

@Component({
  selector: 'app-active-posts',
  templateUrl: './active-posts.component.html',
  styleUrl: './active-posts.component.scss',
})
export class ActivePostsComponent {
  postArr: Ipost[] = [];

  ngOnInit() {
    let postsAc = totPost.posts.filter((post) => post.active === true);
    this.postArr = postsAc.slice(0, 4);
  }
}
