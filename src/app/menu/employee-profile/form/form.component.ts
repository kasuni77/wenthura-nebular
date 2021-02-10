import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {NbWindowRef, NbWindowService} from '@nebular/theme';
import { EditProfileComponent } from './edit-profile/edit-profile.component';


@Component({
  template: `
    <form class="form">
      <button  class="btn" (click)="openForm()" status="success" fullWidth size="small" nbButton >Edit Profile</button>
      <button  class="btn" status="danger" fullWidth size="small" nbButton >Delete Profile</button>
    </form>
  `,
  styleUrls: ['form.component.scss'],
})
export class FormComponent {
  @ViewChild('contentTemplate', { static: true }) contentTemplate: TemplateRef<any>;
  @ViewChild('disabledEsc', { read: TemplateRef, static: true }) disabledEscTemplate: TemplateRef<HTMLElement>;

  constructor(private windowService: NbWindowService) {}

  openForm() {
    this.windowService.open(EditProfileComponent, { title: `Edit Profile` });
  }
}
