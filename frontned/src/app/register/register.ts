import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './register.html'
})
export class Register {
    data: any = {};
    auth = inject(AuthService);
    router = inject(Router);

    register() {
        this.auth.register(this.data).subscribe({
            next: () => {
                alert("Registered Successfully");
                this.router.navigate(['/login']);
            },
            error: (err) => {
                console.log("FULL ERROR:", err);   // 🔥 IMPORTANT
                alert(err.error?.message || "Registration failed");
            }
        });
    }
}