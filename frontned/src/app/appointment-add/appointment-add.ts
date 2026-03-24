import { Component, inject } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-appointment-add',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './appointment-add.html'
})
export class AppointmentAdd {
    data: any = {};
    service = inject(AppointmentService);
    router = inject(Router);

    save() {
        this.service.create(this.data).subscribe(() => {
            alert("Appointment Created");
            this.router.navigate(['/appointments']);
        });
    }
}