import {MasterService} from './master.service';
import {TestBed} from "@angular/core/testing";
import {FooService} from "./foo.service";

describe('MasterService', () => {
  let service: MasterService;

  beforeEach(()=> {
    service = TestBed.inject(MasterService)
  })

  it('getResult func', (done:DoneFn) => {
    service.getResult().subscribe(res => {
      expect(res).toBe('new value = fake Data')
      done();
    })
  })

  // it('getResult func', (done:DoneFn) => {
  //   service = new MasterService(new FooService())
  //   service.getResult().subscribe(res => {
  //     expect(res).toBe('new value = fake Data')
  //     done();
  //   })
  // })
});
