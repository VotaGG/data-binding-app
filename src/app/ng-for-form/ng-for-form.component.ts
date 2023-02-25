import { Component, OnInit } from '@angular/core';

interface City {
  name: string;
  state: string;
}

interface Client {
  name: string;
  address: string;
  phone: string;
  city: City;
  age: number;
}

@Component({
  selector: 'app-ng-for-form',
  templateUrl: './ng-for-form.component.html',
  styleUrls: ['./ng-for-form.component.css']
})
export class NgForFormComponent implements OnInit {

  name = '';
  address = '';
  phone = '';
  city = '';
  age = 0;

  cities: City[] = [
    { name: 'Sao Paulo', state: 'SP' },
    { name: 'Porto Alegre', state: 'RS' },
    { name: 'Curitiba', state: 'PR' },
    { name: 'Rio de Janeiro', state: 'RJ' },
  ];

  clients: Client[] = [];

  constructor() { }

  ngOnInit(): void {}

  save(): void {
    const newClient: Client = {
      name: this.name,
      address: this.address,
      city: { name: this.city, state: '' },
      age: this.age,
      phone: this.phone
    };

    this.clients.push(newClient);
    this.cancel();
    console.log(this.clients);
  }

  cancel(): void {
    this.name = '';
    this.address = '';
    this.city = '';
    this.phone = '';
    this.age = 0;
  }

  delete(i: number): void {
    this.clients.splice(i, 1);
  }
}
