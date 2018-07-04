import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { DataModel } from './app.model';

describe('AppComponent', () => {
    let appServiceSpy;
    beforeEach(async(() => {
        appServiceSpy = jasmine.createSpyObj('AppService', ['getData']);

        TestBed.configureTestingModule({
            declarations: [
                AppComponent
            ],
            providers: [
                { provide: AppService, useValue: appServiceSpy }
            ]
        }).compileComponents();
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it(`should have as title 'app'`, async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
    }));

    it('onclick', fakeAsync(() => {
        // setup
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        const data = new DataModel();
        data.id = 1;
        data.name = 'aaa';
        appServiceSpy.getData.and.returnValue(of(data));

        // exercise
        app.onClick();
        tick();

        // verify
        expect(app.data).toBeDefined();
        expect(app.data.id).toBe(1);
        expect(app.data.name).toBe('aaa');
    }));

    it('service', (done: DoneFn) => {
        // setup
        const service = TestBed.get(AppService);
        const data = new DataModel();
        data.id = 1;
        data.name = 'aaa';
        appServiceSpy.getData.and.returnValue(throwError(data));
        const spyReject = spyOn(Promise, 'reject').and.callThrough();

        // exercise
        service.getData().toPromise().then(_ => {})
        .catch(err => {
            return Promise.reject(err);
        }).then(d => {
            done.fail('error');
        }, e => {
            expect(spyReject).toHaveBeenCalled();
            expect(spyReject).toHaveBeenCalledWith(data);
            done();
        });
    });
});
