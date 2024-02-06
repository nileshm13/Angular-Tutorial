import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-subject-task',
  templateUrl: './subject-task.component.html',
  styleUrls: ['./subject-task.component.css']
})
export class SubjectTaskComponent {

  ngOnInit() {
    console.log("subject vs observables start");
    //An Observable to generate random number
    let obs = new Observable((observer) => { observer.next(Math.random()) });
    //First subscription to data -> 0.4457326865056117
    obs.subscribe((value: any) => { console.log(value) });
    //Second subscription to data -> 0.042888523993867445
    obs.subscribe((value: any) => { console.log(value) });

    //Note: For an observable, it is not guaranteed that the same data gets sent time and again over a period of time

    //Initialize a subject
    let sub = new Subject();
    //First subscription to data -> 0.7591174561615903
    sub.subscribe((value: any) => { console.log(value) });
    //Second subscription to data -> 0.7591174561615903
    sub.subscribe((value: any) => { console.log(value) });
    //Note: Subscribe to a subject first and then use next as next expects 1 argument whereas object initialization expects 0.
    //A random number is generated and assigned to subject in below HostListener, same value gets read in above 2 lines when subject is subscribed
    sub.next(Math.random());


    //Difference between Observable and Subject

    //This will lead to 3 calls to api being made as observable is subscribibg 3 times, so on each subscription, an api call is made, see network tab
    //However, as same api is getting called and data returned will be same, it is better to make call once and use the same value again using subjects 
    const data = ajax('https://randomuser.me/api/');
    data.subscribe((res: any) => { console.log(res) });
    data.subscribe((res: any) => { console.log(res) });
    data.subscribe((res: any) => { console.log(res) });

    //Here, the value gets assigned to subject in data.subscribe and same value is read in below 3 lines, so only 1 api call is maded for data subscripton
    let subj = new Subject();
    subj.subscribe((data: any) => { console.log(data) });
    subj.subscribe((data: any) => { console.log(data) });
    subj.subscribe((data: any) => { console.log(data) });
    data.subscribe(subj); //api returns Observable which gets assigned to a subject, value from subject is read in above 3 lines.    
  }
}

