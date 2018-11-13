import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false;
serverCreationStatus = 'No Server Created';
serverName = 'notempty';
newUsername = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
    // setTimeout(() => {
    //   this.newUsername = true;
    // },1000000000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server Was Created! Name is ' + this.serverName;
  }
  updateUser() {
    console.log('new user update', this.newUsername);
    this.newUsername = '';
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
