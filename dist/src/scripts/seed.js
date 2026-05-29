"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const admin = __importStar(require("firebase-admin"));
const dotenv = __importStar(require("dotenv"));
const translations_pt1_1 = require("./translations_pt1");
const translations_pt2_1 = require("./translations_pt2");
const package_mock1_1 = require("./package_mock1");
const package_mock2_1 = require("./package_mock2");
const package_mock3_1 = require("./package_mock3");
const package_mock4_1 = require("./package_mock4");
const package_mock5_1 = require("./package_mock5");
const package_mock6_1 = require("./package_mock6");
const package_mock7_1 = require("./package_mock7");
const package_mock8_1 = require("./package_mock8");
const package_mock9_1 = require("./package_mock9");
const package_mock10_1 = require("./package_mock10");
const package_mock11_1 = require("./package_mock11");
const package_mock12_1 = require("./package_mock12");
const package_mock13_1 = require("./package_mock13");
const package_mock14_1 = require("./package_mock14");
const package_mock15_1 = require("./package_mock15");
const package_mock16_1 = require("./package_mock16");
const package_mock17_1 = require("./package_mock17");
const package_mock18_1 = require("./package_mock18");
dotenv.config();
if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.applicationDefault()
    });
}
const db = admin.firestore();
const seedData = async () => {
    console.log('Starting seed process...');
    const packages = [
        {
            id: 'mock-1',
            name_translations: { es: "Fiesta", en: "Party", fr: "Fête", ca: "Festa", it: "Festa", pt: "Festa", de: "Party", ru: "Вечеринка", zh: "派对", ja: "パーティー" },
            imageId: "fiesta_epica",
            isPremium: false,
            wordCount: package_mock1_1.packageMock1.length
        },
        {
            id: 'mock-2',
            name_translations: { es: "Nerd y Tecnología", en: "Nerd & Tech", fr: "Geek & Tech", ca: "Nerd i Tecnologia", it: "Nerd & Tecnologia", pt: "Nerd & Tecnologia", de: "Nerd & Technik", ru: "Нерд и Технологии", zh: "极客与科技", ja: "オタク＆テクノロジー" },
            imageId: "nerd_tecnologia",
            isPremium: false,
            wordCount: package_mock2_1.packageMock2.length
        },
        {
            id: 'mock-3',
            name_translations: { es: "Comida", en: "Delicious Food", fr: "Nourriture Délicieuse", ca: "Menjar Deliciós", it: "Cibo Delizioso", pt: "Comida Deliciosa", de: "Leckeres Essen", ru: "Вкусная еда", zh: "美味的食物", ja: "美味しい食べ物" },
            imageId: "comida_deliciosa",
            isPremium: false,
            wordCount: package_mock3_1.packageMock3.length
        },
        {
            id: 'mock-4',
            name_translations: { es: "Películas", en: "Movies", fr: "Films", ca: "Pel·lícules", it: "Film", pt: "Filmes", de: "Filme", ru: "Фильмы", zh: "电影", ja: "映画" },
            imageId: "peliculas_culto",
            isPremium: true,
            wordCount: package_mock4_1.packageMock4.length
        },
        {
            id: 'mock-5',
            name_translations: { es: "Animales", en: "Animals", fr: "Animaux", ca: "Animals", it: "Animali", pt: "Animais", de: "Tiere", ru: "Животные", zh: "动物", ja: "動物" },
            imageId: "mundo_animal",
            isPremium: false,
            wordCount: package_mock5_1.packageMock5.length
        },
        {
            id: 'mock-6',
            name_translations: { es: "Manga y Anime", en: "Manga & Anime", fr: "Manga & Anime", ca: "Manga i Anime", it: "Manga & Anime", pt: "Mangá & Anime", de: "Manga & Anime", ru: "Манга и Аниме", zh: "漫画与动画", ja: "マンガ＆アニメ" },
            imageId: "manga_anime",
            isPremium: false,
            wordCount: package_mock6_1.packageMock6.length
        },
        {
            id: 'mock-7',
            name_translations: { es: "Bichos", en: "Bugs", fr: "Bestioles", ca: "Bestioles", it: "Insetti", pt: "Bichos", de: "Krabbeltiere", ru: "Букашки", zh: "虫子", ja: "虫" },
            imageId: "bichos",
            isPremium: false,
            wordCount: package_mock7_1.packageMock7.length
        },
        {
            id: 'mock-8',
            name_translations: { es: "Deportes", en: "Sports", fr: "Sports", ca: "Esports", it: "Sport", pt: "Esportes", de: "Sport", ru: "Спорт", zh: "体育", ja: "スポーツ" },
            imageId: "deportes",
            isPremium: false,
            wordCount: package_mock8_1.packageMock8.length
        },
        {
            id: 'mock-9',
            name_translations: { es: "Hogar", en: "Home", fr: "Maison", ca: "Llar", it: "Casa", pt: "Lar", de: "Zuhause", ru: "Дом", zh: "家", ja: "家" },
            imageId: "hogar",
            isPremium: false,
            wordCount: package_mock9_1.packageMock9.length
        },
        {
            id: 'mock-10',
            name_translations: { es: "Videojuegos", en: "Video Games", fr: "Jeux Vidéo", ca: "Videojocs", it: "Videogiochi", pt: "Videogames", de: "Videospiele", ru: "Видеоигры", zh: "电子游戏", ja: "ビデオゲーム" },
            imageId: "videojuegos",
            isPremium: false,
            wordCount: package_mock10_1.packageMock10.length
        },
        {
            id: 'mock-11',
            name_translations: { es: "Países", en: "Countries", fr: "Pays", ca: "Països", it: "Paesi", pt: "Países", de: "Länder", ru: "Страны", zh: "国家", ja: "国" },
            imageId: "paises",
            isPremium: false,
            wordCount: package_mock11_1.packageMock11.length
        },
        {
            id: 'mock-12',
            name_translations: { es: "Música", en: "Music", fr: "Musique", ca: "Música", it: "Musica", pt: "Música", de: "Musik", ru: "Музыка", zh: "音乐", ja: "音楽" },
            imageId: "musica",
            isPremium: false,
            wordCount: package_mock12_1.packageMock12.length
        },
        {
            id: 'mock-13',
            name_translations: { es: "Profesiones", en: "Professions", fr: "Professions", ca: "Professions", it: "Professioni", pt: "Profissões", de: "Berufe", ru: "Профессии", zh: "职业", ja: "職業" },
            imageId: "profesiones",
            isPremium: false,
            wordCount: package_mock13_1.packageMock13.length
        },
        {
            id: 'mock-14',
            name_translations: { es: "Marcas", en: "Brands", fr: "Marques", ca: "Marques", it: "Marche", pt: "Marcas", de: "Marken", ru: "Бренды", zh: "品牌", ja: "ブランド" },
            imageId: "marcas",
            isPremium: false,
            wordCount: package_mock14_1.packageMock14.length
        },
        {
            id: 'mock-15',
            name_translations: { es: "Fantasía y Mitología", en: "Fantasy / Myth.", fr: "Fantaisie / Myth.", ca: "Fantasia / Mit.", it: "Fantasia / Mit.", pt: "Fantasia / Mit.", de: "Fantasie / Myth.", ru: "Фэнтези / Миф.", zh: "幻想 / 神话", ja: "ファンタジー/神話" },
            imageId: "fantasia",
            isPremium: false,
            wordCount: package_mock15_1.packageMock15.length
        },
        {
            id: 'mock-16',
            name_translations: { es: "Celebridades", en: "Celebrities", fr: "Célébrités", ca: "Celebritats", it: "Celebrità", pt: "Celebridades", de: "Promis", ru: "Знаменитости", zh: "名人", ja: "有名人" },
            imageId: "celebridades",
            isPremium: false,
            wordCount: package_mock16_1.packageMock16.length
        },
        {
            id: 'mock-17',
            name_translations: { es: "Ciencia y Espacio", en: "Science / Space", fr: "Science / Esp.", ca: "Ciència / Esp.", it: "Scienza / Spaz.", pt: "Ciência / Esp.", de: "Wiss. / Welt.", ru: "Наука / Косм.", zh: "科学 / 太空", ja: "科学 / 宇宙" },
            imageId: "ciencia",
            isPremium: false,
            wordCount: package_mock17_1.packageMock17.length
        },
        {
            id: 'mock-18',
            name_translations: { es: "Superhéroes", en: "Superheroes", fr: "Super-héros", ca: "Superherois", it: "Supereroi", pt: "Super-heróis", de: "Superhelden", ru: "Супергерои", zh: "超级英雄", ja: "スーパーヒーロー" },
            imageId: "superheroes",
            isPremium: false,
            wordCount: package_mock18_1.packageMock18.length
        }
    ];
    const wordsData = {
        'mock-1': package_mock1_1.packageMock1,
        'mock-2': package_mock2_1.packageMock2,
        'mock-3': package_mock3_1.packageMock3,
        'mock-4': package_mock4_1.packageMock4,
        'mock-5': package_mock5_1.packageMock5,
        'mock-6': package_mock6_1.packageMock6,
        'mock-7': package_mock7_1.packageMock7,
        'mock-8': package_mock8_1.packageMock8,
        'mock-9': package_mock9_1.packageMock9,
        'mock-10': package_mock10_1.packageMock10,
        'mock-11': package_mock11_1.packageMock11,
        'mock-12': package_mock12_1.packageMock12,
        'mock-13': package_mock13_1.packageMock13,
        'mock-14': package_mock14_1.packageMock14,
        'mock-15': package_mock15_1.packageMock15,
        'mock-16': package_mock16_1.packageMock16,
        'mock-17': package_mock17_1.packageMock17,
        'mock-18': package_mock18_1.packageMock18
    };
    try {
        const batch = db.batch();
        for (const pkg of packages) {
            const wordsList = wordsData[pkg.id];
            const actualPkg = { ...pkg, wordCount: wordsList ? wordsList.length : pkg.wordCount };
            const packageRef = db.collection('packages').doc(pkg.id);
            batch.set(packageRef, actualPkg);
            if (wordsList) {
                const mergedFrCa = { ...translations_pt1_1.translationsPt1, ...translations_pt2_1.translationsPt2 };
                const extraList = mergedFrCa[pkg.id];
                for (let i = 0; i < wordsList.length; i++) {
                    const wordObj = wordsList[i];
                    if (extraList && extraList[i]) {
                        if (extraList[i].fr)
                            wordObj.translations.fr = extraList[i].fr;
                        if (extraList[i].ca)
                            wordObj.translations.ca = extraList[i].ca;
                    }
                    const wordRef = packageRef.collection('words').doc();
                    batch.set(wordRef, wordObj);
                }
            }
        }
        await batch.commit();
        console.log('Database seeded successfully!');
    }
    catch (error) {
        console.error('Error seeding database:', error);
    }
};
seedData().then(() => process.exit(0)).catch(() => process.exit(1));
