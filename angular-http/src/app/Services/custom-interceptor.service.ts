import { HttpEvent, HttpEventType, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class CustomInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("inside custom interceptor");
        let modifiedHeaders = new HttpHeaders();
        modifiedHeaders = modifiedHeaders.append('Intercept-header-request', 'true').append('Intercept-header-response', 'false');
        var modifiedRequest = req.clone({ headers: modifiedHeaders });
        console.log(req);
        console.log(modifiedRequest);
        //tap is tapping into all the events that takes place between sending a request and receiving a response 
        return next.handle(modifiedRequest).pipe(tap((event) => {
            if (event.type === HttpEventType.Response) {
                console.log("logging HTTP Response, we can format/manipulate response here");
            }
        }));
    }
}