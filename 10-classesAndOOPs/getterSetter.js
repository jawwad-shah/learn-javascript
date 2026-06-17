class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get password() {
    this._password.toUpperCase();
  }

  set password(value) {
    this._password = value;
  }
}
