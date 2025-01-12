import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  @Input() showSidebar = true;

  getBodyClass(): string {
    if (!this.showSidebar) {
      return 'body-full';
    }
    
    if (this.collapsed && this.screenWidth > 768) {
      return 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      return 'body-md-screen';
    }
    return '';
  }
}