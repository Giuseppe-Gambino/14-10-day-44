import { Component, Input, input } from '@angular/core';
import { totPost } from '../../../../public/tot-post';
import { Ipost } from '../../modules/ipost';

@Component({
  selector: 'app-preset-post',
  templateUrl: './preset-post.component.html',
  styleUrl: './preset-post.component.scss',
})
export class PresetPostComponent {
  @Input() postArr: Ipost[] = [];

  isTrue: boolean = false;

  toggleEdit() {
    this.isTrue = !this.isTrue;
    console.log(this.isTrue);
  }
}
