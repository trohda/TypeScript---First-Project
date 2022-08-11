/// <reference path="./components/project-imput.ts" />
/// <reference path="./components/project-list.ts" />

namespace App {
  new ProjectInput();
  new ProjectList("active");
  new ProjectList("finished");
}
