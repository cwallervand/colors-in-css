import { Component, input, HostBinding } from '@angular/core';

@Component({
  selector: 'color-box',
  standalone: true,
  imports: [],
  templateUrl: './color-box.html',
  styleUrl: './color-box.css',
})
export class ColorBox {
  color = input.required<string>();

  @HostBinding('style.--color-box-color')
  get colorBoxColorValue() {
    return this.color();
  }
}
