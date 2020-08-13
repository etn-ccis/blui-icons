import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgProgressIconsModule } from '@pxblue/ng-progress-icons';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, NgProgressIconsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
