import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AppointmentService {
    http = inject(HttpClient);
    api = "http://localhost:3000/api/appointment";

    getAll() {
        return this.http.get<any>(`${this.api}/all`);
    }

    create(data: any) {
        return this.http.post(`${this.api}/create`, data);
    }

    delete(id: string) {
        return this.http.delete(`${this.api}/${id}`);
    }
}