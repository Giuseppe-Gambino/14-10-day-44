import { Component } from '@angular/core';
import { Ipost } from '../../modules/ipost';
import { totPost } from '../../../../public/tot-post';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrl: './inactive-posts.component.scss',
})
export class InactivePostsComponent {
  postArr: Ipost[] = [];

  ngOnInit() {
    let postsAc = totPost.posts.filter((post) => post.active === false);
    this.postArr = postsAc.slice(0, 4);
  }
}
