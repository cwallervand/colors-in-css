import { Component, OnInit, Type, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgComponentOutlet } from '@angular/common';

import { BasicColorPage } from '../pages/basic-color/basic-color';
import { BasicRelativeColorsPage } from '../pages/basic-relative-colors/basic-relative-colors';
import { NavBar } from '../components/nav-bar/nav-bar';

type PageComponent = BasicColorPage | BasicRelativeColorsPage;

@Component({
  selector: 'page-orchestrator',
  standalone: true,
  imports: [NgComponentOutlet, NavBar],
  template: `
    <nav-bar />
    @if (currentPageComponent) {
      <ng-container *ngComponentOutlet="currentPageComponent" />
    }
  `,
})
export class PageOrchestrator implements OnInit {
  private activeRoute = inject(ActivatedRoute);
  private router = inject(Router);

  currentPageComponent: Type<PageComponent> | null = null;

  // Map page numbers to their corresponding components
  private pageMap: { [key: string]: Type<PageComponent> } = {
    '1': BasicColorPage,
    '2': BasicRelativeColorsPage,
  };

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.activeRoute.paramMap.subscribe((params) => {
      const pageNumber = params.get('pageNumber');

      if (pageNumber && this.pageMap[pageNumber]) {
        this.currentPageComponent = this.pageMap[pageNumber];
      } else {
        // Redirect to page 1 if the page number doesn't exist
        this.router.navigate(['/1']);
      }
    });
  }
}
