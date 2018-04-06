import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms/src/directives/ng_form';
import { GenerateGreetingService} from '../generate-greeting.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  providers: [GenerateGreetingService],
  styleUrls: ['./page2.component.css']
})
export class Page2Component {

  public greeting: Object;

  constructor(private generateGreetingService: GenerateGreetingService) {}

  onSubmit(nameForm: NgForm) {
    const name = nameForm.value.name;
    console.log(name);
    this.generateGreetingService.getGreeting(name).subscribe(res => {
      this.greeting = res;
    });
  }

}
