import { IPositionComponent } from './position-component';

export interface FlowBoxLayer {
    selected: boolean;
    visible: boolean;
    locked: boolean;
    children: FlowBoxLayer[];

    components: {
        position?: IPositionComponent;
    } | null;

}
