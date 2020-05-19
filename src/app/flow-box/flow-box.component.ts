import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { FlowBoxLayer } from '../models/layer';
import { LayersService } from '../layers.service';
import { IPositionComponent } from '../models/position-component';

@Component({
  selector: 'app-flow-box',
  templateUrl: './flow-box.component.html',
  styleUrls: ['./flow-box.component.scss']
})
export class FlowBoxComponent implements OnInit {
  @HostBinding('style.--position-type') private positionType: string;
  @HostBinding('style.--left') private left: string;
  @HostBinding('style.--top') private top: string;
  @HostBinding('style.--width') private width: string;
  @HostBinding('style.--height') private height: string;

  @Input() flowBoxLayer: FlowBoxLayer;

  constructor(
    private layersService: LayersService
  ) { }

  ngOnInit(): void {
    this.bindPosition();
  }

  activateBox() {
    this.layersService.activateBox(this.flowBoxLayer);
  }

  private bindPosition() {
    this.left = this.flowBoxLayer.components.position.x + 'px';
    this.top = this.flowBoxLayer.components.position.y + 'px';
    this.width = this.flowBoxLayer.components.position.width + 'px';
    this.height = this.flowBoxLayer.components.position.height + 'px';
  }

}
