window.dataLayer = window.dataLayer || [];
// get domain
var domain = window.location.hostname;
// get userId
var userId = window.localStorage.getItem("userId");

function gtag() {
  dataLayer.push(arguments);
}

function googleAnalytics() {
  gtag("js", new Date());
  gtag("config", "G-SB31TR607X");
  var event_action = "login";
  if (!userId) {
    userId = Math.floor(Math.random() * 1000000000000);
    window.localStorage.setItem("userId", userId);
    event_action = "register";
  }
  gtag("set", { user_id: userId });
  gtag("event", event_action, {
    event_category: "user",
    event_label: domain,
  });
}

googleAnalytics();
