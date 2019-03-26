import { Component } from '@angular/core';

import { Customer }    from '../customer';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent {

  currentHousingSituations = ['Commuter, with parent/guardian', 'Commuter, independent or with roomates', 'Resident/On Campus', 'Uncertain/Unstable living environment'];
  federalIncomeGuidelines = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'More than 8 family members and meets the federal income guidelines', 'Does not meet the federal income guidelines'];

  model = new Customer('', false, false, false, false, false, false, false, '', '');

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  newCustomer() {
    this.model = new Customer('0000000', false, false, false, false, false, false, false, '', '');
  }

}