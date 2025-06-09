import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n.use(LanguageDetector).use(initReactI18next).use(Backend).init({
  debug: true,
  fallbackLng: "en",
  returnObjects: true,

  // resources: {
  //   en: {
  //     translation: {
  //       greeting: "Hello, Welcome {{name}}!",
  //       description: {
  //         line1: "<1>This is a simple </1><b>multilingual app</b>.",
  //         line2: "Switch languages to see dynamic translations.",
  //       },
  //     },
  //   },
  //   fr: {
  //     translation: {
  //       greeting: "Bonjour, Bienvenue {{name}} !",
  //       description: {
  //         line1: "<1>Ceci est une</1> <b>application multilingue</b>.",
  //         line2: "Changez de langue pour voir les traductions dynamiques.",
  //       },
  //     },
  //   },
  //   hi: {
  //     translation: {
  //       greeting: "नमस्ते, स्वागत है {{name}}!",
  //       description: {
  //         line1: "<1>यह एक सरल </1><b>बहुभाषी ऐप है</b>",
  //         line2: "डायनामिक अनुवाद देखने के लिए भाषा बदलें।",
  //       },
  //     },
  //   },
  //   ru: {
  //     translation: {
  //       greeting: "Привет, добро пожаловать {{name}}!",
  //       description: {
  //         line1: "<1>Это простое</1> <b>многоязычное приложение</b>.",
  //         line2: "Смените язык, чтобы увидеть переводы.",
  //       },
  //     },
  //   },
  //   fa: {
  //     translation: {
  //       greeting: "{{name}} سلام، خوش آمدید!",
  //       description: {
  //         line1: "<1>این یک </1><b>برنامه چند زبانه ساده است</b>.",
  //         line2: "برای دیدن ترجمه‌ها زبان را تغییر دهید.",
  //       },
  //     },
  //   },
  //   tr: {
  //     translation: {
  //       greeting: "Merhaba, Hoş geldiniz {{name}}!",
  //       description: {
  //         line1: "<1>Bu basit </1><b>çok dilli bir uygulamadır</b>.",
  //         line2: "Dinamik çevirileri görmek için dili değiştirin.",
  //       },
  //     },
  //   },
  //   ur: {
  //     translation: {
  //       greeting: "{{name}} ہیلو، خوش آمدید!",
  //       description: {
  //         line1: "<1>یہ ایک </1><b>سادہ کثیر لسانی ایپ</b> ہے۔",
  //         line2: "ڈائنامک ترجمے دیکھنے کے لیے زبان تبدیل کریں۔",
  //       },
  //     },
  //   },
  //   ko: {
  //     translation: {
  //       greeting: "안녕하세요, 환영합니다! {{name}}",
  //       description: {
  //         line1: "<1>이것은 간단한 </1><b>다국어 앱입니다</b>.",
  //         line2: "동적 번역을 보려면 언어를 변경하세요.",
  //       },
  //     },
  //   },
  // },
});
