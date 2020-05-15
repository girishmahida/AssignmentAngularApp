import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import {AboutusComponent} from './aboutus.component';
import {AboutusRouteModule} from './aboutus-routing.module'

@NgModule({
    declarations:[AboutusComponent],
    imports: [
        CommonModule,
        AboutusRouteModule
      ]
})

export class AboutusModule{

}