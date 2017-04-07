import { Component, OnInit } from '@angular/core';
import { Member } from './../member.model';
import { MemberService } from './../member.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css'],
  providers: [MemberService]
})

export class MemberListComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  goToDetailPage(clickedMember) {
    this.router.navigate(['member', clickedMember.$key]);
  };

  constructor(private router: Router, private location: Location, private memberService: MemberService) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

}
