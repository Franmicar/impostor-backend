import { getDb } from '../config/firebase';

export class PackageRepository {
    private get collection() {
        return getDb().collection('packages');
    }

    /**
     * Obtiene todos los paquetes disponibles.
     */
    async findAll() {
        const snapshot = await this.collection.get();
        const packages: any[] = [];
        snapshot.forEach(doc => {
            packages.push({ id: doc.id, ...doc.data() });
        });
        return packages;
    }

    /**
     * Obtiene un paquete específico por ID
     */
    async findById(id: string): Promise<any> {
        const doc = await this.collection.doc(id).get();
        if (!doc.exists) return null;
        return { id: doc.id, ...doc.data() };
    }

    /**
     * Obtiene todas las palabras (words) de un paquete específico.
     * En Firestore, esto puede ser una subcolección "/packages/{id}/words"
     * o una colección de words donde package_id == id. Usaremos una subcolección por conveniencia.
     */
    async findWordsByPackageId(packageId: string) {
        const snapshot = await this.collection.doc(packageId).collection('words').get();
        const words: any[] = [];
        snapshot.forEach(doc => {
            words.push({ id: doc.id, ...doc.data() });
        });
        return words;
    }
}
