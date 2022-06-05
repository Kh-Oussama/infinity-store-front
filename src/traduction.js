import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import {initReactI18next} from "react-i18next";

const resources = {
    en: {
        translation: {
            "Groceries Delivered in 90 Minute": "Groceries Delivered in 90 Minute",
            "Get your healthy foods & snacks delivered at your doorsteps all day everyday": "Get your healthy foods & snacks delivered at your doorsteps all day everyday",
            "Search": "Search",
            "Search your products from here": "Search your products from here",
        }
    },
    ar: {
        translation: {
            "Groceries Delivered in 90 Minute": "توصيل البقالة في 90 دقيقة",
            "Get your healthy foods & snacks delivered at your doorsteps all day everyday": "احصل على الأطعمة الصحية والوجبات الخفيفة الخاصة بك على عتبة داركم طوال اليوم كل يوم",
            "Search": "بحث",
            "Search your products from here": "ابحث في منتجاتك من هنا",
        }
    },
    fr: {
        translation: {
            "Groceries Delivered in 90 Minute": "Épicerie livrée en 90 minutes",
            "Get your healthy foods & snacks delivered at your doorsteps all day everyday": "Faites-vous livrer vos aliments et collations sains à votre porte toute la journée tous les jours",
            "Search": "Chercher",
            "Search your products from here": "Recherchez vos produits à partir d'ici",
        }
    }
}

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: resources,
        supportedLngs: ['en', 'ar', 'fr'],
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: ['cookie', 'localStorage', 'sessionStorage', 'navigator', 'path', 'subdomain'],
            caches: ['cookie', 'localStorage'],
        },
    });

export default i18n;
