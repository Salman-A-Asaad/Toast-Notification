let notifications = document.getElementsByClassName("notifications")[0];
let error = document.getElementsByTagName("button")[0];
let success = document.getElementsByTagName("button")[1];
let invalid = document.getElementsByTagName("button")[2];

error.onclick = () => {
  let notification = document.createElement("div");
  let span1 = document.createElement("span");
  let para = document.createElement("p");
  let span2 = document.createElement("span");
  notification.classList.add("notification");
  console.log("xx");
  notification.classList.add("error");
  span1.classList.add("error-span");
  span1.innerHTML = "&#10005;";
  para.innerHTML = "Pleass fix the error!";
  span2.classList.add("bar-error");
  notification.appendChild(span1);
  notification.appendChild(para);
  notification.appendChild(span2);
  notifications.appendChild(notification);
  setTimeout(() => {
    notification.classList.add("show");
  }, 100);
  setTimeout(() => {
    span2.style.width = "0";
  }, 2000);
  setTimeout(() => {
    notification.remove();
  }, 4000);
};
success.onclick = () => {
  let notification = document.createElement("div");
  let span1 = document.createElement("span");
  let para = document.createElement("p");
  let span2 = document.createElement("span");
  notification.classList.add("notification");
  notification.classList.add("success");
  span1.classList.add("success-span");
  span1.innerHTML = "&#10004";
  para.innerHTML = "Successed";
  span2.classList.add("bar-success");
  notification.appendChild(span1);
  notification.appendChild(para);
  notification.appendChild(span2);
  notifications.appendChild(notification);
  setTimeout(() => {
    notification.classList.add("show");
  }, 100);
  setTimeout(() => {
    span2.style.width = "0";
  }, 2000);
  setTimeout(() => {
    notification.remove();
  }, 4000);
};
invalid.onclick = () => {
  let notification = document.createElement("div");
  let span1 = document.createElement("span");
  let para = document.createElement("p");
  let span2 = document.createElement("span");
  notification.classList.add("notification");
  notification.classList.add("Invalid");
  span1.classList.add("Invalid-span");
  span1.innerHTML = "&#10069";
  para.innerHTML = "Invalid";
  span2.classList.add("bar-invalid");
  notification.appendChild(span1);
  notification.appendChild(para);
  notification.appendChild(span2);
  notifications.appendChild(notification);
  setTimeout(() => {
    notification.classList.add("show");
  }, 100);
  setTimeout(() => {
    span2.style.width = "0";
  }, 2000);
  setTimeout(() => {
    notification.remove();
  }, 4000);
};
