import { PhonesService } from './../../../shared/services/phones.service';
import { Component, OnInit } from '@angular/core';
import { Phone } from '../../../shared/model/phone.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-phone-item',
  templateUrl: './phone-item.component.html',
  styleUrls: ['./phone-item.component.css']
})
export class PhoneItemComponent implements OnInit {
  phone: Phone = new Phone();
  error: Object;

  constructor(
    private router: Router,
    private routes: ActivatedRoute,
    private phonesService: PhonesService) { }

  ngOnInit() {
    this.routes
      .data
      .subscribe(data => {
        this.phone = data['phone'];
      });
  }

  onClickDelete() {
    if (window.confirm('Are you sure?')) {
      this.phonesService.delete(this.phone.id)
        .subscribe(() => {
          this.router.navigate(['/phones']);
        });
    }
  }

}
