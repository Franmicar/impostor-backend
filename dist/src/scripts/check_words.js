"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const exceptions_1 = require("./exceptions");
const allMocks = [
    { name: 'mock-1 (Animales)', data: package_mock1_1.packageMock1 },
    { name: 'mock-2 (Objetos y Herramientas)', data: package_mock2_1.packageMock2 },
    { name: 'mock-3 (Comida)', data: package_mock3_1.packageMock3 },
    { name: 'mock-4 (Naturaleza)', data: package_mock4_1.packageMock4 },
    { name: 'mock-5 (Transporte)', data: package_mock5_1.packageMock5 },
    { name: 'mock-6 (Ropa)', data: package_mock6_1.packageMock6 },
    { name: 'mock-7 (Cuerpo Humano)', data: package_mock7_1.packageMock7 },
    { name: 'mock-8 (Sentimientos)', data: package_mock8_1.packageMock8 },
    { name: 'mock-9 (Colores)', data: package_mock9_1.packageMock9 },
    { name: 'mock-10 (Bichos)', data: package_mock10_1.packageMock10 },
    { name: 'mock-11 (Países)', data: package_mock11_1.packageMock11 },
    { name: 'mock-12 (Música)', data: package_mock12_1.packageMock12 },
    { name: 'mock-13 (Profesiones)', data: package_mock13_1.packageMock13 },
    { name: 'mock-14 (Marcas)', data: package_mock14_1.packageMock14 },
    { name: 'mock-15 (Fantasía)', data: package_mock15_1.packageMock15 },
    { name: 'mock-16 (Famosos)', data: package_mock16_1.packageMock16 },
    { name: 'mock-17 (Ciencia)', data: package_mock17_1.packageMock17 },
    { name: 'mock-18 (Superhéroes)', data: package_mock18_1.packageMock18 },
];
const wordsMap = new Map();
const duplicates = [];
let totalWords = 0;
for (const mock of allMocks) {
    for (const entry of mock.data) {
        totalWords++;
        const esWord = entry.translations.es.word.toLowerCase().trim();
        if (wordsMap.has(esWord)) {
            if (exceptions_1.allowedDuplicates.includes(esWord)) {
                // Excepción permitida: la palabra puede estar repetida en varios paquetes
            }
            else {
                duplicates.push({
                    word: esWord,
                    foundIn: [wordsMap.get(esWord).pkg, mock.name]
                });
            }
        }
        else {
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
}
else {
    console.log("No duplicates found. All " + totalWords + " words are unique.");
}
