import { Component, OnInit } from '@angular/core';
import { Member } from './../member.model';
import { MemberService } from './../member.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})

export class AdminComponent implements OnInit {
  memberId: string;
  members: FirebaseListObservable<any[]>;

  submitForm(memberName: string, bio: string, favoriteSeries: string, watchedAll: boolean, image: string){
    var newMember: Member = new Member(memberName, bio, favoriteSeries, watchedAll, image);
    console.log(newMember);
  }

  constructor(private router: Router, private location: Location, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }


}
