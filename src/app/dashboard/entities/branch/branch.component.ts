import { Component, OnInit, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.css']
})
export class BranchComponent implements OnInit {

  @HostBinding('class') componentCssClass;
  
  constructor(public overlayContainer: OverlayContainer) {
  }

  ngOnInit() {
    // this.overlayContainer.getContainerElement().classList.add('bm-theme');
    // this.componentCssClass = 'bm-theme';
  }

}
