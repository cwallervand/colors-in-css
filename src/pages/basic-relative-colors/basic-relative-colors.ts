import { Component } from '@angular/core';

import { ColorBox } from '../../components/color-box/color-box';
@Component({
  standalone: true,
  templateUrl: './basic-relative-colors.html',
  imports: [ColorBox],
})
export class BasicRelativeColorsPage {}
