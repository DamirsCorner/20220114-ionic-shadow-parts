import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  form: FormGroup;

  ngOnInit(): void {
    this.form = new FormGroup({
      date: new FormControl(undefined, [Validators.required]),
      text: new FormControl(undefined, [Validators.required]),
    });
  }
}
