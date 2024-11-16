const type = "A";

function create_user_panel() {
  const panel_format = ["name", "age", "city"];
  console.log(panel_format);
  return panel_format;
}

function add_user(name, age, city) {
  const panel_format = create_user_panel();
  let new_user = {};
}

function main() {
  create_panel();
  add_user("ali", "20", "tabriz");
}

main();
