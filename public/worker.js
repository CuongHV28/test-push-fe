console.log("Service Worker Loaded...");

self.addEventListener("push", (e) => {
  const data = e.data.json();
  console.log("Push Recieved...");
  console.log(data);
  const options = {
    body: data.body,
    icon: data.icon,
    image: data.image,
    actions: data.actions,
  };
  const maxVisibleActions = Notification.maxActions;
  console.log(maxVisibleActions);
  if (maxVisibleActions < 4) {
    options.body =
      `This notification will only display ` + `${maxVisibleActions} actions.`;
  } else {
    options.body =
      `This notification can display up to ` + `${maxVisibleActions} actions.`;
  }
  self.registration.showNotification(data.title, options);
});
