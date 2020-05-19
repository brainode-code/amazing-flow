import { Component, OnInit } from '@angular/core';
import { LayersService } from './layers.service';
import { FlowBoxLayer } from './models/layer';
import { ToolService } from './tool.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  layers: FlowBoxLayer[];
  pressed = false;

  constructor(
    private layersService: LayersService,
    private toolService: ToolService
  ) {}

  ngOnInit() {
    this.layers = this.layersService.getLayers();
  }

  onMouseUp($event) {
    this.toolService.mouse.pressed = false;
    this.toolService.mouseReleased($event);
  }

  onMouseDown($event) {
    this.toolService.mouse.xs = $event.clientX;
    this.toolService.mouse.ys = $event.clientY;
    this.toolService.mouse.pressed = true;
    this.pressed = this.toolService.mouse.pressed;
  }

}
