import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgProgressIconsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
