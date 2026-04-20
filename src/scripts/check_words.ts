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
import { allowedDuplicates } from './exceptions';

const allMocks = [
    { name: 'mock-1 (Animales)', data: packageMock1 },
    { name: 'mock-2 (Objetos y Herramientas)', data: packageMock2 },
    { name: 'mock-3 (Comida)', data: packageMock3 },
    { name: 'mock-4 (Naturaleza)', data: packageMock4 },
    { name: 'mock-5 (Transporte)', data: packageMock5 },
    { name: 'mock-6 (Ropa)', data: packageMock6 },
    { name: 'mock-7 (Cuerpo Humano)', data: packageMock7 },
    { name: 'mock-8 (Sentimientos)', data: packageMock8 },
    { name: 'mock-9 (Colores)', data: packageMock9 },
    { name: 'mock-10 (Bichos)', data: packageMock10 },
    { name: 'mock-11 (Países)', data: packageMock11 },
    { name: 'mock-12 (Música)', data: packageMock12 },
    { name: 'mock-13 (Profesiones)', data: packageMock13 },
    { name: 'mock-14 (Marcas)', data: packageMock14 },
    { name: 'mock-15 (Fantasía)', data: packageMock15 },
    { name: 'mock-16 (Famosos)', data: packageMock16 },
    { name: 'mock-17 (Ciencia)', data: packageMock17 },
    { name: 'mock-18 (Superhéroes)', data: packageMock18 },
];

const wordsMap = new Map<string, { pkg: string, word: string }>();
const duplicates = [];
let totalWords = 0;

for (const mock of allMocks) {
    for (const entry of mock.data as any) {
        totalWords++;
        const esWord = entry.translations.es.word.toLowerCase().trim();
        if (wordsMap.has(esWord)) {
            if (allowedDuplicates.includes(esWord)) {
                // Excepción permitida: la palabra puede estar repetida en varios paquetes
            } else {
                duplicates.push({
                    word: esWord,
                    foundIn: [wordsMap.get(esWord)!.pkg, mock.name]
                });
            }
        } else {
            wordsMap.set(esWord, { pkg: mock.name, word: entry.translations.es.word });
        }

        // Sanity check translations
        const langs = ['en', 'fr', 'ca', 'it', 'pt', 'de', 'ru', 'zh', 'ja'];
        for (const lang of langs) {
            if (!entry.translations[lang] || !entry.translations[lang].word) {
                console.log(`Missing translation for '${esWord}' in ${lang}`);
            }
        }
    }
}

if (duplicates.length > 0) {
    console.log("Found " + duplicates.length + " duplicates:");
    console.table(duplicates);
} else {
    console.log("No duplicates found. All " + totalWords + " words are unique.");
}
