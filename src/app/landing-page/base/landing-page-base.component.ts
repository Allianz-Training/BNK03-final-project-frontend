import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'landing-page-base',
  templateUrl: './landing-page-base.component.html',
  styleUrls: ['./landing-page-base.component.css'],
})
export class LandingPageBaseComponent implements OnInit {
  topics: Array<any> = [
    {
      imgUrl: '../../../assets/24-hours.png',
      contentHeader: '24 hrs. claim',
      contentDescription: 'Claim Online anywhere & anytime',
    },
    {
      imgUrl: '../../../assets/hospital.png',
      contentHeader: 'Hospital Link',
      contentDescription:
        'Find nearby hospital and Assistance when you have emergency situation',
    },
    {
      imgUrl: '../../../assets/car-repair.png',
      contentHeader: 'Car repairing',
      contentDescription: 'Easy to find dealer & Garage',
    },
    {
      imgUrl: '../../../assets/journey2.png',
      contentHeader: 'Repair tracking',
      contentDescription: 'Online tracking your car anytime',
    },
    {
      imgUrl: '../../../assets/map.png',
      contentHeader: 'GPS',
      contentDescription:
        'Our implemented feature can bring you to your destination',
    },
  ];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.isSignIn = false;
  }
}
