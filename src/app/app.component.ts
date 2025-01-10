import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, SidenavComponent, CommonModule, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sidenav';

  isSideNavCollapsed = false;
  screenWidth = 0;

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
