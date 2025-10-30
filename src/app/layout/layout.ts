import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavBar } from '../../components/nav-bar/nav-bar';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [NavBar, RouterOutlet],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class AppLayout {}
