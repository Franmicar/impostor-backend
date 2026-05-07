import { PackageRepository } from '../repositories/PackageRepository';
import { PackageService } from '../services/packageService';
import { PackageController } from '../controllers/PackageController';

class Container {
    public readonly packageRepository: PackageRepository;
    public readonly packageService: PackageService;
    public readonly packageController: PackageController;

    constructor() {
        this.packageRepository = new PackageRepository();
        this.packageService = new PackageService(this.packageRepository);
        this.packageController = new PackageController(this.packageService);
    }
}

// Singleton instance
export const container = new Container();
