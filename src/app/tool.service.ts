import { Injectable } from '@angular/core';
import { LayersService } from './layers.service';

@Injectable({
  providedIn: 'root'
})
export class ToolService {
  activeTool: string;
  mouse = {
    pressed: false,
    xs: 0,
    ys: 0
  };

  constructor(
    private layersService: LayersService
  ) {
    this.activeTool = 'abs-draw';
  }

  pressMouse(x: number, y: number) {
    this.mouse.pressed = true;
    this.mouse.xs = x;
    this.mouse.ys = y;
  }

  mouseReleased(event) {
    const rectangle = {
      x: this.mouse.xs,
      y: this.mouse.ys,
      w: event.clientX - this.mouse.xs,
      h: event.clientY - this.mouse.ys
    }
    this.layersService.addAbsoluteLayer(rectangle);
  }

}
