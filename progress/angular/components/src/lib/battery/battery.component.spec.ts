import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatteryComponent } from './battery.component';
import {PxbProgressIconComponent} from '../pxb-progress-icon.component';

describe('BatteryComponent', () => {
    let component: BatteryComponent;
    let fixture: ComponentFixture<BatteryComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [PxbProgressIconComponent, BatteryComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BatteryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
