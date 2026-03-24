import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PatientService {
    http = inject(HttpClient);
    api = "http://localhost:3000/api/patient";

    getAll() {
        return this.http.get<any>(`${this.api}/all`);
    }

    create(data: any) {
        return this.http.post(`${this.api}/create`, data);
    }

    update(data: any) {
        return this.http.put(`${this.api}/${data.patientId}`, data);
    }

    delete(id: number) {
        return this.http.delete(`${this.api}/${id}`);
    }

    getById(id: number) {
        return this.http.get<any>(`${this.api}/${id}`);
    }
}