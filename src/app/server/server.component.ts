import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';
import { Server } from '../data/server.model';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
 
  @Input() ServerElement : {Id: number, Name: string , IsActive: boolean, Desc: string, DateCreated: Date}
  
  @Output() serverDeleted = new EventEmitter<{Id:number}>();

  constructor() {     
  }

  ngOnInit() {
  }
  getColor(){
    return this.ServerElement.IsActive == true ? 'green' : 'red'
  }

  onServerDeleted(){
      this.serverDeleted.emit({
        Id: this.ServerElement.Id
      })
  }
}
