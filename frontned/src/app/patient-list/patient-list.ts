import { Component, inject, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-patient-list',
    standalone: true,
    imports: [CommonModule, RouterLink],  // ✅ FIX HERE
    templateUrl: './patient-list.html',
    styleUrl: './patient-list.css'
})
export class PatientList implements OnInit {
    patients: any[] = [];
    service = inject(PatientService);

    ngOnInit() {
        this.load();
    }

    load() {
        this.service.getAll().subscribe(res => {
            this.patients = res.patients;
        });
    }

    delete(id: number) {
        this.service.delete(id).subscribe(() => {
            alert("Deleted");
            this.load();
        });
    }
}