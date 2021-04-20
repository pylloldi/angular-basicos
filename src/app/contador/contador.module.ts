import { NgModule } from "@angular/core";
import { ContatorComponent } from "./contador/contador.component";

@NgModule({
    declarations: [
        ContatorComponent
    ],
    exports: [
        ContatorComponent
    ]
})
export class ContadorModule {

}