import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-amazon-details',
  templateUrl: './amazon-details.component.html',
  styleUrls: ['./amazon-details.component.css']
})
export class AmazonDetailsComponent implements OnInit {
  amazonList=[
    {
      id:'1',
      name:'Beauty Products',
      products:'All type of beauty product',
      delivery:'homeDelivery',
    },
    {
      id:'2',
      name:'Fashion',
      products:'All type of beauty product',
      delivery:'homeDelivery',
    },
    {
      id:'3',
      name:'Mobile',
      products:'All type of beauty product',
      delivery:'homeDelivery',
    },
    {
      id:'4',
      name:'Books',
      products:'All type of beauty product',
      delivery:'homeDelivery',
    }
  ]
  details:any
  proList:any

  constructor(private route:ActivatedRoute , private router:Router) { }

  ngOnInit(): void {
    this.details=this.route.snapshot.params['id'];
    this.proList=this.amazonList.filter(x => x.id==this.details)

  }

}
// this.restList=this.route.snapshot.params['id'];
  // this.details=this.restaurantList.filter(x =>x.id==this.restList)

