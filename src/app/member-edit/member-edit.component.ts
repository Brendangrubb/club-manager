import { Component, OnInit, Input } from '@angular/core';
import { Member } from './../member.model';
import { MemberService } from './../member.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { FirebaseObjectObservable } from 'angularfire2';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css'],
  providers: [MemberService]
})
export class MemberEditComponent implements OnInit {
  @Input() selectedMember;
  editForm = false;
  editFormButton = true;

  openEditForm(selectedMember) {
    this.editForm = true;
    this.editFormButton = false;
  }

  triggerUpdateMember(selectedMember) {
    this.memberService.updateMember(selectedMember);
    this.editForm = false;
    this.editFormButton = true;
  }

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

}
