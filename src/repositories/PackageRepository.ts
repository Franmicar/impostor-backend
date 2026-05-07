import { getDb } from '../config/firebase';
import { Package, Word } from '../types';

export class PackageRepository {
    private get collection() {
        return getDb().collection('packages');
    }

    /**
     * Obtiene todos los paquetes disponibles.
     */
    async findAll(): Promise<Package[]> {
        const snapshot = await this.collection.get();
        const packages: Package[] = [];
        snapshot.forEach(doc => {
            packages.push({ id: doc.id, ...doc.data() } as Package);
        });
        return packages;
    }

    /**
     * Obtiene un paquete específico por ID
     */
    async findById(id: string): Promise<Package | null> {
        const doc = await this.collection.doc(id).get();
        if (!doc.exists) return null;
        return { id: doc.id, ...doc.data() } as Package;
    }

    /**
     * Obtiene todas las palabras (words) de un paquete específico.
     * En Firestore, esto puede ser una subcolección "/packages/{id}/words"
     * o una colección de words donde package_id == id. Usaremos una subcolección por conveniencia.
     */
    async findWordsByPackageId(packageId: string): Promise<Word[]> {
        const snapshot = await this.collection.doc(packageId).collection('words').get();
        const words: Word[] = [];
        snapshot.forEach(doc => {
            words.push({ id: doc.id, ...doc.data() } as Word);
        });
        return words;
    }
}
