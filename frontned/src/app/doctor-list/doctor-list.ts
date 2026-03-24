import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorService } from '../services/doctor.service';

@Component({
    selector: 'app-doctor-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './doctor-list.html'
})
export class DoctorList {
    doctors: any[] = [];
    service = inject(DoctorService);

    ngOnInit() {
        this.service.getAll().subscribe(res => {
            this.doctors = res.doctors;
        });
    }
}