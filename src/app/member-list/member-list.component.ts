import { Component, OnInit } from '@angular/core';
import { Member } from './../member.model';
import { MemberService } from './../member.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [MemberService]
})

export class MemberListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;


  //CONST MISSING router, ADD WHEN DYNAMIC ROUTING
  constructor(private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
    console.log(this.members)
  }

}
