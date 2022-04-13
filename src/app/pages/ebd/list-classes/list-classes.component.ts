import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-classes',
  templateUrl: './list-classes.component.html',
  styleUrls: ['./list-classes.component.scss']
})
export class ListClassesComponent implements OnInit {

  classes: Array<{name:string, number:number}> = [{name:"jovens",number:40},{name:"senhores",number:4}];

  constructor() { }

  ngOnInit(): void {
  }

}
