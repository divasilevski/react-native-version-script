const fs = require("fs");

function increaseTag(dir, regexArray) {
  try {
    let data = fs.readFileSync(dir, "utf-8");

    regexArray.forEach((regex) => {
      data = data.replace(regex, (_, g1, g2) => `${g1}${+g2 + 1}`);
    });

    fs.writeFileSync(dir, data, "utf-8");
  } catch (error) {
    console.error(error);
  }
}

increaseTag("android/app/build.gradle", [
  /(versionCode )(\d+)/g,
  /(versionName \"\d+\.)(\d+)/g,
]);

increaseTag("ios/SEKTA.xcodeproj/project.pbxproj", [
  /(CURRENT_PROJECT_VERSION = \d+\.)(\d+)/g,
  /(MARKETING_VERSION = \d+\.)(\d+)/g,
]);
