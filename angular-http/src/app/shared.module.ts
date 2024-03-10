import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { LoaderComponent } from "./utility/loader/loader.component";
import { ErrorSnackbarComponent } from "./utility/error-snackbar/error-snackbar.component";

@NgModule({
    declarations: [
        LoaderComponent,
        ErrorSnackbarComponent
    ],
    imports: [FormsModule],
    exports: [
        FormsModule,
        LoaderComponent,
        ErrorSnackbarComponent
    ]

})
export class SharedModule {

}