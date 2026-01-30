const fs = require("fs");

const status = {
  git_pushes: process.env.GIT_PUSHES || 0,
  ci_success: process.env.CI_SUCCESS || 0,
  ci_failed: process.env.CI_FAILED || 0,
  deployment_status: process.env.CI_STATUS || "UNKNOWN",
  last_updated: new Date().toISOString()
};

fs.writeFileSync("status.json", JSON.stringify(status, null, 2));
console.log("status.json generated");
