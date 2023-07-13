import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amazon-list',
  templateUrl: './amazon-list.component.html',
  styleUrls: ['./amazon-list.component.css']
})
export class AmazonListComponent implements OnInit {
  amazonList=[
    {
      id:'1',
      name:'Beauty Products',
    
    },
    {
      id:'2',
      name:'Fashion',
     
    },
    {
      id:'3',
      name:'Mobiles',
     
    },
    {
      id:'4',
      name:'Books',
    
    }
  ]

  constructor( private router:Router) { }

  ngOnInit(): void {
  }
  select(id:any){
    this.router.navigate(['/amazon-details/' + id])

  }

}
