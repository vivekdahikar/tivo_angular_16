import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {
  public show: boolean = false;
  public loginForm: FormGroup;
  public errorMessage: any;

  constructor(
    private fb: FormBuilder,
    public router: Router,
    private toastr: ToastrService
  ) {
    this.loginForm = this.fb.group({
      email: ["Test@gmail.com", [Validators.required, Validators.email]],
      password: ["test123", Validators.required],
    });
  }

  ngOnInit() {}

  showPassword() {
    this.show = !this.show;
  }

  // Simple Login
  login() {
    if (
      this.loginForm.controls["email"].invalid ||
      this.loginForm.controls["email"].value === ""
    ) {
      this.toastr.error("Invalid email", "Error");
      return;
    }

    if (
      this.loginForm.controls["password"].invalid ||
      this.loginForm.controls["password"].value === ""
    ) {
      this.toastr.error("Invalid password", "Error");
      return;
    }
    {
      let user = {
        email: "Test@gmail.com",
        password: "test123",
        name: "test user",
      };
      localStorage.setItem("user", JSON.stringify(user));
      this.router.navigate(["/dashboard/default"]);
    }
  }
}
