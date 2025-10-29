import { Component } from '@angular/core';

import { ColorBox } from '../../components/color-box/color-box';
@Component({
  standalone: true,
  templateUrl: './state-theming.html',
  imports: [ColorBox],
})
export class StateThemingPage {}
