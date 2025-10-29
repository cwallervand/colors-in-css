import { Component } from '@angular/core';

import { ColorBox } from '../../components/color-box/color-box';
@Component({
  standalone: true,
  templateUrl: './basic-color.html',
  imports: [ColorBox],
})
export class BasicColorPage {}
