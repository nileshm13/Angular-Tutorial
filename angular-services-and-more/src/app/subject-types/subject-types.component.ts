import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject, sample } from 'rxjs';

@Component({
  selector: 'app-subject-types',
  templateUrl: './subject-types.component.html',
  styleUrls: ['./subject-types.component.css']
})
export class SubjectTypesComponent {

  ngOnInit() {
    //#region  Subject
    console.log("subject types start");
    //For a subject only last emitted value gets stored, value is emitted using subject.next(value)
    let sampleSubject = new Subject();
    sampleSubject.next(100);
    sampleSubject.next(200);
    sampleSubject.next(300);
    sampleSubject.subscribe((value) => { console.log("Subject Subscriber 1: " + value) }); // starts waiting for subject.next(),
    sampleSubject.subscribe((value) => { console.log("Subject Subscriber 2: " + value) }); // starts waiting for subject.next(),
    sampleSubject.next(2020); //o/p: Subscriber 1: 2020, Subscriber 2: 2020, print 2020 wherever it is subscribed before this line
    sampleSubject.subscribe((value) => { console.log("Subject Subscriber 3: " + value) }); // starts waiting for subject.next(),
    sampleSubject.next(2024); //o/p: Subscriber 1: 2024, Subscriber 2: 2024,  Subscriber 3: 2024, print 2024  wherever it is subscribed before this line
    //#endregion  Subject

    //#region  BehaviourSubject
    //A BehaviourSubject has an initial value that gets emitted if no new value is emitted. It emits an initial value or last emitted value for a new subscriber
    //As BehaviourSubject has an initial value, it gets printed as soon as there is first subscription for data
    let sampleBehaviorSubject = new BehaviorSubject(1500);
    sampleBehaviorSubject.subscribe((value) => { console.log("BehaviourSubject Subscriber 1: " + value) }); // looks for default value and assigns it -> 1500
    sampleBehaviorSubject.subscribe((value) => { console.log("BehaviourSubject Subscriber 2: " + value) }); // looks for default value and assigns it -> 1500
    sampleBehaviorSubject.next(2020); //o/p: Subscriber 1: 2020, Subscriber 2: 2020, print 2020 wherever it is subscribed before this line
    sampleBehaviorSubject.subscribe((value) => { console.log("BehaviourSubject Subscriber 3: " + value) }); // Default value for this is the last value emitted by subject i.e. 2020, so prints 2020, o/p : BehaviourSubject Subscriber 3: 2020
    sampleBehaviorSubject.next(2024); //o/p: Subscriber 1: 2024, Subscriber 2: 2024, Subscriber 3: 2024, print 2024  wherever it is subscribed before this line    
    //#endregion  BehaviourSubject

    //#region  ReplaySubject
    //It maintains history of emitted values which gets assigned on each subscription
    //It has 2 params, ReplaySubject(bufferSize //how many previous values need to be kept in buffer, windowTime //how long in ms should buffer values be kept)
    //default value for bufferSize and windowTime is infinity
    //(See img for description)
    let sampleReplaySubject = new ReplaySubject();
    sampleReplaySubject.next(100);
    sampleReplaySubject.next(200);
    sampleReplaySubject.next(300);
    sampleReplaySubject.subscribe((value) => { console.log("ReplaySubject Subscriber 1: " + value) }); // Prints all values stored in buffer, so 100,200,300
    sampleReplaySubject.subscribe((value) => { console.log("ReplaySubject Subscriber 2: " + value) }); // Prints all values stored in buffer, so 100,200,300
    console.log("waiting...................");
    sampleReplaySubject.next(2020); //ReplaySubject Subscriber 1: 2020, ReplaySubject Subscriber 2: 2020
    sampleReplaySubject.subscribe((value) => { console.log("ReplaySubject Subscriber 3: " + value) });  // Prints all values stored in buffer of replaySubject for Subscriber 3, so 100,200,300,2020
    sampleReplaySubject.next(2024); // Prints 2024 for Subsciber 1,2 and 3
    //#endregion  ReplaySubject

    //#region AsyncSubject
    //An async subject assigns a value only after a complete is called on it
    //Any subscription before that will not get a value
    //Any value emitted after complete call is ignored, so the last emitted value before a complete call gets assigned to subscription
    let asyncSubject = new AsyncSubject();
    asyncSubject.next(100);
    asyncSubject.next(200);
    asyncSubject.next(300);
    asyncSubject.subscribe((value) => { console.log("AsyncSubject Subscriber 1: " + value) });
    asyncSubject.complete();  // Once execution reaches here, tha latest emitted value before this line gets assigned to subscribers, the same value gets assigned to any subscribers after this irrespective of value getting emitted n number of times        
    asyncSubject.next(2020);   //Does not look for any subscription, will just assign value = 300 wherever subscription takes place post this line
    asyncSubject.subscribe((value) => { console.log("AsyncSubject Subscriber 2: " + value) });  //prints latest emitted value before complete i.e. 300
    asyncSubject.next(2024); //Does not look for any subscription,
    //#endregion AsyncSubject
  }
}
