import { Component, OnInit } from '@angular/core';
import Utils from '../utils';

@Component({
  selector: 'app-registry-agentid',
  templateUrl: './registry-agentid.component.html',
  styleUrls: ['./registry-agentid.component.css']
})
export class RegistryAgentidComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    Utils.init();
  }

}
