class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.username}VHYER634`;
  }
}

const JS = new User("JS", "JS@JS.com", "73634RY746");
console.log(JS, JS.encryptPassword());
