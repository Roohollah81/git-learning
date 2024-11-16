const type = "A";

function create_user_panel() {
  const panel_format = ["name", "age", "city"];
  console.log(panel_format);
  return panel_format;
}

function add_user(name, age, city) {
  const panel_format = create_user_panel();
  let new_user = {};
  for (let i in panel_format) {
    new_user[i] = panel_format[i];
  }
  console.log(new_user);
}

function create_email() {
  const text = "Hi. Welcome to SAAR website";
}

function send_email(text, from, to) {
  // sendEmail(from,to,text)
}

function generate_password() {
  // password generated
}

function generate_notification() {
  const notification_text =
    "Are you interested in receiving news from the SAAR site?";
}

function send_notification(notification_text) {
  // page.show(notification_text);
}

function main() {
  create_panel();
  add_user("ali", "20", "tabriz");
}

main();
