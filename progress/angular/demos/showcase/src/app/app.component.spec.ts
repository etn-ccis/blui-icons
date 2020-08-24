import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';

describe('AppComponent', () => {
    beforeEach(async(() => {
        void TestBed.configureTestingModule({
            declarations: [AppComponent],
            imports: [NgProgressIconsModule],
        }).compileComponents();
    }));

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        void expect(app).toBeTruthy();
    });
});
