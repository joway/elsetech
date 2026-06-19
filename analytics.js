window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}

// get domain
var domain = window.location.hostname;

// get userId (returning user -> "login", new user -> "register")
var userId;
var event_action = "login";
try {
  userId = window.localStorage.getItem("userId");
  if (!userId) {
    userId = crypto.randomUUID();
    window.localStorage.setItem("userId", userId);
    event_action = "register";
  }
} catch (e) {
  // storage unavailable (private mode / disabled) -> treat as anonymous session
  userId = undefined;
}

function googleAnalytics() {
  gtag("js", new Date());
  gtag("config", "G-SB31TR607X", { user_id: userId });
  gtag("event", event_action, {
    event_category: "user",
    event_label: domain,
  });
}

googleAnalytics();
