"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageRepository = void 0;
const firebase_1 = require("../config/firebase");
class PackageRepository {
    constructor() {
        this.collection = firebase_1.db.collection('packages');
    }
    /**
     * Obtiene todos los paquetes disponibles.
     */
    async findAll() {
        const snapshot = await this.collection.get();
        const packages = [];
        snapshot.forEach(doc => {
            packages.push({ id: doc.id, ...doc.data() });
        });
        return packages;
    }
    /**
     * Obtiene un paquete específico por ID
     */
    async findById(id) {
        const doc = await this.collection.doc(id).get();
        if (!doc.exists)
            return null;
        return { id: doc.id, ...doc.data() };
    }
    /**
     * Obtiene todas las palabras (words) de un paquete específico.
     * En Firestore, esto puede ser una subcolección "/packages/{id}/words"
     * o una colección de words donde package_id == id. Usaremos una subcolección por conveniencia.
     */
    async findWordsByPackageId(packageId) {
        const snapshot = await this.collection.doc(packageId).collection('words').get();
        const words = [];
        snapshot.forEach(doc => {
            words.push({ id: doc.id, ...doc.data() });
        });
        return words;
    }
}
exports.PackageRepository = PackageRepository;
