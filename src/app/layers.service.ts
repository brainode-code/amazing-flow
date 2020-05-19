import { Injectable } from '@angular/core';
import { FlowBoxLayer } from './models/layer';
import { IPositionComponent } from './models/position-component';

@Injectable({
  providedIn: 'root'
})
export class LayersService {
  private lastId = 0;
  private layers: FlowBoxLayer[] = [];

  constructor() {
    this.createFirstLayer();
  }

  public getLayers() {
    return this.layers;
  }

  public activateBox(layer: FlowBoxLayer) {
    layer.selected = true;
  }

  public addAbsoluteLayer(rectangle: { x: number; y: number; w: number; h: number}) {
    const layer: FlowBoxLayer = {
      selected: false,
      visible: true,
      locked: false,
      children: [],
      components: {}
    };

    const position: IPositionComponent = {
      type: 'absolute',
      x: rectangle.x,
      y: rectangle.y,
      width: rectangle.w,
      height: rectangle.h
    }

    layer.components.position = position;

    console.log(layer);
    this.layers.push(layer);
    this.lastId++;
  }

  private createFirstLayer(): void {
    const layer: FlowBoxLayer = {
      selected: false,
      visible: true,
      locked: false,
      children: [],
      components: {}
    };

    const position: IPositionComponent = {
      type: 'absolute',
      x: 500,
      y: 100,
      width: 400,
      height: 300
    }

    layer.components.position = position;

    this.layers.push(layer);
    this.lastId++;
  }
}

