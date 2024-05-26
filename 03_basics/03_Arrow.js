const user = {
  username: "hirdesh",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username},Welcome to wesite`);
    console.log(this);
  },
}
user.welcomeMessage();  //hirdesh,Welcome to wesite
user.username = "sam";
user.welcomeMessage(); //sam,Welcome to wesite


