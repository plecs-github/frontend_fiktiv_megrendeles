import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss']
})
export class JumbotronComponent implements OnInit {
quote: String = '"Az élet egy maszk, amin keresztül a mindenség kifejezi önmagát."';
lead: String ='Frank Herbert'
  constructor() { }

  ngOnInit(): void {
  }

}

