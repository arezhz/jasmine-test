import {MasterService} from './master.service';
import {TestBed} from "@angular/core/testing";
import {FooService} from "./foo.service";
import {Observable, of} from "rxjs";

describe('MasterService', () => {
  let masterService: MasterService;
  let fooSpyService: jasmine.SpyObj<FooService>;
  beforeEach(() => {
    const spy = jasmine.createSpyObj('FooService', ['sum', 'testSubject$'])

    TestBed.configureTestingModule({
      providers: [
        MasterService,
        {provide: FooService, useValue: spy}
      ]
    });
    masterService = TestBed.inject(MasterService);
    fooSpyService = TestBed.inject(FooService) as jasmine.SpyObj<FooService>
  })

  it('get doubled func result', () => {
    fooSpyService.sum.and.returnValue(2);
    const result = masterService.getDoubled(1, 1);
    expect(result).toEqual(4);
  })

  // it('testSubject$ Observable', (done: DoneFn) => {
  //   spyOnProperty(fooSpyService, 'testSubject$', 'get').and.returnValue(of(('new value')))
  //   masterService.getResult().subscribe(res => {
  //     expect(res).toBe('new value = fake Data')
  //     done();
  //   })
  // })

  // beforeEach(()=> {
  //   service = TestBed.inject(MasterService)
  // })
  //
  // it('getResult func', (done:DoneFn) => {
  //   service.getResult().subscribe(res => {
  //     expect(res).toBe('new value = fake Data')
  //     done();
  //   })
  // })

  // it('getResult func', (done:DoneFn) => {
  //   service = new MasterService(new FooService())
  //   service.getResult().subscribe(res => {
  //     expect(res).toBe('new value = fake Data')
  //     done();
  //   })
  // })
});
