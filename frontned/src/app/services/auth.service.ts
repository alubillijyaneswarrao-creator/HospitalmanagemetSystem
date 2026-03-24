import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {

    http = inject(HttpClient);
    api = "http://localhost:3000/api/auth";

    register(data: any) {
        return this.http.post(`${this.api}/register`, data);
    }

    login(data: any) {
        return this.http.post(`${this.api}/login`, data);
    }
}