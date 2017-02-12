import {
  Component, EventEmitter, Input, Output, AnimationTransitionEvent,
  ChangeDetectionStrategy
} from '@angular/core';
import { Flight } from '../../entities/flight';

@Component({
    selector: 'flight-card',
    templateUrl: './flight-card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FlightCardComponent {

    @Input() item: Flight;
    @Input() selectedItem: Flight;
    @Output() selectedItemChange = new EventEmitter<Flight>();

    @Output() specialAnimationStatus = new EventEmitter<AnimationTransitionEvent>();
    hoverState = false;

    isSelected() {
        if (this.selectedItem) {
            return this.selectedItem === this.item ? 'yes' : 'no';
        }
    }

    toggleHover() {
        this.hoverState = !this.hoverState;
    }

    setStatus(event) {
        this.specialAnimationStatus.emit(event);
    }

    select() {
        this.selectedItemChange.emit(this.item);
    }
}
