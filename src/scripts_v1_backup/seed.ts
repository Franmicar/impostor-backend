import * as admin from 'firebase-admin';
import * as dotenv from 'dotenv';
import * as path from 'path';
import { translationsPt1 } from './translations_pt1';
import { translationsPt2 } from './translations_pt2';

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
            name_translations: { es: "Fiesta Épica", en: "Epic Party", fr: "Fête Épique", ca: "Festa Èpica" },
            imageId: "fiesta_epica",
            isPremium: false,
            wordCount: 20
        },
        {
            id: 'mock-2',
            name_translations: { es: "Nerd & Tecnología", en: "Nerd & Tech", fr: "Nerd & Tech", ca: "Nerd i Tecnologia" },
            imageId: "nerd_tecnologia",
            isPremium: false,
            wordCount: 20
        },
        {
            id: 'mock-3',
            name_translations: { es: "Comida Deliciosa", en: "Delicious Food", fr: "Nourriture Délicieuse", ca: "Menjar Deliciós" },
            imageId: "comida_deliciosa",
            isPremium: false,
            wordCount: 20
        },
        {
            id: 'mock-4',
            name_translations: { es: "Películas de Culto", en: "Cult Movies", fr: "Films Culte", ca: "Pel·lícules de Culte" },
            imageId: "peliculas_culto",
            isPremium: true,
            wordCount: 20
        },
        {
            id: 'mock-5',
            name_translations: { es: "Mundo Animal", en: "Animal World", fr: "Monde Animal", ca: "Món Animal" },
            imageId: "mundo_animal",
            isPremium: false,
            wordCount: 20
        },
        {
            id: 'mock-6',
            name_translations: { es: "Manga & Anime", en: "Manga & Anime", fr: "Manga & Anime", ca: "Manga i Anime" },
            imageId: "manga_anime",
            isPremium: false,
            wordCount: 20
        }
    ];

    const wordsData = {
        'mock-1': [
            { translations: { es: { word: "Cerveza", fake_word: "Refresco", hints: ["Bebida", "Alcohol", "Espuma"] }, en: { word: "Beer", fake_word: "Soda", hints: ["Drink", "Alcohol", "Foam"] } } },
            { translations: { es: { word: "Altavoz", fake_word: "Auriculares", hints: ["Música", "Sonido", "Bluetooth"] }, en: { word: "Speaker", fake_word: "Headphones", hints: ["Music", "Sound", "Bluetooth"] } } },
            { translations: { es: { word: "Karaoke", fake_word: "Concierto", hints: ["Cantar", "Micrófono", "Amigos"] }, en: { word: "Karaoke", fake_word: "Concert", hints: ["Sing", "Microphone", "Friends"] } } },
            { translations: { es: { word: "Discoteca", fake_word: "Bar", hints: ["Bailar", "Noche", "Luces"] }, en: { word: "Nightclub", fake_word: "Bar", hints: ["Dance", "Night", "Lights"] } } },
            { translations: { es: { word: "Resaca", fake_word: "Mareo", hints: ["Mañana", "Dolor", "Agua"] }, en: { word: "Hangover", fake_word: "Dizziness", hints: ["Morning", "Pain", "Water"] } } },
            { translations: { es: { word: "Chupito", fake_word: "Cóctel", hints: ["Pequeño", "Rápido", "Tequila"] }, en: { word: "Shot", fake_word: "Cocktail", hints: ["Small", "Fast", "Tequila"] } } },
            { translations: { es: { word: "DJ", fake_word: "Cantante", hints: ["Música", "Mezclas", "Discos"] }, en: { word: "DJ", fake_word: "Singer", hints: ["Music", "Mix", "Records"] } } },
            { translations: { es: { word: "Confeti", fake_word: "Globos", hints: ["Papel", "Colores", "Celebración"] }, en: { word: "Confetti", fake_word: "Balloons", hints: ["Paper", "Colors", "Celebration"] } } },
            { translations: { es: { word: "Invitación", fake_word: "Entrada", hints: ["Papel", "Fiesta", "VIP"] }, en: { word: "Invitation", fake_word: "Ticket", hints: ["Paper", "Party", "VIP"] } } },
            { translations: { es: { word: "Hielo", fake_word: "Limón", hints: ["Frío", "Bebida", "Agua"] }, en: { word: "Ice", fake_word: "Lemon", hints: ["Cold", "Drink", "Water"] } } },
            { translations: { es: { word: "Pastel", fake_word: "Rosquilla", hints: ["Cumpleaños", "Dulce", "Velas"] }, en: { word: "Cake", fake_word: "Donut", hints: ["Birthday", "Sweet", "Candles"] } } },
            { translations: { es: { word: "Regalo", fake_word: "Sorpresa", hints: ["Caja", "Papel", "Dar"] }, en: { word: "Gift", fake_word: "Surprise", hints: ["Box", "Paper", "Give"] } } },
            { translations: { es: { word: "Brindis", fake_word: "Salud", hints: ["Copas", "Chocar", "Celebrar"] }, en: { word: "Toast", fake_word: "Cheers", hints: ["Glasses", "Clink", "Celebrate"] } } },
            { translations: { es: { word: "Cena", fake_word: "Banquete", hints: ["Comer", "Amigos", "Noche"] }, en: { word: "Dinner", fake_word: "Banquet", hints: ["Eat", "Friends", "Night"] } } },
            { translations: { es: { word: "Tacones", fake_word: "Zapatillas", hints: ["Zapatos", "Altos", "Bailar"] }, en: { word: "Heels", fake_word: "Sneakers", hints: ["Shoes", "High", "Dance"] } } },
            { translations: { es: { word: "Guardarropa", fake_word: "Perchero", hints: ["Abrigos", "Ropa", "Dejar"] }, en: { word: "Cloakroom", fake_word: "Coat rack", hints: ["Coats", "Clothes", "Leave"] } } },
            { translations: { es: { word: "Portero", fake_word: "Guardia", hints: ["Entrada", "Puerta", "Fuerte"] }, en: { word: "Bouncer", fake_word: "Guard", hints: ["Entrance", "Door", "Strong"] } } },
            { translations: { es: { word: "Pulsera", fake_word: "Sello", hints: ["Muñeca", "Entrada", "Color"] }, en: { word: "Bracelet", fake_word: "Stamp", hints: ["Wrist", "Entrance", "Color"] } } },
            { translations: { es: { word: "Vaso", fake_word: "Copa", hints: ["Beber", "Cristal", "Fiesta"] }, en: { word: "Glass", fake_word: "Cup", hints: ["Drink", "Glass", "Party"] } } },
            { translations: { es: { word: "Cámara", fake_word: "Teléfono", hints: ["Fotos", "Recuerdos", "Flash"] }, en: { word: "Camera", fake_word: "Phone", hints: ["Photos", "Memories", "Flash"] } } }
        ],
        'mock-2': [
            { translations: { es: { word: "Teclado", fake_word: "Ratón", hints: ["Escribir", "Botones", "Ordenador"] }, en: { word: "Keyboard", fake_word: "Mouse", hints: ["Typing", "Buttons", "Computer"] } } },
            { translations: { es: { word: "Pantalla", fake_word: "Televisor", hints: ["Ver", "Píxeles", "Monitor"] }, en: { word: "Screen", fake_word: "TV", hints: ["Watch", "Pixels", "Monitor"] } } },
            { translations: { es: { word: "Videojuego", fake_word: "Película", hints: ["Jugar", "Mando", "Consola"] }, en: { word: "Video Game", fake_word: "Movie", hints: ["Play", "Controller", "Console"] } } },
            { translations: { es: { word: "Hackear", fake_word: "Programar", hints: ["Contraseña", "Seguridad", "Código"] }, en: { word: "Hack", fake_word: "Code", hints: ["Password", "Security", "Code"] } } },
            { translations: { es: { word: "Servidor", fake_word: "Ordenador", hints: ["Datos", "Internet", "Nube"] }, en: { word: "Server", fake_word: "Computer", hints: ["Data", "Internet", "Cloud"] } } },
            { translations: { es: { word: "Algoritmo", fake_word: "Fórmula", hints: ["Matemáticas", "Código", "Reglas"] }, en: { word: "Algorithm", fake_word: "Formula", hints: ["Math", "Code", "Rules"] } } },
            { translations: { es: { word: "Fibra Óptica", fake_word: "Wifi", hints: ["Cable", "Internet", "Velocidad"] }, en: { word: "Fiber Optic", fake_word: "Wifi", hints: ["Cable", "Internet", "Speed"] } } },
            { translations: { es: { word: "Realidad Virtual", fake_word: "Gafas 3D", hints: ["Gafas", "Inmersión", "Mundo"] }, en: { word: "Virtual Reality", fake_word: "3D Glasses", hints: ["Glasses", "Immersion", "World"] } } },
            { translations: { es: { word: "Robot", fake_word: "Dron", hints: ["Máquina", "Inteligencia", "Metal"] }, en: { word: "Robot", fake_word: "Drone", hints: ["Machine", "Intelligence", "Metal"] } } },
            { translations: { es: { word: "Batería", fake_word: "Cargador", hints: ["Energía", "Litio", "Móvil"] }, en: { word: "Battery", fake_word: "Charger", hints: ["Energy", "Lithium", "Mobile"] } } },
            { translations: { es: { word: "Antivirus", fake_word: "Cortafuegos", hints: ["Proteger", "Virus", "Programa"] }, en: { word: "Antivirus", fake_word: "Firewall", hints: ["Protect", "Virus", "Program"] } } },
            { translations: { es: { word: "Placa Base", fake_word: "Tarjeta Gráfica", hints: ["Ordenador", "Componente", "Circuitos"] }, en: { word: "Motherboard", fake_word: "Graphics Card", hints: ["Computer", "Component", "Circuits"] } } },
            { translations: { es: { word: "Inteligencia Artificial", fake_word: "Cerebro", hints: ["Máquina", "Aprender", "Futuro"] }, en: { word: "Artificial Intelligence", fake_word: "Brain", hints: ["Machine", "Learn", "Future"] } } },
            { translations: { es: { word: "Nube", fake_word: "Disco Duro", hints: ["Internet", "Guardar", "Datos"] }, en: { word: "Cloud", fake_word: "Hard Drive", hints: ["Internet", "Save", "Data"] } } },
            { translations: { es: { word: "Criptomoneda", fake_word: "Dinero", hints: ["Virtual", "Bitcoin", "Pagar"] }, en: { word: "Cryptocurrency", fake_word: "Money", hints: ["Virtual", "Bitcoin", "Pay"] } } },
            { translations: { es: { word: "Dron", fake_word: "Avión", hints: ["Volar", "Mando", "Cámara"] }, en: { word: "Drone", fake_word: "Airplane", hints: ["Fly", "Controller", "Camera"] } } },
            { translations: { es: { word: "Impresora 3D", fake_word: "Escáner", hints: ["Crear", "Plástico", "Figuras"] }, en: { word: "3D Printer", fake_word: "Scanner", hints: ["Create", "Plastic", "Figures"] } } },
            { translations: { es: { word: "Programador", fake_word: "Hacker", hints: ["Escribir", "Código", "Trabajo"] }, en: { word: "Programmer", fake_word: "Hacker", hints: ["Write", "Code", "Work"] } } },
            { translations: { es: { word: "Streaming", fake_word: "Descarga", hints: ["Ver", "Internet", "Vídeo"] }, en: { word: "Streaming", fake_word: "Download", hints: ["Watch", "Internet", "Video"] } } },
            { translations: { es: { word: "Microchip", fake_word: "Procesador", hints: ["Pequeño", "Silicio", "Cerebro"] }, en: { word: "Microchip", fake_word: "Processor", hints: ["Small", "Silicon", "Brain"] } } }
        ],
        'mock-3': [
            { translations: { es: { word: "Pizza", fake_word: "Lasaña", hints: ["Queso", "Italiana", "Redonda"] }, en: { word: "Pizza", fake_word: "Lasagna", hints: ["Cheese", "Italian", "Round"] } } },
            { translations: { es: { word: "Hamburguesa", fake_word: "Perrito caliente", hints: ["Carne", "Pan", "América"] }, en: { word: "Hamburger", fake_word: "Hot dog", hints: ["Meat", "Bun", "America"] } } },
            { translations: { es: { word: "Sushi", fake_word: "Pescado", hints: ["Japón", "Arroz", "Crudo"] }, en: { word: "Sushi", fake_word: "Fish", hints: ["Japan", "Rice", "Raw"] } } },
            { translations: { es: { word: "Helado", fake_word: "Pastel", hints: ["Frío", "Dulce", "Postre"] }, en: { word: "Ice Cream", fake_word: "Cake", hints: ["Cold", "Sweet", "Dessert"] } } },
            { translations: { es: { word: "Taco", fake_word: "Burrito", hints: ["México", "Picante", "Tortilla"] }, en: { word: "Taco", fake_word: "Burrito", hints: ["Mexico", "Spicy", "Tortilla"] } } },
            { translations: { es: { word: "Chocolate", fake_word: "Vainilla", hints: ["Cacao", "Dulce", "Marrón"] }, en: { word: "Chocolate", fake_word: "Vanilla", hints: ["Cacao", "Sweet", "Brown"] } } },
            { translations: { es: { word: "Ensalada", fake_word: "Sopa", hints: ["Sano", "Verde", "Lechuga"] }, en: { word: "Salad", fake_word: "Soup", hints: ["Healthy", "Green", "Lettuce"] } } },
            { translations: { es: { word: "Patatas Fritas", fake_word: "Puré", hints: ["Aceite", "Sal", "Patata"] }, en: { word: "French Fries", fake_word: "Mashed Potatoes", hints: ["Oil", "Salt", "Potato"] } } },
            { translations: { es: { word: "Spaghetti", fake_word: "Macarrones", hints: ["Pasta", "Largo", "Salsa"] }, en: { word: "Spaghetti", fake_word: "Macaroni", hints: ["Pasta", "Long", "Sauce"] } } },
            { translations: { es: { word: "Queso", fake_word: "Leche", hints: ["Amarillo", "Leche", "Ratón"] }, en: { word: "Cheese", fake_word: "Milk", hints: ["Yellow", "Dairy", "Mouse"] } } },
            { translations: { es: { word: "Bistec", fake_word: "Chuleta", hints: ["Carne", "Vaca", "Parrilla"] }, en: { word: "Steak", fake_word: "Chop", hints: ["Meat", "Cow", "Grill"] } } },
            { translations: { es: { word: "Paella", fake_word: "Arroz", hints: ["España", "Marisco", "Amarillo"] }, en: { word: "Paella", fake_word: "Rice", hints: ["Spain", "Seafood", "Yellow"] } } },
            { translations: { es: { word: "Crema", fake_word: "Caldo", hints: ["Líquido", "Cuchara", "Caliente"] }, en: { word: "Cream", fake_word: "Broth", hints: ["Liquid", "Spoon", "Hot"] } } },
            { translations: { es: { word: "Galleta", fake_word: "Bizcocho", hints: ["Dulce", "Horno", "Chocolate"] }, en: { word: "Cookie", fake_word: "Cake", hints: ["Sweet", "Oven", "Chocolate"] } } },
            { translations: { es: { word: "Kebab", fake_word: "Fajita", hints: ["Carne", "Enrollado", "Salsa"] }, en: { word: "Kebab", fake_word: "Fajita", hints: ["Meat", "Rolled", "Sauce"] } } },
            { translations: { es: { word: "Tortilla", fake_word: "Huevos fritos", hints: ["Huevos", "Patata", "Sartén"] }, en: { word: "Omelette", fake_word: "Fried eggs", hints: ["Eggs", "Potato", "Pan"] } } },
            { translations: { es: { word: "Pollo frito", fake_word: "Pavo", hints: ["Ave", "Crujiente", "Aceite"] }, en: { word: "Fried chicken", fake_word: "Turkey", hints: ["Bird", "Crispy", "Oil"] } } },
            { translations: { es: { word: "Croissant", fake_word: "Magdalena", hints: ["Desayuno", "Francés", "Mantequilla"] }, en: { word: "Croissant", fake_word: "Muffin", hints: ["Breakfast", "French", "Butter"] } } },
            { translations: { es: { word: "Sándwich", fake_word: "Bocadillo", hints: ["Pan", "Jamón", "Rápido"] }, en: { word: "Sandwich", fake_word: "Sub", hints: ["Bread", "Ham", "Fast"] } } },
            { translations: { es: { word: "Salchicha", fake_word: "Chorizo", hints: ["Carne", "Larga", "Cerdo"] }, en: { word: "Sausage", fake_word: "Chorizo", hints: ["Meat", "Long", "Pork"] } } }
        ],
        'mock-4': [
            { translations: { es: { word: "El Padrino", fake_word: "Scarface", hints: ["Mafia", "Corleone", "Francis Ford Coppola"] }, en: { word: "The Godfather", fake_word: "Scarface", hints: ["Mafia", "Corleone", "Francis Ford Coppola"] } } },
            { translations: { es: { word: "Matrix", fake_word: "Inception", hints: ["Pastillas", "Realidad simulada", "Keanu Reeves"] }, en: { word: "The Matrix", fake_word: "Inception", hints: ["Pills", "Simulated reality", "Keanu Reeves"] } } },
            { translations: { es: { word: "Pulp Fiction", fake_word: "Reservoir Dogs", hints: ["Tarantino", "Baile", "Misterio en maletín"] }, en: { word: "Pulp Fiction", fake_word: "Reservoir Dogs", hints: ["Tarantino", "Dancing", "Mystery in briefcase"] } } },
            { translations: { es: { word: "Star Wars", fake_word: "Star Trek", hints: ["Espacio", "Fuerza", "Darth Vader"] }, en: { word: "Star Wars", fake_word: "Star Trek", hints: ["Space", "Force", "Darth Vader"] } } },
            { translations: { es: { word: "El Resplandor", fake_word: "El Exorcista", hints: ["Terror", "Hotel", "Hacha"] }, en: { word: "The Shining", fake_word: "The Exorcist", hints: ["Horror", "Hotel", "Axe"] } } },
            { translations: { es: { word: "Avatar", fake_word: "E.T.", hints: ["Azul", "Planeta", "James Cameron"] }, en: { word: "Avatar", fake_word: "E.T.", hints: ["Blue", "Planet", "James Cameron"] } } },
            { translations: { es: { word: "Jurassic Park", fake_word: "Tiburón", hints: ["Dinosaurios", "Parque", "Isla"] }, en: { word: "Jurassic Park", fake_word: "Jaws", hints: ["Dinosaurs", "Park", "Island"] } } },
            { translations: { es: { word: "Cazafantasmas", fake_word: "Men in Black", hints: ["Fantasmas", "Protones", "Moco verde"] }, en: { word: "Ghostbusters", fake_word: "Men in Black", hints: ["Ghosts", "Protons", "Green slime"] } } },
            { translations: { es: { word: "Regreso al Futuro", fake_word: "Terminator", hints: ["Viaje temporal", "Coche", "Doc"] }, en: { word: "Back to the Future", fake_word: "Terminator", hints: ["Time travel", "Car", "Doc"] } } },
            { translations: { es: { word: "Rocky", fake_word: "Rambo", hints: ["Boxeo", "Sylvester Stallone", "Entrenamiento"] }, en: { word: "Rocky", fake_word: "Rambo", hints: ["Boxing", "Sylvester Stallone", "Training"] } } },
            { translations: { es: { word: "El Señor de los Anillos", fake_word: "Harry Potter", hints: ["Anillo", "Hobbit", "Frodo"] }, en: { word: "The Lord of the Rings", fake_word: "Harry Potter", hints: ["Ring", "Hobbit", "Frodo"] } } },
            { translations: { es: { word: "Indiana Jones", fake_word: "La Momia", hints: ["Látigo", "Sombrero", "Aventura"] }, en: { word: "Indiana Jones", fake_word: "The Mummy", hints: ["Whip", "Hat", "Adventure"] } } },
            { translations: { es: { word: "Alien", fake_word: "Depredador", hints: ["Espacio", "Monstruo", "Nave"] }, en: { word: "Alien", fake_word: "Predator", hints: ["Space", "Monster", "Ship"] } } },
            { translations: { es: { word: "Terminator", fake_word: "Robocop", hints: ["Cíborg", "Viaje temporal", "Volveré"] }, en: { word: "Terminator", fake_word: "Robocop", hints: ["Cyborg", "Time travel", "I'll be back"] } } },
            { translations: { es: { word: "El Rey León", fake_word: "Tarzán", hints: ["Animación", "África", "Simba"] }, en: { word: "The Lion King", fake_word: "Tarzan", hints: ["Animation", "Africa", "Simba"] } } },
            { translations: { es: { word: "King Kong", fake_word: "Godzilla", hints: ["Mono gigante", "Nueva York", "Empire State"] }, en: { word: "King Kong", fake_word: "Godzilla", hints: ["Giant ape", "New York", "Empire State"] } } },
            { translations: { es: { word: "Blade Runner", fake_word: "Mad Max", hints: ["Replicantes", "Futuro", "Cyberpunk"] }, en: { word: "Blade Runner", fake_word: "Mad Max", hints: ["Replicants", "Future", "Cyberpunk"] } } },
            { translations: { es: { word: "El Silencio de los Corderos", fake_word: "Seven", hints: ["Asesino", "Psiquiatra", "Hannibal"] }, en: { word: "The Silence of the Lambs", fake_word: "Seven", hints: ["Killer", "Psychiatrist", "Hannibal"] } } },
            { translations: { es: { word: "Gladiator", fake_word: "Espartaco", hints: ["Roma", "Arena", "Máximo"] }, en: { word: "Gladiator", fake_word: "Spartacus", hints: ["Rome", "Arena", "Maximus"] } } },
            { translations: { es: { word: "Titanic", fake_word: "El Diario de Noa", hints: ["Barco", "Hielo", "Romance"] }, en: { word: "Titanic", fake_word: "The Notebook", hints: ["Ship", "Ice", "Romance"] } } }
        ],
        'mock-5': [
            { translations: { es: { word: "León", fake_word: "Tigre", hints: ["Rey", "Melena", "África"] }, en: { word: "Lion", fake_word: "Tiger", hints: ["King", "Mane", "Africa"] } } },
            { translations: { es: { word: "Elefante", fake_word: "Rinoceronte", hints: ["Trompa", "Grande", "Gris"] }, en: { word: "Elephant", fake_word: "Rhinoceros", hints: ["Trunk", "Big", "Grey"] } } },
            { translations: { es: { word: "Delfín", fake_word: "Ballena", hints: ["Mar", "Inteligente", "Saltos"] }, en: { word: "Dolphin", fake_word: "Whale", hints: ["Sea", "Smart", "Jumps"] } } },
            { translations: { es: { word: "Águila", fake_word: "Halcón", hints: ["Pájaro", "Volar", "Cazador"] }, en: { word: "Eagle", fake_word: "Hawk", hints: ["Bird", "Fly", "Hunter"] } } },
            { translations: { es: { word: "Serpiente", fake_word: "Gusano", hints: ["Reptil", "Veneno", "Larga"] }, en: { word: "Snake", fake_word: "Worm", hints: ["Reptile", "Poison", "Long"] } } },
            { translations: { es: { word: "Mono", fake_word: "Gorila", hints: ["Plátano", "Árboles", "Divertido"] }, en: { word: "Monkey", fake_word: "Gorilla", hints: ["Banana", "Trees", "Funny"] } } },
            { translations: { es: { word: "Panda", fake_word: "Oso polar", hints: ["Blanco y negro", "Bambú", "China"] }, en: { word: "Panda", fake_word: "Polar bear", hints: ["Black & white", "Bamboo", "China"] } } },
            { translations: { es: { word: "Canguro", fake_word: "Koala", hints: ["Saltar", "Bolsa", "Australia"] }, en: { word: "Kangaroo", fake_word: "Koala", hints: ["Jump", "Pouch", "Australia"] } } },
            { translations: { es: { word: "Pingüino", fake_word: "Foca", hints: ["Hielo", "Pájaro", "Antártida"] }, en: { word: "Penguin", fake_word: "Seal", hints: ["Ice", "Bird", "Antarctica"] } } },
            { translations: { es: { word: "Jirafa", fake_word: "Avestruz", hints: ["Cuello largo", "África", "Amarillo"] }, en: { word: "Giraffe", fake_word: "Ostrich", hints: ["Long neck", "Africa", "Yellow"] } } },
            { translations: { es: { word: "Tigre", fake_word: "Leopardo", hints: ["Gato", "Rayas", "Selva"] }, en: { word: "Tiger", fake_word: "Leopard", hints: ["Cat", "Stripes", "Jungle"] } } },
            { translations: { es: { word: "Oso", fake_word: "Lobo", hints: ["Grande", "Pelo", "Miel"] }, en: { word: "Bear", fake_word: "Wolf", hints: ["Big", "Hair", "Honey"] } } },
            { translations: { es: { word: "Cocodrilo", fake_word: "Caimán", hints: ["Reptil", "Dientes", "Agua"] }, en: { word: "Crocodile", fake_word: "Alligator", hints: ["Reptile", "Teeth", "Water"] } } },
            { translations: { es: { word: "Hipopótamo", fake_word: "Rinoceronte", hints: ["Agua", "Fuerte", "Gris"] }, en: { word: "Hippopotamus", fake_word: "Rhinoceros", hints: ["Water", "Strong", "Grey"] } } },
            { translations: { es: { word: "Tiburón", fake_word: "Ballena", hints: ["Grande", "Mar", "Azul"] }, en: { word: "Shark", fake_word: "Whale", hints: ["Big", "Sea", "Blue"] } } },
            { translations: { es: { word: "Murciélago", fake_word: "Pájaro", hints: ["Noche", "Volar", "Cueva"] }, en: { word: "Bat", fake_word: "Bird", hints: ["Night", "Fly", "Cave"] } } },
            { translations: { es: { word: "Loro", fake_word: "Guacamayo", hints: ["Colores", "Hablar", "Pirata"] }, en: { word: "Parrot", fake_word: "Macaw", hints: ["Colors", "Talk", "Pirate"] } } },
            { translations: { es: { word: "Camello", fake_word: "Dromedario", hints: ["Desierto", "Joroba", "Arena"] }, en: { word: "Camel", fake_word: "Dromedary", hints: ["Desert", "Hump", "Sand"] } } },
            { translations: { es: { word: "Tortuga", fake_word: "Caracol", hints: ["Caparazón", "Lenta", "Verde"] }, en: { word: "Turtle", fake_word: "Snail", hints: ["Shell", "Slow", "Green"] } } },
            { translations: { es: { word: "Lobo", fake_word: "Perro", hints: ["Bosque", "Aullar", "Luna"] }, en: { word: "Wolf", fake_word: "Dog", hints: ["Forest", "Howl", "Moon"] } } }
        ],
        'mock-6': [
            { translations: { es: { word: "Naruto", fake_word: "Boruto", hints: ["Ninja", "Zorro", "Aldea"] }, en: { word: "Naruto", fake_word: "Boruto", hints: ["Ninja", "Fox", "Village"] } } },
            { translations: { es: { word: "Dragon Ball", fake_word: "One Punch Man", hints: ["Goku", "Esferas", "Saiyan"] }, en: { word: "Dragon Ball", fake_word: "One Punch Man", hints: ["Goku", "Spheres", "Saiyan"] } } },
            { translations: { es: { word: "One Piece", fake_word: "Fairy Tail", hints: ["Piratas", "Goma", "Sombrero"] }, en: { word: "One Piece", fake_word: "Fairy Tail", hints: ["Pirates", "Rubber", "Hat"] } } },
            { translations: { es: { word: "Death Note", fake_word: "Code Geass", hints: ["Cuaderno", "Shinigami", "Manzanas"] }, en: { word: "Death Note", fake_word: "Code Geass", hints: ["Notebook", "Shinigami", "Apples"] } } },
            { translations: { es: { word: "Shingeki no Kyojin", fake_word: "Evangelion", hints: ["Titanes", "Muros", "Eren"] }, en: { word: "Attack on Titan", fake_word: "Evangelion", hints: ["Titans", "Walls", "Eren"] } } },
            { translations: { es: { word: "Pokémon", fake_word: "Digimon", hints: ["Atrapar", "Monstruos", "Pikachu"] }, en: { word: "Pokémon", fake_word: "Digimon", hints: ["Catch", "Monsters", "Pikachu"] } } },
            { translations: { es: { word: "Evangelion", fake_word: "Gundam", hints: ["Mechas", "Ángeles", "Shinji"] }, en: { word: "Evangelion", fake_word: "Gundam", hints: ["Mechas", "Angels", "Shinji"] } } },
            { translations: { es: { word: "Sailor Moon", fake_word: "Sakura Card Captor", hints: ["Chicas mágicas", "Luna", "Transformación"] }, en: { word: "Sailor Moon", fake_word: "Cardcaptor Sakura", hints: ["Magical girls", "Moon", "Transformation"] } } },
            { translations: { es: { word: "My Hero Academia", fake_word: "Black Clover", hints: ["Héroes", "Poderes", "Escuela"] }, en: { word: "My Hero Academia", fake_word: "Black Clover", hints: ["Heroes", "Powers", "School"] } } },
            { translations: { es: { word: "Demon Slayer", fake_word: "Bleach", hints: ["Demonios", "Espadas", "Respiración"] }, en: { word: "Demon Slayer", fake_word: "Bleach", hints: ["Demons", "Swords", "Breathing"] } } },
            { translations: { es: { word: "Jojo's Bizarre", fake_word: "Baki", hints: ["Poderes", "Poses", "Estrellas"] }, en: { word: "Jojo's Bizarre", fake_word: "Baki", hints: ["Powers", "Poses", "Stars"] } } },
            { translations: { es: { word: "Hunter x Hunter", fake_word: "Yu Yu Hakusho", hints: ["Cazadores", "Examen", "Gon"] }, en: { word: "Hunter x Hunter", fake_word: "Yu Yu Hakusho", hints: ["Hunters", "Exam", "Gon"] } } },
            { translations: { es: { word: "Sword Art Online", fake_word: "Log Horizon", hints: ["Juego virtual", "Espadas", "Atrapados"] }, en: { word: "Sword Art Online", fake_word: "Log Horizon", hints: ["Virtual game", "Swords", "Trapped"] } } },
            { translations: { es: { word: "Jujutsu Kaisen", fake_word: "Chainsaw Man", hints: ["Maldiciones", "Dedos", "Hechiceros"] }, en: { word: "Jujutsu Kaisen", fake_word: "Chainsaw Man", hints: ["Curses", "Fingers", "Sorcerers"] } } },
            { translations: { es: { word: "One Punch Man", fake_word: "Mob Psycho 100", hints: ["Calvo", "Fuerte", "Héroe"] }, en: { word: "One Punch Man", fake_word: "Mob Psycho 100", hints: ["Bald", "Strong", "Hero"] } } },
            { translations: { es: { word: "Tokyo Revengers", fake_word: "Erased", hints: ["Viaje temporal", "Pandillas", "Llorón"] }, en: { word: "Tokyo Revengers", fake_word: "Erased", hints: ["Time travel", "Gangs", "Crybaby"] } } },
            { translations: { es: { word: "Haikyuu", fake_word: "Kuroko no Basket", hints: ["Voleibol", "Deporte", "Cuervos"] }, en: { word: "Haikyuu", fake_word: "Kuroko no Basket", hints: ["Volleyball", "Sport", "Crows"] } } },
            { translations: { es: { word: "Doraemon", fake_word: "Shin Chan", hints: ["Gato cósmico", "Bolsillo", "Futuro"] }, en: { word: "Doraemon", fake_word: "Shin Chan", hints: ["Cosmic cat", "Pocket", "Future"] } } },
            { translations: { es: { word: "Oliver y Benji", fake_word: "Inazuma Eleven", hints: ["Fútbol", "Campo eterno", "Balón"] }, en: { word: "Captain Tsubasa", fake_word: "Inazuma Eleven", hints: ["Football", "Eternal field", "Ball"] } } },
            { translations: { es: { word: "Detective Conan", fake_word: "Lupin III", hints: ["Niño", "Resolver casos", "Gafas"] }, en: { word: "Detective Conan", fake_word: "Lupin III", hints: ["Kid", "Solve cases", "Glasses"] } } }
        ]
    };

    try {
        const batch = db.batch();

        for (const pkg of packages) {
            const packageRef = db.collection('packages').doc(pkg.id);
            batch.set(packageRef, pkg);

            const wordsList = wordsData[pkg.id as keyof typeof wordsData];
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
