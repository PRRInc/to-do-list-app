console.log("Hello World");

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = event.target.title.value;
  const author = event.target.author.value;

  const ul = document.querySelector("ul");
  const li = document.createElement("li");

  li.innerHTML = `<span>${checkedGenre}</span>${title} by ${author}
  <button>Finished</button>`;

  const bookButton = li.querySelector("button");
  removeBook(li);
  ul.append(li);

  form.reset();
});