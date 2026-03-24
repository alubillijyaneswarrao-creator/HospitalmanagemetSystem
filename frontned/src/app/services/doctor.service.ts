import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class DoctorService {
    http = inject(HttpClient);
    api = "http://localhost:3000/api/doctor";

    getAll() {
        return this.http.get<any>(`${this.api}/all`);
    }

    create(data: any) {
        return this.http.post(`${this.api}/create`, data);
    }
}