import { Component } from '@angular/core';
import { Observable, filter, from, interval, map, of } from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {
  data: any[] = [];
  showContent: string = 'observable';
  val1: string[] = ['Angular', 'Vue', 'JavaScript', 'React'];
  val2: number[] = [10, 20, 30, 40, 50, 60]
  resultSet: number[] = [];
  sub1;

  //#region  Observable
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

  SubscribeData() {
    var noSets = interval(1000); //generates a number every 1 sec, return type is observable

    this.sub1 = noSets.subscribe((val) => {
      this.data.push(val);
    })
  }

  UnSubscribeData() {
    this.sub1.unsubscribe();
  }
  //#endregion

  //#region rxjs
  getAsyncData() {
    this.data = [];
    //of operator
    // let rxjsObs = of(this.val1, this.val2, 10, 20, true, 'Raj' , ['Test','User']);
    // rxjsObs.subscribe((val: any)=>
    // {
    //   this.data.push(val);
    // })

    //from operator
    // let rxjsObs = from(this.val2);
    // rxjsObs.subscribe((val: any) => {
    //   this.data.push(val);
    // });

    //Convert promise to observable
    // let dataPromise = new Promise((resolve, reject) => {
    //   resolve(this.val1);
    // });

    // dataPromise.then((val) => {
    //   console.log(val);
    //   this.data.push(val);
    //   console.log(this.data);
    // })

    // console.log(this.data);//this is undefined as promises are async in nature so this line gets executed before data assignment takes place above in .then

    //CONVERT
    // let rxjsObs = from(dataPromise) //can be done in a single line as well
    // rxjsObs.subscribe((val: any) => {
    //   this.data = val;
    // });

    //Map
    // let rxjsObs = from(this.val2).pipe(map((value: any) => {
    //   console.log(value);
    //   return value * 10;
    // }));

    // rxjsObs.subscribe((ob: any) => {
    //   this.data.push(ob);
    // });

    //filter
    // let rxjsObs = from(this.val2).pipe(filter((value: any) => {
    //   return value%4 === 0;
    // }));

    // rxjsObs.subscribe((ob: any) => {
    //   this.data.push(ob);
    // });

    //pipe:
    from(this.val2).pipe(map((val) => {
      return val * 10;
    }),
      filter((res) => {
        return res % 6 === 0;
      })
    ).subscribe((result: any) => {
      this.data.push(result);
    }, (err) => {
      console.log("Something went wrong, Error: " + err);
    },
      () => {
        alert('data fetch completed');
      })
  }

  //#endregion
}
