import { Component } from '@angular/core';
import { totPost } from '../../../../public/tot-post';
import { Ipost } from '../../modules/ipost';

@Component({
  selector: 'app-preset-post',
  templateUrl: './preset-post.component.html',
  styleUrl: './preset-post.component.scss',
})
export class PresetPostComponent {
  postArr: Ipost[] = [];

  ngOnInit() {
    this.postArr = totPost.posts;
    // this.postArr = totPost.posts.slice(0, 4);
    console.log('totpost', totPost);
  }

  isTrue: boolean = false;

  toggleEdit() {
    this.isTrue = !this.isTrue;
    console.log(this.isTrue);
  }
}
