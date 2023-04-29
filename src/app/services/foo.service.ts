import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FooService {
  private testSubject: BehaviorSubject<string> = new BehaviorSubject<string>('this is a value');
  testSubject$: Observable<string> = this.testSubject.asObservable();

  constructor() {
    this.testSubject.next('new value')
  }

  sum(a: number, b: number): number {
    return a + b;
  }
}
