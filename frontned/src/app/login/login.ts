import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './login.html'
})
export class Login {
    data: any = {};
    auth = inject(AuthService);
    router = inject(Router);

    login() {
        this.auth.login(this.data).subscribe({
            next: (res: any) => {
                localStorage.setItem("token", res.token);
                alert("Login Success");
                this.router.navigate(['/']);
            },
            error: () => {
                alert("Invalid Credentials");
            }
        });
    }
}