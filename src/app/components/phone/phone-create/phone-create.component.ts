import { PhonesService } from './../../../shared/services/phones.service';
import { Phone } from './../../../shared/model/phone.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-phone-create',
  templateUrl: './phone-create.component.html',
  styleUrls: ['./phone-create.component.css']
})
export class PhoneCreateComponent {
  phone: Phone = new Phone();
  apiError: string;
  @ViewChild('imageFile') imageFile;
  @ViewChild('phoneForm') phoneForm;

  constructor(
    private router: Router,
    private phonesService: PhonesService) {}


  addSpec(spec: HTMLInputElement) {
    if (spec.value) {
      this.phone.specs.push(spec.value);
      spec.value = '';
    }
  }

  removeSpec(spec: string) {
    this.phone.specs = this.phone.specs.filter(s => s !== spec);
  }

  onSubmitPhone(phoneForm: NgForm) {
    const imageFile = this.imageFile.nativeElement;
    if (imageFile.files && imageFile.files[0]) {
      this.phone.image = imageFile.files[0];
      this.phonesService.create(this.phone)
        .subscribe(
          (phone) => {
            phoneForm.reset();
            this.router.navigate(['/phones']);
          },
          (error) => {
            this.apiError = error;
          }
      );
    }
  }

  canLeaveTheComponent(): boolean {
    if (this.phoneForm.dirty) {
      return window.confirm(`
        Unsaved changes.
        Are you sure you want to leave?
    `);
    } else {
      return true;
    }
  }
}
