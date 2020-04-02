import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  @Input('isStarActive') isStarActive = false;
  @Input('isHeartActive') isHeartActive = false;
  @Input('starCount') starCount = 1;
  @Input('heartCount') heartCount = 1;

  onStarToggle() {
    this.isStarActive = !this.isStarActive;
    if(this.isStarActive) {
      this.starCount++;
    } else {
      this.starCount--;
    }
  }

  onHeartToggle() {
    this.isHeartActive = !this.isHeartActive;
    if(this.isHeartActive) {
      this.heartCount++;
    } else {
      this.heartCount--;
    }
  }

}
