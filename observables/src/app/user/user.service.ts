import { Injectable } from '@angular/core';
import { Subject } from 'rxjs-compat';

@Injectable({ providedIn: 'root' })
export class UserService {
  activatedEmmiter = new Subject<boolean>();
}
