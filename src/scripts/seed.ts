import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { translationsPt1 } from './translations_pt1';
import { translationsPt2 } from './translations_pt2';
import { packageMock1 } from './package_mock1';
import { packageMock2 } from './package_mock2';
import { packageMock3 } from './package_mock3';
import { packageMock4 } from './package_mock4';
import { packageMock5 } from './package_mock5';
import { packageMock6 } from './package_mock6';
import { packageMock7 } from './package_mock7';
import { packageMock8 } from './package_mock8';
import { packageMock9 } from './package_mock9';
import { packageMock10 } from './package_mock10';
import { packageMock11 } from './package_mock11';
import { packageMock12 } from './package_mock12';
import { packageMock13 } from './package_mock13';
import { packageMock14 } from './package_mock14';
import { packageMock15 } from './package_mock15';
import { packageMock16 } from './package_mock16';
import { packageMock17 } from './package_mock17';
import { packageMock18 } from './package_mock18';

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
            wordCount: packageMock1.length
        },
        {
            id: 'mock-2',
            name_translations: { es: "Nerd y Tecnología", en: "Nerd & Tech", fr: "Geek & Tech", ca: "Nerd i Tecnologia", it: "Nerd & Tecnologia", pt: "Nerd & Tecnologia", de: "Nerd & Technik", ru: "Нерд и Технологии", zh: "极客与科技", ja: "オタク＆テクノロジー" },
            imageId: "nerd_tecnologia",
            isPremium: false,
            wordCount: packageMock2.length
        },
        {
            id: 'mock-3',
            name_translations: { es: "Comida", en: "Delicious Food", fr: "Nourriture Délicieuse", ca: "Menjar Deliciós", it: "Cibo Delizioso", pt: "Comida Deliciosa", de: "Leckeres Essen", ru: "Вкусная еда", zh: "美味的食物", ja: "美味しい食べ物" },
            imageId: "comida_deliciosa",
            isPremium: false,
            wordCount: packageMock3.length
        },
        {
            id: 'mock-4',
            name_translations: { es: "Películas", en: "Movies", fr: "Films", ca: "Pel·lícules", it: "Film", pt: "Filmes", de: "Filme", ru: "Фильмы", zh: "电影", ja: "映画" },
            imageId: "peliculas_culto",
            isPremium: true,
            wordCount: packageMock4.length
        },
        {
            id: 'mock-5',
            name_translations: { es: "Animales", en: "Animals", fr: "Animaux", ca: "Animals", it: "Animali", pt: "Animais", de: "Tiere", ru: "Животные", zh: "动物", ja: "動物" },
            imageId: "mundo_animal",
            isPremium: false,
            wordCount: packageMock5.length
        },
        {
            id: 'mock-6',
            name_translations: { es: "Manga y Anime", en: "Manga & Anime", fr: "Manga & Anime", ca: "Manga i Anime", it: "Manga & Anime", pt: "Mangá & Anime", de: "Manga & Anime", ru: "Манга и Аниме", zh: "漫画与动画", ja: "マンガ＆アニメ" },
            imageId: "manga_anime",
            isPremium: false,
            wordCount: packageMock6.length
        },
        {
            id: 'mock-7',
            name_translations: { es: "Bichos", en: "Bugs", fr: "Bestioles", ca: "Bestioles", it: "Insetti", pt: "Bichos", de: "Krabbeltiere", ru: "Букашки", zh: "虫子", ja: "虫" },
            imageId: "bichos",
            isPremium: false,
            wordCount: packageMock7.length
        },
        {
            id: 'mock-8',
            name_translations: { es: "Deportes", en: "Sports", fr: "Sports", ca: "Esports", it: "Sport", pt: "Esportes", de: "Sport", ru: "Спорт", zh: "体育", ja: "スポーツ" },
            imageId: "deportes",
            isPremium: false,
            wordCount: packageMock8.length
        },
        {
            id: 'mock-9',
            name_translations: { es: "Hogar", en: "Home", fr: "Maison", ca: "Llar", it: "Casa", pt: "Lar", de: "Zuhause", ru: "Дом", zh: "家", ja: "家" },
            imageId: "hogar",
            isPremium: false,
            wordCount: packageMock9.length
        },
        {
            id: 'mock-10',
            name_translations: { es: "Videojuegos", en: "Video Games", fr: "Jeux Vidéo", ca: "Videojocs", it: "Videogiochi", pt: "Videogames", de: "Videospiele", ru: "Видеоигры", zh: "电子游戏", ja: "ビデオゲーム" },
            imageId: "videojuegos",
            isPremium: false,
            wordCount: packageMock10.length
        },
        {
            id: 'mock-11',
            name_translations: { es: "Países", en: "Countries", fr: "Pays", ca: "Països", it: "Paesi", pt: "Países", de: "Länder", ru: "Страны", zh: "国家", ja: "国" },
            imageId: "paises",
            isPremium: false,
            wordCount: packageMock11.length
        },
        {
            id: 'mock-12',
            name_translations: { es: "Música", en: "Music", fr: "Musique", ca: "Música", it: "Musica", pt: "Música", de: "Musik", ru: "Музыка", zh: "音乐", ja: "音楽" },
            imageId: "musica",
            isPremium: false,
            wordCount: packageMock12.length
        },
        {
            id: 'mock-13',
            name_translations: { es: "Profesiones", en: "Professions", fr: "Professions", ca: "Professions", it: "Professioni", pt: "Profissões", de: "Berufe", ru: "Профессии", zh: "职业", ja: "職業" },
            imageId: "profesiones",
            isPremium: false,
            wordCount: packageMock13.length
        },
        {
            id: 'mock-14',
            name_translations: { es: "Marcas", en: "Brands", fr: "Marques", ca: "Marques", it: "Marche", pt: "Marcas", de: "Marken", ru: "Бренды", zh: "品牌", ja: "ブランド" },
            imageId: "marcas",
            isPremium: false,
            wordCount: packageMock14.length
        },
        {
            id: 'mock-15',
            name_translations: { es: "Fantasía y Mitología", en: "Fantasy / Myth.", fr: "Fantaisie / Myth.", ca: "Fantasia / Mit.", it: "Fantasia / Mit.", pt: "Fantasia / Mit.", de: "Fantasie / Myth.", ru: "Фэнтези / Миф.", zh: "幻想 / 神话", ja: "ファンタジー/神話" },
            imageId: "fantasia",
            isPremium: false,
            wordCount: packageMock15.length
        },
        {
            id: 'mock-16',
            name_translations: { es: "Celebridades", en: "Celebrities", fr: "Célébrités", ca: "Celebritats", it: "Celebrità", pt: "Celebridades", de: "Promis", ru: "Знаменитости", zh: "名人", ja: "有名人" },
            imageId: "celebridades",
            isPremium: false,
            wordCount: packageMock16.length
        },
        {
            id: 'mock-17',
            name_translations: { es: "Ciencia y Espacio", en: "Science / Space", fr: "Science / Esp.", ca: "Ciència / Esp.", it: "Scienza / Spaz.", pt: "Ciência / Esp.", de: "Wiss. / Welt.", ru: "Наука / Косм.", zh: "科学 / 太空", ja: "科学 / 宇宙" },
            imageId: "ciencia",
            isPremium: false,
            wordCount: packageMock17.length
        },
        {
            id: 'mock-18',
            name_translations: { es: "Superhéroes", en: "Superheroes", fr: "Super-héros", ca: "Superherois", it: "Supereroi", pt: "Super-heróis", de: "Superhelden", ru: "Супергерои", zh: "超级英雄", ja: "スーパーヒーロー" },
            imageId: "superheroes",
            isPremium: false,
            wordCount: packageMock18.length
        }
    ];

    const wordsData = {
        'mock-1': packageMock1,
        'mock-2': packageMock2,
        'mock-3': packageMock3,
        'mock-4': packageMock4,
        'mock-5': packageMock5,
        'mock-6': packageMock6,
        'mock-7': packageMock7,
        'mock-8': packageMock8,
        'mock-9': packageMock9,
        'mock-10': packageMock10,
        'mock-11': packageMock11,
        'mock-12': packageMock12,
        'mock-13': packageMock13,
        'mock-14': packageMock14,
        'mock-15': packageMock15,
        'mock-16': packageMock16,
        'mock-17': packageMock17,
        'mock-18': packageMock18
    };

    try {
        const batch = db.batch();

        for (const pkg of packages) {
            const wordsList = wordsData[pkg.id as keyof typeof wordsData];
            const actualPkg = { ...pkg, wordCount: wordsList ? wordsList.length : pkg.wordCount };
            const packageRef = db.collection('packages').doc(pkg.id);
            batch.set(packageRef, actualPkg);

            if (wordsList) {
                const mergedFrCa: any = { ...translationsPt1, ...translationsPt2 };
                const extraList = mergedFrCa[pkg.id];

                for (let i = 0; i < wordsList.length; i++) {
                    const wordObj = wordsList[i] as any;
                    if (extraList && extraList[i]) {
                        if (extraList[i].fr) wordObj.translations.fr = extraList[i].fr;
                        if (extraList[i].ca) wordObj.translations.ca = extraList[i].ca;
                    }
                    const wordRef = packageRef.collection('words').doc();
                    batch.set(wordRef, wordObj);
                }
            }
        }

        await batch.commit();
        console.log('Database seeded successfully!');
    } catch (error) {
        console.error('Error seeding database:', error);
    }
};

seedData().then(() => process.exit(0)).catch(() => process.exit(1));
