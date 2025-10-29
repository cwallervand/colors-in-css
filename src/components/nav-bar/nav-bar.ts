import { Component, computed, inject, signal, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nav-bar',
  imports: [RouterLink],
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css',
  standalone: true,
})
export class NavBar implements OnInit {
  private router = inject(Router);
  private activeRoute = inject(ActivatedRoute);

  currentPageNumber = signal<number>(1);

  backRoute = computed(() => {
    const currentPageNumber = this.currentPageNumber();
    return currentPageNumber > 1 ? `/${currentPageNumber - 1}` : null;
  });

  forwardRoute = computed(() => {
    const currentPageNumber = this.currentPageNumber();
    return `/${currentPageNumber + 1}`;
  });

  constructor() {
    console.log('### NavBar constructor ###');
  }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      const pageNumber = params.get('pageNumber');
      if (pageNumber) {
        this.updateCurrentPage(parseInt(pageNumber, 10));
      }
    });
  }

  private updateCurrentPage(pageNumber: number): void {
    this.currentPageNumber.set(pageNumber);
  }
}
