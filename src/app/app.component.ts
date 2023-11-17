import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedFeature: string = 'recipe';
  // @Input() featureInput = new EventEmitter<string>();

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
