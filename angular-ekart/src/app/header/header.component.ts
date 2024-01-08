import { Component } from "@angular/core";

@Component({
    selector: 'app-header', //convention is to name it as app-componentName
    // template: '<h3>eKart</h3>',
    templateUrl: './header.component.html',
    // styles: ['a{text-decoration: none; margin: 0px 10px;}', 'button{padding: 10px 20px}', '.ekart--header{width: 100% ; height: 70px}', '#id{}']
    // similar to CSS, use .className {} for styling and use #idName for isDevMode, each element to be styled must be inside a ''
    styleUrls: ['./header.component.css']
})
export class HeaderComponent
{

}