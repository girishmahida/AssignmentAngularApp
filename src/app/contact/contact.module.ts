import { NgModule } from '@angular/core';
import {ContactComponent} from './contact.component';
import{ContactRouteModule} from './contact-routing.module';

@NgModule({
    declarations:[ContactComponent],
    imports:[ContactRouteModule]
})

export class ContactModule{

}