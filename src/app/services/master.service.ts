import {Injectable} from '@angular/core';
import {FooService} from "./foo.service";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private fooService: FooService) {
  }

  getResult(): Observable<string> {
    return this.fooService.testSubject$
      .pipe(map(res => `${res} = fake Data`))
  }

  getDoubled(a: number, b: number) {
    return this.fooService.sum(a, b) * 2;
  }
}
