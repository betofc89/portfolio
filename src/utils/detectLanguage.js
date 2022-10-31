const navigatorLanguages = require("navigator-languages");

const detectLanguage = () => {
  console.log(navigatorLanguages());
  if (navigatorLanguages()[0].includes("pt")) {
    return "pt";
  } else {
    return "en";
  }
};

export default detectLanguage;
