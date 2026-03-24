import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../services/patient.service';
import { FormsModule } from '@angular/forms';   // ✅ ADD
import { CommonModule } from '@angular/common'; // ✅ ADD

@Component({
    selector: 'app-patient-edit',
    standalone: true,
    imports: [FormsModule, CommonModule],  // ✅ IMPORTANT
    templateUrl: './patient-edit.html'
})
export class PatientEdit implements OnInit {
    patient: any = {};
    service = inject(PatientService);
    route = inject(ActivatedRoute);
    router = inject(Router);

    ngOnInit() {
        const id = this.route.snapshot.paramMap.get('id');
        this.service.getById(Number(id)).subscribe(res => {
            this.patient = res.patient;
        });
    }

    update() {
        this.service.update(this.patient).subscribe(() => {
            alert("Updated");
            this.router.navigate(['/']);
        });
    }
}