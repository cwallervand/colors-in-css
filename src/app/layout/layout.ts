import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// import { ActivatedRoute, Router } from '@angular/router';
// import { NgComponentOutlet } from '@angular/common';

import { NavBar } from '../../components/nav-bar/nav-bar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavBar, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class AppLayout {}
