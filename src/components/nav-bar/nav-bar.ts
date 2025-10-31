import { Component, computed, inject, signal, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
  standalone: true,
})
export class NavBar implements OnInit {
  private router = inject(Router);

  currentPageNumber = signal<number>(1);
  isBackRouteDisabled = signal<boolean>(false);
  private isOnResourcesPage = signal<boolean>(false);

  backRoute = computed(() => {
    const currentPageNumber = this.currentPageNumber();

    if (this.isOnResourcesPage()) {
      return `/${currentPageNumber}`;
    }
    return currentPageNumber > 1 ? `/${currentPageNumber - 1}` : `/${currentPageNumber}`;
  });

  forwardRoute = computed(() => {
    const currentPageNumber = this.currentPageNumber();
    return `/${currentPageNumber + 1}`;
  });

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateNavState(event.url);
      });
    this.updateNavState(this.router.url);
  }

  private updateCurrentPage(pageNumber: number): void {
    this.currentPageNumber.set(pageNumber);
  }

  private setIsOnResourcesPage(): void {
    const currentUrl = this.router.url;
    const isOnResourcesPage = currentUrl.includes('resources');
    this.isOnResourcesPage.set(isOnResourcesPage);
  }

  private updateNavState(url: string): void {
    this.setIsOnResourcesPage();
    const pageMatch = url.match(/\/(\d+)/);
    const pageNumber = pageMatch ? parseInt(pageMatch[1], 10) : null;

    if (pageNumber) {
      this.updateCurrentPage(pageNumber);

      if (pageNumber === 1 && !this.isOnResourcesPage()) {
        this.isBackRouteDisabled.set(true);
      } else {
        this.isBackRouteDisabled.set(false);
      }
    }
  }
}
