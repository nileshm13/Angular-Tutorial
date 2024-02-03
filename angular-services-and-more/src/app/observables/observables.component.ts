import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {
  data: any[] = [];

  //Observable
  sampleOservable = new Observable((observer) => {
    observer.next([1, 2, 3, 4, 5]);
  })

  timeOutObservable = new Observable((observer) => { //This will help to notice data getting sent as stream rather than all at once (due to timeout)
    // observer.next([1, 2, 3, 4, 5]);
    setTimeout(() => { observer.next(1) }, 1000);
    setTimeout(() => { observer.next(2) }, 2000);
    setTimeout(() => { observer.next(3) }, 3000);
    setTimeout(() => { observer.next(4) }, 4000);
    setTimeout(() => { observer.next(5) }, 5000);
  });

  observerWithError = new Observable((observer) => { //This will help to notice data getting sent as stream rather than all at once (due to timeout)    
    setTimeout(() => { observer.next(1) }, 1000);
    setTimeout(() => { observer.next(2) }, 2000);
    setTimeout(() => { observer.error(new Error('Something went wong, plese try again later !!')) }, 3000);
    setTimeout(() => { observer.next(4) }, 4000);
    setTimeout(() => { observer.next(5) }, 5000);
  });

  observerWithComplete = new Observable((observer) => { //This will help to notice data getting sent as stream rather than all at once (due to timeout)    
    setTimeout(() => { observer.next(1) }, 1000);
    setTimeout(() => { observer.next(2) }, 2000);
    setTimeout(() => { observer.next(3) }, 3000);
    setTimeout(() => { observer.next(4) }, 4000);
    setTimeout(() => { observer.next(5) }, 5000);
    setTimeout(() => { observer.complete() }, 6000);
  });


  getData() {
    //Observer
    //next, error and complete callback event (3rd callback which specifies complete does not have any param/argument)
    this.sampleOservable.subscribe((value: any) => {
      this.data = value;
    })
  }

  getStreamData() {
    this.timeOutObservable.subscribe((value: any) => {
      this.data.push(value);
    });
  }

  getErrorData() {
    this.observerWithError.subscribe({
      next: (value: any) => { //If FAT Arrow symbol is not used, it looks for data property within this subscribe object and as not found, it sends undefined to template
        this.data.push(value);
      },
      error(err) {
        alert(err)
      },
      complete() {
        alert('All data has been fetched');
      }
    });
  }

  getCompleteData() {
    this.observerWithComplete.subscribe({
      next: (value: any) => {//If FAT Arrow symbol is not used, it looks for data property within this subscribe object and as not found, it sends undefined to template
        this.data.push(value);
      },
      error(err) {
        alert(err)
      },
      complete() {
        alert('All data has been fetched');
      }
    });
  }

}
