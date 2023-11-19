import { Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { AuthService } from './admin/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myblog';

  constructor(public authService: AuthService) {}
  
  ngOnInit(): void {
    initFlowbite();
  }
}
