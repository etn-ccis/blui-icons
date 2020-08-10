import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsComponent } from './ups.component';

describe('PieComponent', () => {
    let component: UpsComponent;
    let fixture: ComponentFixture<UpsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [UpsComponent],
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UpsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
