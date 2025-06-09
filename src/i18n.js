import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    returnObjects: true,
    resources: {
      en: {
        translation: {
          greeting: "Hello, Welcome!",
          description: {
            line1: "This is a simple multilingual app.",
            line2: "Switch languages to see dynamic translations.",
          },
        },
      },
      fr: {
        translation: {
          greeting: "Bonjour, Bienvenue !",
          description: {
            line1: "Ceci est une application multilingue simple.",
            line2: "Changez de langue pour voir les traductions dynamiques.",
          },
        },
      },
      hi: {
        translation: {
          greeting: "नमस्ते, स्वागत है!",
          description: {
            line1: "यह एक सरल बहुभाषी ऐप है।",
            line2: "डायनामिक अनुवाद देखने के लिए भाषा बदलें।",
          },
        },
      },
      ru: {
        translation: {
          greeting: "Привет, добро пожаловать!",
          description: {
            line1: "Это простое многоязычное приложение.",
            line2: "Смените язык, чтобы увидеть переводы.",
          },
        },
      },
      fa: {
        translation: {
          greeting: "سلام، خوش آمدید!",
          description: {
            line1: "این یک برنامه چند زبانه ساده است.",
            line2: "برای دیدن ترجمه‌ها زبان را تغییر دهید.",
          },
        },
      },
      tr: {
        translation: {
          greeting: "Merhaba, Hoş geldiniz!",
          description: {
            line1: "Bu basit çok dilli bir uygulamadır.",
            line2: "Dinamik çevirileri görmek için dili değiştirin.",
          },
        },
      },
      ur: {
        translation: {
          greeting: "ہیلو، خوش آمدید!",
          description: {
            line1: "یہ ایک سادہ کثیر لسانی ایپ ہے۔",
            line2: "ڈائنامک ترجمے دیکھنے کے لیے زبان تبدیل کریں۔",
          },
        },
      },
      ko: {
        translation: {
          greeting: "안녕하세요, 환영합니다!",
          description: {
            line1: "이것은 간단한 다국어 앱입니다.",
            line2: "동적 번역을 보려면 언어를 변경하세요.",
          },
        },
      },
    },
  });
