import { Component } from '@angular/core';
import { RouterOutlet, RouterModule, Router, NavigationEnd } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './body/body.component';
import { filter } from 'rxjs';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SidenavComponent, CommonModule, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'sidenav';

  isSideNavCollapsed = false;
  screenWidth = 0;
  showSidebar = true; // Default to showing the sidebar

  // List of routes where the sidebar should be shown
  private routesWithSidebar = ['/dashboard' , '/table'];

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        // Check if the current route is in the allowed list for showing the sidebar
        this.showSidebar = this.routesWithSidebar.includes(event.url);

        // Reset layout when hiding the sidebar
        if (!this.showSidebar) {
          this.screenWidth = window.innerWidth;
          this.isSideNavCollapsed = false;
        }
      });
  }

  onToggleSideNav(data: SideNavToggle): void {
    this.screenWidth = data.screenWidth;
    this.isSideNavCollapsed = data.collapsed;
  }
}
