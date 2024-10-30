<script>
import { hasScopeRef } from '@vue/compiler-core';
import ArtikelMenu from './ArtikelMenu.vue';

export default {
    name: "Artikel",
    components: {
        ArtikelMenu
    },
    data() {
        return {
            rules: [
                {
                    category: 'Femminile',
                    percentage: '46%',
                    description: 'Gli articoli femminili sono usati per un altro insieme specifico di parole.',
                    examples: [
                        {
                            rule: 'die Zahlen',
                            items: ['Die Eins', 'die Fünf', 'Achtunddreißig'],
                        },
                        {
                            rule: 'Bäume und Pflanzen',
                            items: ['die Palme', 'die Blume', 'die Rose'],
                        },
                        {
                            rule: 'Obstsorten',
                            items: [': die Banane', 'die Kiwi', 'die Traube',],
                            extra: " aber DER Apfel",
                        },
                        {
                            rule: 'Es gibt jetzt noch bestimmte Endungen, die typisch sind für feminine Nomen.',
                            items: [
                                'die Heizung', 'die Rechnung', 'die Versicherung',
                                'die Freiheit', 'die Einheit', 'die Fähigkeit',
                                'die Gesellschaft', 'die Freundschaft',
                                'die Station', 'die Region', 'die Religion',
                                'die Musik', 'die Politik', 'die Mathematik',
                                'die Universität', 'die Qualität',
                                'die Natur', 'die Kultur', 'die Temperatur',
                                'die Distanz', 'die Existenz', 'die Differenz',
                                'die Garage', 'die Etage', 'die Marmelade',
                                'die Bäckerei', 'die Metzgerei', 'die Bücherei',
                                'die Lampe', 'die Straße', 'die Reise'
                            ],
                            extra: ['-ung', '-heit', '-keit', '-schaft', '-ion', '-ik', '-ät', '-ur', '-enz', '-ade', '-e']
                        }
                    ],
                },
                {
                    category: 'maskulin - DER',
                    percentage: '34%',
                    description: 'Gli articoli maschili sono usati per specifici gruppi di parole e concetti.',
                    examples: [
                        {
                            rule: 'der Wochentage, der Monate, der Tageszeiten',
                            items: ['der Montag', 'der Januar', 'der Frühling', 'der Morgen'],
                            extra: "aber DIE Nacht",
                        },
                        {
                            rule: 'der Jahreszeiten',
                            items: ['der Frühling', 'der Sommer', 'der Herbst', 'der Winter'],
                            extra: "",
                        },
                        {
                            rule: 'der Himmelsrichtungen',
                            items: ['der Norden', 'der Osten', 'der Süden', 'der Westen'],
                            extra: "",
                        },
                        {
                            rule: 'das Wetter',
                            items: ['er Regen', 'der Schnee', 'der Wind', 'der Nebel', 'der Sturm'],
                            extra: "aber DIE Wolke",
                        },
                        {
                            rule: 'Automarken',
                            items: ['der VolksWagen', 'der Audi', 'der BMW', 'der Mercedes', 'der Wein', 'der Schnaps'],
                            extra: "",
                        },
                        {
                            rule: 'Alkohol',
                            items: ['der Wein', 'der Sekt', 'der Schnaps'],
                            extra: "aber DAS Bier",
                        },
                        {
                            rule: 'Währungen',
                            items: ['der Euro', 'der Dollar', 'der Rubel', 'der Peso'],
                            extra: "aber DIE Rupie und DAS Pfund",
                        },
                        {
                            rule: 'Es gibt jetzt noch bestimmte Endungen, die typisch sind für maskuline Nomen.',
                            items: [
                                'der Frühling', 'der Zwilling', 'der Schmetterling',
                                'der Kapitalismus', 'der Sozialismus', 'der Optimismus',
                                'der Kapitalist', 'der Sozialist', 'der Optimist',
                                'der Informatiker', 'der Mechaniker', 'der Techniker',
                                'der Doktorand', 'der Demonstrant', 'der Präsident',
                                'der Ingenieur', 'der Frisör'
                            ],
                            extra: ['-ling', '-ismus', '-ist', '-iker', '-and', '-ant', '-ent', '-eur'],
                        }

                    ],
                },
                {
                    category: 'Neutro',
                    percentage: '20%',
                    description: 'Gli articoli neutri coprono vari elementi astratti, materiali e sostanze.',
                    examples: [
                        {
                            rule: 'Nominalizzazioni e colori',
                            items: ['das Laufen', 'das Blau'],
                        },
                        {
                            rule: 'Materiali e sostanze',
                            items: ['das Gold', 'das Plastik', 'das Holz'],
                        },
                        {
                            rule: 'Alcune terminazioni specifiche',
                            items: ['das Fräulein', 'das Thema', 'das Zentrum'],
                        },
                    ],
                },
            ],
        };
    }
};
</script>

<template>
    <div class="container mt-5">
        <ArtikelMenu></ArtikelMenu>
        <div class="row justify-content-center">
            <div class="col-12 col-lg-8">
                <h2>Das Grammatische Geschlecht</h2>
                <p>Alle deutsch Nomen haben ein Geschlecht (Genus):
                <ul>
                    <li>DIE - 46% der Nomen sind feminin (weiblich auch genannt )</li>
                    <li>DER - 34% der Nomen sind maskulin (männlich auch genannt )</li>
                    <li>DAS - 20% der Nomen sind neutrum (sächlich auch genannt )</li>
                </ul>
                </p>
            </div>

            <div class="col-12 col-lg-8">
                <!-- Sezioni per ciascun insieme di regole -->
                <div class="sets">
                    <div v-for="rule in rules" :key="rule.category" class="card my-4 p-3">
                        <h3>{{ rule.category }} ({{ rule.percentage }})</h3>
                        <p>{{ rule.description }}</p>
                        <!-- Insiemi di regole per ciascuna categoria -->
                        <div v-for="example in rule.examples" :key="example.rule" class="">
                            <h4>{{ example.rule }}</h4>
                            <ul>
                                <li v-for="item in example.items" :key="item">{{ item }}</li>
                            </ul>
                            <!-- Mostra 'extra' se presente -->
                            <p v-if="example.extra"><strong class="text-bg-warning p-1">{{ example.extra
                                    }}</strong> </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
