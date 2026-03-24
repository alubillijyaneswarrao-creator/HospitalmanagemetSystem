import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientService } from '../services/patient.service';
import { DoctorService } from '../services/doctor.service';
import { AppointmentService } from '../services/appointment.service';
// import { BaseChartDirective } from 'ng2-charts';
@Component({
    selector: 'app-dashboard',
    standalone: true,   // ✅ VERY IMPORTANT
    imports: [CommonModule],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {

    patientsCount = 0;
    doctorsCount = 0;
    appointmentsCount = 0;

    patientService = inject(PatientService);
    doctorService = inject(DoctorService);
    appointmentService = inject(AppointmentService);

    ngOnInit() {
        this.loadData();
    }

    loadData() {
        this.patientService.getAll().subscribe(res => {
            this.patientsCount = res.patients.length;
        });

        this.doctorService.getAll().subscribe(res => {
            this.doctorsCount = res.doctors.length;
        });

        this.appointmentService.getAll().subscribe(res => {
            this.appointmentsCount = res.appointments.length;
        });
    }
}