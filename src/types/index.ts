export interface PackageTranslation {
    [lang: string]: string;
}

export interface Package {
    id: string;
    name_translations?: { [lang: string]: string };
    imageId: string;
    isPremium: boolean;
    wordCount?: number;
}

export interface WordTranslation {
    word: string;
    fake_word: string;
    hints: string[];
}

export interface Word {
    id: string;
    translations?: { [lang: string]: WordTranslation };
}

export interface PackageResponse {
    id: string;
    name: string;
    imageId: string;
    isPremium: boolean;
    wordCount: number;
}

export interface WordResponse {
    id: string;
    word: string;
    fakeWord: string;
    hints: string[];
}
