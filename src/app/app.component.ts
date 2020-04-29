import { Component } from '@angular/core';

import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';

  showMenu: boolean = false;

  /**
   *
   */
  constructor(private authService: AuthService) {
    
  }

  ngOnInit(){
    this.authService.showMenuEmitter.subscribe(
      show => this.showMenu = show
    );
  }

  logout(){
    this.authService.logout();
  }
}
