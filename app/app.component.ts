import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from "./_helpers/must-match.validator";

@Component({
  selector: "app",
  templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  firstName: String;
  searched = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      supItemID: ["", Validators.required],
      application: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      category: ["", Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.registerForm.value));
  }

  searchMe(name) {
    console.log("Searched!", name.value);
    if (!name.value) {
      return (this.searched = true);
    }
    this.registerForm.setValue({
      firstName: name.value,
      lastName: "Nypro",
      supItemID: "12345",
      application: "CSM",
      email: "test@abbvie.com",
      password: "4-6 Weeks",
      category: "Billing"
    });
  }
}
