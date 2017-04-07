import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';



@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  getMembers() {
    return this.members;
  }

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

}
