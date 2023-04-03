import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  @Output() menuButtonClicked: EventEmitter<boolean> = new EventEmitter();
  @Input('drawer') drawer!: MatDrawer;
}
