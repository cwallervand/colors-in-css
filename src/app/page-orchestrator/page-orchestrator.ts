import { Component, OnInit, Type, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgComponentOutlet } from '@angular/common';

import { BasicColorPage } from '../../pages/basic-color/basic-color';
import { BasicRelativeColorsPage } from '../../pages/basic-relative-colors/basic-relative-colors';
import { StateThemingPage } from '../../pages/state-theming/state-theming';
import { ColorThemePage } from '../../pages/color-theme/color-theme';

type PageComponent = BasicColorPage | BasicRelativeColorsPage | StateThemingPage | ColorThemePage;

@Component({
  selector: 'page-orchestrator',
  standalone: true,
  imports: [NgComponentOutlet],
  templateUrl: './page-orchestrator.html',
  styles: [
    `
      :host {
        display: block;
        height: 100%;
      }
    `,
  ],
})
export class PageOrchestrator implements OnInit {
  private activeRoute = inject(ActivatedRoute);
  private router = inject(Router);

  currentPageComponent: Type<PageComponent> | null = null;

  private pageMap: { [key: string]: Type<PageComponent> } = {
    '1': BasicColorPage,
    '2': BasicRelativeColorsPage,
    '3': StateThemingPage,
    '4': ColorThemePage,
  };

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      const pageNumber = params.get('pageNumber');

      if (pageNumber && this.pageMap[pageNumber]) {
        this.currentPageComponent = this.pageMap[pageNumber];
      } else {
        this.router.navigate(['/1']);
      }
    });
  }
}
