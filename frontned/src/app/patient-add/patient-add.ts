import { Component, inject } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';   // ✅ ADD
import { CommonModule } from '@angular/common'; // ✅ ADD

@Component({
    selector: 'app-patient-add',
    standalone: true,
    imports: [FormsModule, CommonModule],  // ✅ IMPORTANT
    templateUrl: './patient-add.html'
})
export class PatientAdd {
    patient: any = {};
    service = inject(PatientService);
    router = inject(Router);

    save() {
        this.service.create(this.patient).subscribe(() => {
            alert("Added");
            this.router.navigate(['/']);
        });
    }
}