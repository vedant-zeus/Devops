const fs = require("fs");

const status = {
  git_pushes: 9,
  ci_success: 7,
  ci_failed: 2,
  deployment_status: "SUCCESS",
  last_updated: new Date().toLocaleString()
};

fs.writeFileSync("status.json", JSON.stringify(status, null, 2));
console.log("status.json generated");
