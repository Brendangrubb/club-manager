import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';



@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  getMembers() {
    return this.members;
  }

  getMemberById(memberId: string){
    return this.angularFire.database.object('members/' + memberId);
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  updateMember(localMember){
  var databaseMember = this.getMemberById(localMember.$key);
  databaseMember.update({
    memberName: localMember.memberName,
    bio: localMember.bio,
    favoriteSeries: localMember.favoriteSeries,
    watchedAll: localMember.watchedAll,
    image: localMember.image
  });
}

  constructor(private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

}
