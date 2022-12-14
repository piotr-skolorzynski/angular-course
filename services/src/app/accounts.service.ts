import { Injectable, EventEmitter } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({ providedIn: 'root' })
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active',
    },
    {
      name: 'Testaccount',
      status: 'inactive',
    },
    {
      name: 'Hidden Account',
      status: 'unknown',
    },
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private loggingServcie: LoggingService) {}

  addAccount(name: string, status: string) {
    this.accounts.push({ name, status });
    this.loggingServcie.logStatusChange(status);
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingServcie.logStatusChange(status);
  }
}
