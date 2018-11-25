import {TestBed} from '@angular/core/testing';

import {AuthServiceService} from './auth-service.service';
import {HttpHeaders} from '@angular/common/http';

fdescribe('AuthServiceService', () => {

    let service: AuthServiceService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [AuthServiceService]
        });
        service = TestBed.get(AuthServiceService);
    });

    fit('should be created', () => {
        expect(service).toBeTruthy();
    });

    fit('should contain expected headers', () => {
        expect(service).toBeTruthy();
        const headers: HttpHeaders = service.getHeaders();
        expect(headers).toBeTruthy();
        expect(headers.keys().length).toBe(2);
        expect(headers.keys()).toContain('Authorization', 'Content-Type');
        expect(headers.get('Authorization')).toBe('Basic ' + btoa('json_user:json_password'));
        expect(headers.get('Content-Type')).toBe('application/json');
    });
});
