import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  serverCreated = false;
  servers = ['Test server', 'Test server 2'];
  isSecretPasswordHidden = true;
  togglesArray = [];

  constructor() {
    setTimeout(() => (this.allowNewServer = true), 2000);
  }

  togglePasswordDisplay() {
    this.isSecretPasswordHidden = !this.isSecretPasswordHidden;
    this.togglesArray.push(new Date());
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus =
      'Server was created! Name is ' + this.serverName;
    this.serverName = '';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
