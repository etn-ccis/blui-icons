import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsComponent } from './ups.component';
import { PxbProgressIconComponent } from '../pxb-progress-icon.component';

describe('UPSComponent', () => {
    let component: UpsComponent;
    let fixture: ComponentFixture<UpsComponent>;

    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [PxbProgressIconComponent, UpsComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UpsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        void expect(component).toBeTruthy();
    });
});
