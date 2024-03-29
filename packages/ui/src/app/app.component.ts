import { App } from '@angd/api';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { edenTreaty } from '@elysiajs/eden';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ui';
  hallo = '';

  async ngOnInit() {
    this.hallo = (
      await edenTreaty<App>('http://localhost:3000').hello.get()
    ).data!;
    console.log(this.hallo);
  }
}
