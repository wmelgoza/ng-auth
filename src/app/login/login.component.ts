import { Component, OnInit } from '@angular/core';

import { UserService } from '../services/user.service';

// 1. Import the User object (model)
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // 2. Create a new instance of the User object
  user:User = new User();
  // 3. Instantiate an errors array
  error: any;

  // 4. Clear out the contructor login
  constructor(private userService: UserService) {}

  ngOnInit() {}

  // 5. Add a login method
  login(): void{

    this.userService.login(this.user).subscribe(
      (response:any)=>{
        console.log(response);

        if(response.success == false){
          this.error=true;
        }

      }
    );
  }

}
