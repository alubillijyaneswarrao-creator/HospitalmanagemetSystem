import { Component, inject, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-appointment-list',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './appointment-list.html'
})
export class AppointmentList implements OnInit {
    appointments: any[] = [];
    service = inject(AppointmentService);

    ngOnInit() {
        this.load();
    }

    load() {
        this.service.getAll().subscribe(res => {
            this.appointments = res.appointments;
        });
    }

    delete(id: string) {
        this.service.delete(id).subscribe(() => {
            alert("Deleted");
            this.load();
        });
    }
}