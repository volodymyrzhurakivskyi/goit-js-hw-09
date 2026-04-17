const STORAGE_KEY = "feedback-form-state";

const formData = {
  email: "",
  message: ""
};

const form = document.querySelector(".feedback-form");

// заповнення форми при завантаженні
const savedData = localStorage.getItem(STORAGE_KEY);

if (savedData) {
  const parsedData = JSON.parse(savedData);

  formData.email = parsedData.email || "";
  formData.message = parsedData.message || "";

  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
}

// відстеження вводу (делегування)
form.addEventListener("input", (e) => {
  const { name, value } = e.target;

  formData[name] = value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// відправка форми
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!formData.email || !formData.message) {
    alert("Fill please all fields");
    return;
  }

  console.log(formData);

  localStorage.removeItem(STORAGE_KEY);

  formData.email = "";
  formData.message = "";

  form.reset();
});