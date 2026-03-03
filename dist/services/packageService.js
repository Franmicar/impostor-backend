"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageService = void 0;
class PackageService {
    constructor(packageRepository) {
        this.packageRepository = packageRepository;
    }
    async getAllPackages(lang = 'es') {
        const packages = await this.packageRepository.findAll();
        return packages.map(pkg => {
            // Extraer el nombre según el idioma, si no existe el idioma, fallback a español
            const translatedName = pkg.name_translations ? (pkg.name_translations[lang] || pkg.name_translations['es'] || pkg.id) : pkg.id;
            return {
                id: pkg.id,
                name: translatedName,
                imageId: pkg.imageId,
                isPremium: pkg.isPremium,
                wordCount: pkg.wordCount || 0 // In Firestore we will just store a wordCount field
            };
        });
    }
    async getPackageById(id, lang = 'es') {
        const pkg = await this.packageRepository.findById(id);
        if (!pkg) {
            throw new Error('Package not found');
        }
        const translatedName = pkg.name_translations ? (pkg.name_translations[lang] || pkg.name_translations['es'] || pkg.id) : pkg.id;
        return {
            id: pkg.id,
            name: translatedName,
            imageId: pkg.imageId,
            isPremium: pkg.isPremium,
            wordCount: pkg.wordCount || 0
        };
    }
    async getPackageWords(id, lang = 'es') {
        const wordsDocs = await this.packageRepository.findWordsByPackageId(id);
        // Mapear las traducciones anidadas a la respuesta plana
        return wordsDocs.map(wordDoc => {
            const translations = wordDoc.translations || {};
            const langData = translations[lang] || translations['es'] || {};
            return {
                id: wordDoc.id,
                word: langData.word || '',
                fakeWord: langData.fake_word || '',
                hints: langData.hints || []
            };
        }).filter(w => w.word !== ''); // Eliminar si no había traducción
    }
}
exports.PackageService = PackageService;
