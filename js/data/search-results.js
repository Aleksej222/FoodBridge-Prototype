import { translations } from "../i18n/translations.js";

export const searchResults = {

    // ITALIAN
    italian: {
        "tipo 00 flour": {
            name: "Tipo 00 flour",
            description: "Finely milled Italian wheat flour",
            available: true,
            stores: {
                Oslo: [
                    "Meny (specialty flour section)",
                    "Jacobs Utvalgte",
                    "Italian food shops in Oslo"
                ]
            },

            translations: {
                no: {
                    name: "Tipo 00-mel",
                    description: "Finmalt italiensk hvetemel",
                    stores: {
                        Oslo: [
                            "Meny (avdeling for spesialmel)",
                            "Jacobs Utvalgte",
                            "Italienske matbutikker i Oslo"
                        ]
                    }
                }
            }
        },

        pancetta: {
            name: "Pancetta",
            description: "Cured pork belly",
            available: true,
            stores: {
                Oslo: [
                    "Meny deli counter (sliced to order)",
                    "Coop Extra (pre-packaged)",
                    "Italian food shops in Oslo"
                ]
            },

            translations: {
                no: {
                    name: "Pancetta",
                    description: "Speket svinebryst",
                    stores: {
                        Oslo: [
                            "Meny ferskvaredisk (skåret på bestilling)",
                            "Coop Extra (ferdigpakket)",
                            "Italienske matbutikker i Oslo"
                        ]
                    }
                }
            }
        },

        guanciale: {
            name: "Guanciale",
            description: "cured pork cheek",
            available: false,
            stores: {},

            translations: {
                no: {
                    name: "Guanciale",
                    description: "Speket svinekjake"
                }
            },

            alternatives: [

                {
                    name: "Pancetta",
                    description: "available at Meny deli counter",
                    match: 75,
                    color: "#5a7a2d",
                    impact: "Less fatty than guanciale and milder in flavour. For carbonara and amatriciana, render it slowly in a dry pan to draw out the fat. Avoid pre-packaged thin slices — ask for thicker cuts at the deli.",

                    translations: {
                        no: {
                            name: "Pancetta",
                            description: "Tilgjengelig i ferskvaredisken hos Meny",
                            impact: "Mindre fet enn guanciale og mildere på smak..."
                        }
                    }
                },

                {
                    name: "Bacon",
                    description: "thick-cut, unsmoked if possible",
                    match: 55,
                    color: "#c8570a",
                    impact: "Norwegian bacon is smoked, which shifts the flavour profile noticeably. Use it only when pancetta isn't available. Blanch briefly in boiling water to reduce smokiness before frying.",

                    translations: {
                        no: {
                            name: "Bacon",
                            description: "Tykke skiver, helst uten røyksmak",
                            impact: "Norsk bacon er røkt, noe som påvirker smaken merkbart. Bruk det bare når pancetta ikke er tilgjengelig. Forvell baconet raskt i kokende vann før steking for å redusere røyksmaken."
                        }
                    }
                }

            ]
        },

        burrata: {
            name: "Burrata",
            description: "Fresh Italian cheese with a creamy centre",
            available: true,
            stores: {
                Oslo: [
                    "Meny (cheese section)",
                    "Coop Mega",
                    "Italian food shops in Oslo"
                ]
            },

            translations: {
                no: {
                    name: "Burrata",
                    description: "Fersk italiensk ost med en kremet kjerne",
                    stores: {
                        Oslo: [
                            "Meny (ostedisken)",
                            "Coop Mega",
                            "Italienske matbutikker i Oslo"
                        ]
                    }
                }
            }
        },

        "'nduja": {
            name: "'Nduja",
            description: "Spicy, spreadable Calabrian pork sausage",
            available: false,
            stores: {},

            translations: {
                no: {
                    name: "'Nduja",
                    description: "Sterk, smørbar svinepølse fra Calabria"
                }
            },

            alternatives: [
                {
                    name: "Chorizo paste",
                    description: "tube",
                    match: 55,
                    color: "#c8570a",
                    impact:
                        "Mix 2 tbsp chorizo paste with a few drops of olive oil. Lacks the fermented depth of 'nduja but gives a similar spreadable texture and heat for sauces and pizza.",
                    translations: {
                        no: {
                            name: "Chorizopasta",
                            description: "På tube",
                            impact: "Bland 2 ss chorizopasta med noen dråper olivenolje. Den mangler den fermenterte dybden til 'nduja, men gir en lignende smørbar konsistens og styrke til sauser og pizza."
                        }
                    }
                },
                {
                    name: "Sobrasada",
                    description: "Spanish spreadable sausage",
                    match: 60,
                    color: "#c8570a",
                    impact:
                        "Milder and less spicy than 'nduja but has the right fatty, spreadable consistency. Available at some Meny stores or Spanish specialty shops. Add extra chili flakes.",
                    translations: {
                        no: {
                            name: "Sobrasada",
                            description: "Spansk smørbar pølse",
                            impact: "Mildere og mindre sterk enn 'nduja, men har riktig fet og smørbar konsistens. Finnes hos enkelte Meny-butikker og i spanske spesialbutikker. Tilsett ekstra chiliflak for mer styrke."
                        }
                    }
                },
            ]

        },

        "stracciatella cheese": {
            name: "Stracciatella cheese",
            description: "Soft Italian cheese with a creamy texture",
            available: true,
            stores: {
                Oslo: [
                    "Italian specialty food shops",
                    "Meny (selected stores)",
                    "Cheese delicatessens"
                ]
            },

            translations: {
                no: {
                    name: "Stracciatella-ost",
                    description: "Myk italiensk ost med kremet konsistens",
                    stores: {
                        Oslo: [
                            "Italienske spesialbutikker",
                            "Meny (utvalgte butikker)",
                            "Ostedelikatessebutikker"
                        ]
                    }
                }
            }
        }
    },

    // BOSNIAN
    bosnian: {
        ajvar: {
            name: "Ajvar",
            description: "Ristet paprika- og auberginerelish",
            available: true,
            stores: {
                Oslo: [
                    "Internasjonale matbutikker i Oslo",
                    "Meny (avdeling for internasjonale matvarer)",
                    "Balkanske matbutikker"
                ]
            },
            translations: {
                no: {
                    name: "Ajvar",
                    description: "Relish av ristet paprika og aubergine",
                    stores: {
                        Oslo: [
                            "Internasjonale matbutikker i Oslo",
                            "Meny (avdeling for internasjonale matvarer)",
                            "Balkanske matbutikker"
                        ]
                    }
                }
            }
        },

        kajmak: {
            name: "Kajmak",
            description: "Traditional Balkan creamy dairy spread",
            available: false,
            stores: {},

            translations: {
                no: {
                    name: "Kajmak",
                    description: "Tradisjonelt balkansk, kremet meieripålegg"
                }
            },

            alternatives: [
                {
                    name: "Imported kajmak — Balkan grocery stores in Oslo",
                    description: "Grünerløkka, Torshov area",
                    match: 95,
                    color: "#2d5a27",
                    impact:
                        "Fresh or packaged kajmak is occasionally sold at Balkan grocery stores in Oslo. Call ahead to check availability — it is stocked when supply allows. Brands vary; Serbian and Bosnian imported versions are common.",

                    translations: {
                        no: {
                            name: "Importert kajmak – balkanske matbutikker i Oslo",
                            description: "Områdene Grünerløkka og Torshov",
                            impact:
                                "Fersk eller ferdigpakket kajmak selges av og til i balkanske matbutikker i Oslo. Ring på forhånd for å sjekke tilgjengeligheten – produktet er på lager når leveransene tillater det. Merkene varierer, men serbiske og bosniske importvarianter er vanlige."
                        }
                    }
                },
                {
                    name: "Clotted cream",
                    description: "Meny, selected stores — imported from UK",
                    match: 72,
                    color: "#5a7a2d",
                    impact:
                        "Clotted cream is thick, rich, and mildly tangy — the closest widely available product in Norway. Less salty than kajmak. Serve at room temperature alongside ćevapi or spread on lepinja bread.",

                    translations: {
                        no: {
                            name: "Clotted cream (engelsk fløteost)",
                            description: "Meny, utvalgte butikker – importert fra Storbritannia",
                            impact:
                                "Clotted cream er tykk, fyldig og lett syrlig – det nærmeste lett tilgjengelige alternativet i Norge. Den er mindre salt enn kajmak. Serveres ved romtemperatur sammen med ćevapi eller smøres på lepinja-brød."
                        }
                    }
                },
                {
                    name: "Philadelphia cream cheese softened with crème fraîche",
                    description: "",
                    match: 52,
                    color: "#c8570a",
                    impact:
                        "Stir equal parts cream cheese and crème fraîche together until smooth. Less tangy and richer than kajmak. Works as a spread; not suitable for cooked applications where kajmak melts into the dish.",

                    translations: {
                        no: {
                            name: "Philadelphia kremost blandet med crème fraîche",
                            description: "",
                            impact:
                                "Bland like deler kremost og crème fraîche til en jevn konsistens. Alternativet er fyldigere og mindre syrlig enn kajmak. Fungerer godt som pålegg, men egner seg ikke til varme retter der kajmak skal smelte inn i maten."
                        }
                    }
                }
            ]
        },

        "sudžuk": {
            name: "Sudžuk",
            description: "Traditional Balkan dry-cured sausage",
            available: true,
            stores: {
                Oslo: [
                    "Balkan grocery stores",
                    "International food shops in Oslo"
                ]
            },
            translations: {
                no: {
                    name: "Sudžuk",
                    description: "Tradisjonell balkansk, speket og tørket pølse",
                    stores: {
                        Oslo: [
                            "Balkanske matbutikker",
                            "Internasjonale matbutikker i Oslo"
                        ]
                    }
                }
            }
        },

        "ćevapi": {
            name: "Ćevapi sausages",
            description: "Traditional skinless minced meat sausages",
            available: false,
            stores: {},

            translations: {
                no: {
                    name: "Ćevapi",
                    description: "Tradisjonelle balkanske kjøttpølser uten skinn"
                }
            },

            alternatives: [
                {
                    name: "Frozen ćevapi — Balkania or Hajduk brand",
                    description: "Balkan grocery stores in Oslo",
                    match: 90,
                    color: "#2d5a27",
                    impact:
                        "Frozen pre-made ćevapi from Balkan grocery stores (check Grünerløkka and Torshov in Oslo) are very close to fresh. Grill directly from frozen on high heat. Brands to look for: Balkania, Hajduk, or similar.",

                    translations: {
                        no: {
                            name: "Frosne ćevapi – Balkania eller Hajduk",
                            description: "Balkanske matbutikker i Oslo",
                            impact:
                                "Ferdiglagde, frosne ćevapi fra balkanske matbutikker (sjekk Grünerløkka og Torshov i Oslo) er svært like ferske varianter. Grill dem direkte fra frossen tilstand på høy varme. Se etter merker som Balkania, Hajduk eller lignende."
                        }
                    }
                },
                {
                    name: "Merguez sausages",
                    description: "Middle Eastern grocery stores, selected Meny",
                    match: 55,
                    color: "#c8570a",
                    impact:
                        "Merguez is lamb-based and spiced with harissa — spicier and more aromatic than ćevapi. Remove from casing and shape if needed. Grills well but flavour profile differs noticeably.",

                    translations: {
                        no: {
                            name: "Merguez-pølser",
                            description: "Midtøsten-butikker og utvalgte Meny-butikker",
                            impact:
                                "Merguez er basert på lammekjøtt og krydret med harissa – den er sterkere og mer aromatisk enn ćevapi. Fjern eventuelt pølseskinnet og form kjøttet på nytt. Egner seg godt til grilling, men smaken er merkbart annerledes."
                        }
                    }
                },
                {
                    name: "Medisterpølse",
                    description: "casings removed, reshaped",
                    match: 40,
                    color: "#9b1c1c",
                    impact:
                        "Pork-only and much milder than ćevapi. Works texturally on the grill but lacks the garlic-lamb character. Best used when no other option is available.",

                    translations: {
                        no: {
                            name: "Medisterpølse",
                            description: "Uten skinn, formet på nytt",
                            impact:
                                "Laget utelukkende av svinekjøtt og mye mildere enn ćevapi. Konsistensen fungerer godt på grillen, men den mangler den karakteristiske smaken av hvitløk og lam. Brukes helst bare når ingen andre alternativer er tilgjengelige."
                        }
                    }
                }
            ]
        }
    },

    // CROATIAN
    croatian: {
        "fuži pasta": {
            name: "Fuži pasta",
            description: "Traditional Istrian hand-rolled pasta",
            available: true,
            stores: {
                Oslo: [
                    "Italian specialty food shops",
                    "Meny (pasta section)",
                    "International food shops in Oslo"
                ]
            },
            translations: {
                no: {
                    name: "Fuži-pasta",
                    description: "Tradisjonell håndrullet pasta fra Istria",
                    stores: {
                        Oslo: [
                            "Italienske spesialbutikker",
                            "Meny (pastahyllen)",
                            "Internasjonale matbutikker i Oslo"
                        ]
                    }
                }
            }
        },

        "paški sir": {
            name: "Paški sir",
            description: "Traditional sheep's milk cheese from Pag island",
            available: false,
            stores: {},

            translations: {
                no: {
                    name: "Paški sir",
                    description: "Tradisjonell ost laget av sauemelk fra øya Pag"
                }
            },

            alternatives: [
                {
                    name: "Manchego",
                    description: "aged, from Meny cheese counter",
                    match: 72,
                    color: "#5a7a2d",
                    impact:
                        "Manchego is a dry, firm sheep's milk cheese with a similar nuttiness. Use the same quantity grated or sliced. Slightly more buttery than paški sir.",

                    translations: {
                        no: {
                            name: "Manchego",
                            description: "Modnet, fra ostedisken hos Meny",
                            impact:
                                "Manchego er en fast, tørr ost laget av sauemelk, med en lignende nøtteaktig smak. Bruk samme mengde, revet eller i skiver. Den har en litt mer smøraktig smak enn paški sir."
                        }
                    }
                },
                {
                    name: "Pecorino Romano",
                    description: "Meny/Coop Extra",
                    match: 65,
                    color: "#c8570a",
                    impact:
                        "Sharper and saltier than paški sir. Reduce the amount by 20% when cooking. Works well grated over pasta or in baked dishes.",

                    translations: {
                        no: {
                            name: "Pecorino Romano",
                            description: "Meny/Coop Extra",
                            impact:
                                "Skarpere og saltere enn paški sir. Reduser mengden med 20 % når du lager mat. Egner seg godt revet over pasta eller i ovnsbakte retter."
                        }
                    }
                }
            ]
        },

        "pršut": {
            name: "Pršut",
            description: "Croatian dry-cured ham",
            available: true,
            stores: {
                Oslo: [
                    "Mediterranean delicatessens",
                    "Meny (selected stores)",
                    "International food shops"
                ]
            },
            translations: {
                no: {
                    name: "Pršut",
                    description: "Kroatisk spekeskinke",
                    stores: {
                        Oslo: [
                            "Middelhavsdelikatessebutikker",
                            "Meny (utvalgte butikker)",
                            "Internasjonale matbutikker"
                        ]
                    }
                }
            }
        },

        "vegeta": {
            name: "Vegeta",
            description: "Vegeta (all-purpose seasoning)",
            available: true,
            stores: {
                Oslo: [
                    "Meny (spice section)",
                    "International food shops",
                    "Spice specialty stores"
                ]
            },
            translations: {
                no: {
                    name: "Vegeta",
                    description: "Vegeta (allroundkrydder)",
                    stores: {
                        Oslo: [
                            "Meny (krydderhyllen)",
                            "Internasjonale matbutikker",
                            "Spesialbutikker for krydder"
                        ]
                    }
                }
            }
        },

        "maraschino cherries": {
            name: "Maraschino cherries",
            description: "original",
            available: false,
            stores: {},

            translations: {
                no: {
                    name: "Maraschinokirsebær",
                    description: "Originale maraschinokirsebær"
                }
            },

            alternatives: [
                {
                    name: "Italian Luxardo maraschino cherries",
                    description: "online, selected Meny stores",
                    match: 85,
                    color: "#5a7a2d",
                    impact:
                        "Luxardo cherries are the Italian equivalent and widely regarded as equal in quality. Check Meny's international spirits aisle or order from Vinmonopolet's online shop.",

                    translations: {
                        no: {
                            name: "Italienske maraschinokirsebær fra Luxardo",
                            description: "På nett og i utvalgte Meny-butikker",
                            impact:
                                "Luxardo-kirsebær er det italienske alternativet og regnes generelt for å være av tilsvarende kvalitet. Sjekk den internasjonale hyllen hos Meny eller bestill fra Vinmonopolets nettbutikk."
                        }
                    }
                },
                {
                    name: "Regular cocktail cherries in syrup",
                    description: "",
                    match: 40,
                    color: "#9b1c1c",
                    impact:
                        "Sweeter and lack the almond-like maraschino liqueur depth. Only use in desserts — not as a substitute in cocktails where the original's bittersweet character matters.",

                    translations: {
                        no: {
                            name: "Vanlige cocktailkirsebær i lake",
                            description: "",
                            impact:
                                "Disse er søtere og mangler den mandelaktige dybden fra maraschinolikør. Bruk dem kun i desserter – ikke som erstatning i cocktailer der den originale bittersøte smaken er viktig."
                        }
                    }
                }
            ]
        }
    },

    // CZECH
    czech: {
        "kmín": {
            name: "Kmín",
            description: "Caraway seeds used in Czech cooking",
            available: true,
            stores: {
                Oslo: [
                    "Meny (spice section)",
                    "International food shops",
                    "Spice specialty stores"
                ]
            },
            translations: {
                no: {
                    name: "Kmín (karvefrø)",
                    description: "Karvefrø som brukes i tsjekkisk matlaging",
                    stores: {
                        Oslo: [
                            "Meny (krydderhyllen)",
                            "Internasjonale matbutikker",
                            "Spesialbutikker for krydder"
                        ]
                    }
                }
            }
        },

        "povidla": {
            name: "Povidla",
            description: "Traditional thick fruit preserve",
            available: true,
            stores: {
                Oslo: [
                    "Eastern European grocery stores",
                    "International food shops"
                ]
            },
            translations: {
                no: {
                    name: "Povidla",
                    description: "Tradisjonelt, tykt fruktpålegg",
                    stores: {
                        Oslo: [
                            "Østeuropeiske matbutikker",
                            "Internasjonale matbutikker"
                        ]
                    }
                }
            }
        },

        "svíčková sauce base": {
            name: "Svíčková sauce base",
            description: "root vegetable cream sauce",
            available: false,
            stores: {},

            translations: {
                no: {
                    name: "Svíčková-sausbase",
                    description: "Kremet saus med rotgrønnsaker"
                }
            },

            alternatives: [
                {
                    name: "Jarred svíčková concentrate — Hamé or Vitana brand",
                    description: "order via Rohlík.cz or Amazon.de",
                    match: 90,
                    color: "#2d5a27",
                    impact:
                        "Jarred svíčková concentrate is widely sold in Czech online shops that ship to Norway. Just add cream and warm through. Hamé and Vitana are the most common brands — ready in 10 minutes.",

                    translations: {
                        no: {
                            name: "Svíčková-konsentrat på glass – Hamé eller Vitana",
                            description: "Bestilles via Rohlík.cz eller Amazon.de",
                            impact:
                                "Svíčková-konsentrat på glass selges i mange tsjekkiske nettbutikker som sender til Norge. Tilsett bare fløte og varm opp. Hamé og Vitana er de vanligste merkene. Klar på 10 minutter."
                        }
                    }
                },
                {
                    name: "Knorr creamy mushroom sauce + celeriac purée",
                    description: "Meny",
                    match: 50,
                    color: "#9b1c1c",
                    impact:
                        "A loose approximation only. The root vegetable sweetness of svíčková is hard to replicate from a packet sauce. Blend in roasted celeriac purée and a squeeze of lemon to get closer. Use as a last resort.",

                    translations: {
                        no: {
                            name: "Knorr kremet soppsaus + sellerirotpuré",
                            description: "Meny",
                            impact:
                                "Dette er bare en omtrentlig erstatning. Sødmen fra rotgrønnsakene i svíčková er vanskelig å gjenskape med posesaus. Bland inn puré av ovnsbakt sellerirot og litt sitronsaft for å komme nærmere originalen. Brukes som siste utvei."
                        }
                    }
                }
            ]
        },

        "knedlíky": {
            name: "Knedlíky",
            description: "Czech bread dumplings",
            available: false,
            stores: {},

            translations: {
                no: {
                    name: "Knedlíky",
                    description: "Tsjekkiske brødboller"
                }
            },

            alternatives: [
                {
                    name: "Frozen knedlíky — Müller or Chodura brand",
                    description: "order via Amazon.de or Czech online shops",
                    match: 88,
                    color: "#5a7a2d",
                    impact:
                        "Frozen Czech bread dumplings are sold by several brands online and ship well to Norway. Slice and steam or microwave directly from frozen. Texture is very close to fresh.",

                    translations: {
                        no: {
                            name: "Frosne knedlíky – Müller eller Chodura",
                            description: "Bestilles via Amazon.de eller tsjekkiske nettbutikker",
                            impact:
                                "Frosne tsjekkiske brødboller selges av flere merker på nett og kan sendes til Norge. Skjær dem i skiver og damp eller varm dem i mikrobølgeovn direkte fra frossen tilstand. Konsistensen er svært lik ferske knedlíky."
                        }
                    }
                },
                {
                    name: "Potato gnocchi",
                    description: "Meny, Coop — refrigerated pasta section",
                    match: 45,
                    color: "#9b1c1c",
                    impact:
                        "Gnocchi is smaller, denser, and potato-based rather than bread-based. Works to soak up svíčková sauce in a pinch but the spongy bread texture of knedlíky is lost.",

                    translations: {
                        no: {
                            name: "Potetgnocchi",
                            description: "Meny, Coop – kjølt pastahylle",
                            impact:
                                "Gnocchi er mindre, tettere og laget av potet i stedet for brød. Det fungerer som en nødløsning for å absorbere svíčková-sausen, men den luftige brødaktige konsistensen til knedlíky går tapt."
                        }
                    }
                },
                {
                    name: "Polenta slices",
                    description: "cooked and chilled grov polenta, sliced",
                    match: 35,
                    color: "#9b1c1c",
                    impact:
                        "Very different in flavour but provides a soft, sliceable starch base similar in function. Best for guests who cannot find knedlíky or gnocchi.",

                    translations: {
                        no: {
                            name: "Polentaskiver",
                            description: "Kokt og avkjølt grovpolenta, skåret i skiver",
                            impact:
                                "Smaken er svært forskjellig, men gir et mykt og skjærbart tilbehør med lignende funksjon. Passer best for dem som ikke finner knedlíky eller gnocchi."
                        }
                    }
                }
            ]
        }
    },


    // GREEK
    greek: {
        "kalamata olives": {
            name: "Kalamata olives",
            description: "Greek dark purple olives",
            available: true,
            stores: {
                Oslo: [
                    "Meny (olive section)",
                    "Coop Mega",
                    "Greek and Mediterranean food shops"
                ]
            },
            translations: {
                no: {
                    name: "Kalamataoliven",
                    description: "Mørkelilla greske oliven",
                    stores: {
                        Oslo: [
                            "Meny (olivenhyllen)",
                            "Coop Mega",
                            "Greske og middelhavsinspirerte matbutikker"
                        ]
                    }
                }
            }
        },

        feta: {
            name: "Feta",
            description: "Traditional Greek brined white cheese",
            available: true,
            stores: {
                Oslo: [
                    "Meny (cheese section)",
                    "Coop Mega",
                    "Most major grocery stores"
                ]
            },
            translations: {
                no: {
                    name: "Feta",
                    description: "Tradisjonell gresk hvitost i saltlake",
                    stores: {
                        Oslo: [
                            "Meny (ostedisken)",
                            "Coop Mega",
                            "De fleste større dagligvarebutikker"
                        ]
                    }
                }
            }
        },

        orzo: {
            name: "Orzo",
            description: "Small rice-shaped pasta",
            available: true,
            stores: {
                Oslo: [
                    "Meny (pasta section)",
                    "Coop Mega",
                    "Mediterranean food shops"
                ]
            },
            translations: {
                no: {
                    name: "Orzo (pastaris)",
                    description: "Liten risformet pasta",
                    stores: {
                        Oslo: [
                            "Meny (pastahyllen)",
                            "Coop Mega",
                            "Middelhavsbutikker"
                        ]
                    }
                }
            }
        },

        mastiha: {
            name: "Mastiha",
            description: "Aromatic resin from the Greek island of Chios",
            available: false,
            stores: {},
            translations: {
                no: {
                    name: "Mastiha",
                    description: "Aromatisk harpiks fra den greske øya Khíos"
                }
            },
            alternatives: [
                {
                    name: "Order online",
                    description: "Amazon.de, Greek specialty shops",
                    match: 100,
                    color: "#2d5a27",
                    impact:
                        "Mastiha is genuinely irreplaceable. Order online — it ships quickly from Greek or German specialty stores. Use in ice cream, bread, and liqueurs exactly as the recipe states.",
                    translations: {
                        no: {
                            name: "Bestill på nett",
                            description: "Amazon.de og greske spesialbutikker",
                            impact:
                                "Mastiha kan egentlig ikke erstattes. Bestill på nett – den sendes raskt fra greske eller tyske spesialbutikker. Bruk i iskrem, brød og likører i nøyaktig samme mengde som oppskriften angir."
                        }
                    }
                },
                {
                    name: "Fennel seeds",
                    description: "ground, very small amount",
                    match: 25,
                    color: "#9b1c1c",
                    impact:
                        "Shares a faintly resinous, anise-like edge. Use ¼ tsp ground fennel per ½ tsp mastiha. Works only in savoury breads where mastiha is a background note — not for desserts or liqueurs.",
                    translations: {
                        no: {
                            name: "Fennikelfrø",
                            description: "Finmalt, bruk en svært liten mengde",
                            impact:
                                "Har et svakt harpiksaktig preg med et hint av anis. Bruk ¼ ts malt fennikel per ½ ts mastiha. Fungerer kun i salt bakverk der mastiha spiller en underordnet rolle – ikke i desserter eller likører."
                        }
                    }
                }
            ]
        },

        "graviera": {
            name: "Graviera cheese",
            description: "a traditional hard table cheese",
            available: false,
            stores: {},
            translations: {
                no: {
                    name: "Graviera",
                    description: "Tradisjonell gresk fastost"
                }
            },
            alternatives: [
                {
                    name: "Gruyère",
                    description: "available at Meny/Coop Extra",
                    match: 75,
                    color: "#5a7a2d",
                    impact:
                        "Gruyère is the closest European equivalent — nutty, slightly sweet, and good for melting. Use the same quantity. Slightly more pungent than graviera in raw applications.",
                    translations: {
                        no: {
                            name: "Gruyère",
                            description: "Tilgjengelig hos Meny/Coop Extra",
                            impact:
                                "Gruyère er det nærmeste europeiske alternativet – nøtteaktig, litt søtlig og godt egnet til smelting. Bruk samme mengde. Den har en noe kraftigere smak enn graviera når den serveres uten varmebehandling."
                        }
                    }
                },
                {
                    name: "Comté",
                    description: "from Meny cheese counter",
                    match: 70,
                    color: "#5a7a2d",
                    impact:
                        "Nuttier and more complex than Norvegia. A good match for gratins and savoury pies. Slightly more expensive but closer to the original graviera character.",
                    translations: {
                        no: {
                            name: "Comté",
                            description: "Fra ostedisken hos Meny",
                            impact:
                                "Mer nøtteaktig og kompleks enn Norvegia. Et godt alternativ til gratenger og salte paier. Litt dyrere, men ligger nærmere den opprinnelige smaken til graviera."
                        }
                    }
                },
                {
                    name: "Norvegia",
                    description: "Norwegian semi-hard cheese",
                    match: 55,
                    color: "#c8570a",
                    impact:
                        "Milder and less complex than graviera. Melts similarly, which makes it acceptable in spanakopita and baked dishes. Flavour will be blander — add a pinch of dried thyme to compensate.",
                    translations: {
                        no: {
                            name: "Norvegia",
                            description: "Norsk halvfast ost",
                            impact:
                                "Mildere og mindre kompleks enn graviera. Smelter på lignende måte, noe som gjør den brukbar i spanakopita og ovnsbakte retter. Smaken blir noe mildere – tilsett en klype tørket timian for å kompensere."
                        }
                    }
                }
            ]
        },

        "loukaniko": {
            name: "Loukaniko",
            description: "Greek pork sausage with orange peel",
            available: false,
            stores: {},
            translations: {
                no: {
                    name: "Loukaniko",
                    description: "Gresk svinepølse med appelsinskall"
                }
            },
            alternatives: [
                {
                    name: "Sweet Italian sausage + orange zest",
                    description: "",
                    match: 60,
                    color: "#c8570a",
                    impact:
                        "The orange peel is loukaniko's signature. Use sweet Italian sausage (available at Meny deli) and add 1 tsp finely grated orange zest per 2 sausages during cooking. Also add a pinch of dried oregano.",
                    translations: {
                        no: {
                            name: "Søt italiensk pølse + appelsinskall",
                            description: "",
                            impact:
                                "Appelsinskallet er det som kjennetegner loukaniko. Bruk søt italiensk pølse (tilgjengelig i ferskvaredisken hos Meny), og tilsett 1 ts finrevet appelsinskall per 2 pølser under tilberedningen. Tilsett også en klype tørket oregano."
                        }
                    }
                },
                {
                    name: "Medisterpølse + orange zest + coriander seed",
                    description: "",
                    match: 50,
                    color: "#c8570a",
                    impact:
                        "Norwegian medisterpølse is pork-forward and mild. Add orange zest and a pinch of ground coriander seed to pull it toward loukaniko. Best used in grilled or oven preparations.",
                    translations: {
                        no: {
                            name: "Medisterpølse + appelsinskall + korianderfrø",
                            description: "",
                            impact:
                                "Norsk medisterpølse har en mild og tydelig svinesmak. Tilsett appelsinskall og en klype malt koriander for å gi den en smak som minner mer om loukaniko. Passer best til grilling eller ovnssteking."
                        }
                    }
                }
            ]
        }
    },

    // INDIAN
    indian: {
        paneer: {
            name: "Paneer",
            description: "Fresh Indian cheese",
            available: true,
            stores: {
                Oslo: [
                    "Indian grocery stores in Oslo",
                    "International food shops",
                    "Meny (selected stores)"
                ]
            },
            translations: {
                no: {
                    name: "Paneer",
                    description: "Fersk indisk ost",
                    stores: {
                        Oslo: [
                            "Indiske matbutikker i Oslo",
                            "Internasjonale matbutikker",
                            "Meny (utvalgte butikker)"
                        ]
                    }
                }
            }
        },

        ghee: {
            name: "Ghee",
            description: "Traditional clarified butter",
            available: true,
            stores: {
                Oslo: [
                    "Indian grocery stores",
                    "Meny",
                    "International food shops"
                ]
            },
            translations: {
                no: {
                    name: "Ghee",
                    description: "Tradisjonelt klarnet smør",
                    stores: {
                        Oslo: [
                            "Indiske matbutikker",
                            "Meny",
                            "Internasjonale matbutikker"
                        ]
                    }
                }
            }
        },

        amchur: {
            name: "Amchur",
            description: "Dried green mango powder",
            available: true,
            stores: {
                Oslo: [
                    "Indian grocery stores",
                    "Asian food shops",
                    "International food shops"
                ]
            },
            translations: {
                no: {
                    name: "Amchur",
                    description: "Pulver av tørket grønn mango",
                    stores: {
                        Oslo: [
                            "Indiske matbutikker",
                            "Asiatiske matbutikker",
                            "Internasjonale matbutikker"
                        ]
                    }
                }
            }
        },

        "methi leaves": {
            name: "Methi leaves",
            description: "fenugreek leaves",
            available: false,
            stores: {},

            translations: {
                no: {
                    name: "Methi-blader",
                    description: "Bukkehornkløverblader"
                }
            },

            alternatives: [
                {
                    name: "Dried kasuri methi",
                    description: "dried fenugreek leaves",
                    match: 65,
                    color: "#c8570a",
                    impact:
                        "Available at Asian/Indian grocery stores. Use 1 tsp dried for every 1 tbsp fresh. Add toward the end of cooking — it releases aroma quickly. Gives 70% of the fresh flavour.",

                    translations: {
                        no: {
                            name: "Tørket kasuri methi",
                            description: "Tørkede bukkehornkløverblader",
                            impact:
                                "Tilgjengelig i asiatiske og indiske matbutikker. Bruk 1 ts tørkede blader for hver 1 ss ferske blader. Tilsett mot slutten av tilberedningen – aromaen frigjøres raskt. Gir omtrent 70 % av smaken fra ferske blader."
                        }
                    }
                },
                {
                    name: "Baby spinach + ½ tsp celery seed",
                    description: "",
                    match: 40,
                    color: "#9b1c1c",
                    impact:
                        "Approximates the colour and mild bitterness. Not the same flavour profile — use only when kasuri methi isn't available. Add celery seed sparingly (it can overwhelm quickly).",

                    translations: {
                        no: {
                            name: "Babyspinat + ½ ts sellerifrø",
                            description: "",
                            impact:
                                "Etterligner fargen og den milde bitterheten. Smaken blir ikke den samme – bruk dette alternativet kun når kasuri methi ikke er tilgjengelig. Tilsett sellerifrø med forsiktighet, da smaken raskt kan bli dominerende."
                        }
                    }
                }
            ]
        }
    },

    // POLISH
    polish: {
        kielbasa: {
            name: "Kielbasa",
            description: "Traditional Polish smoked sausage",
            available: true,
            stores: {
                Oslo: [
                    "Polish grocery shops in Oslo",
                    "International food shops",
                    "Selected Meny stores"
                ]
            },
            translations: {
                no: {
                    name: "Kielbasa",
                    description: "Tradisjonell polsk røkt pølse",
                    stores: {
                        Oslo: [
                            "Polske matbutikker i Oslo",
                            "Internasjonale matbutikker",
                            "Utvalgte Meny-butikker"
                        ]
                    }
                }
            }
        },

        "żurek": {
            name: "Żurek",
            description: "Traditional Polish fermented rye soup",
            available: true,
            stores: {
                Oslo: [
                    "Polish grocery shops",
                    "Eastern European food shops",
                    "International food shops"
                ]
            },
            translations: {
                no: {
                    name: "Żurek",
                    description: "Tradisjonell polsk suppe laget av fermentert rug",
                    stores: {
                        Oslo: [
                            "Polske matbutikker",
                            "Østeuropeiske matbutikker",
                            "Internasjonale matbutikker"
                        ]
                    }
                }
            }
        },

        "twaróg": {
            name: "Twaróg",
            description: "Traditional Polish fresh curd cheese",
            available: false,
            stores: {},

            translations: {
                no: {
                    name: "Twaróg",
                    description: "Tradisjonell polsk ferskost laget av ostemasse"
                }
            },

            alternatives: [
                {
                    name: "Kvarg / Kesam",
                    description: "Norwegian quark",
                    match: 80,
                    color: "#5a7a2d",
                    impact:
                        "Smoother and less crumbly. For pierogi filling, strain through cheesecloth overnight to remove excess moisture. For baking (sernik), it works almost identically.",

                    translations: {
                        no: {
                            name: "Kvarg / Kesam",
                            description: "Norsk kvarg",
                            impact:
                                "Glattere og mindre smuldrete enn twaróg. Til fyll i pierogi bør den renne av gjennom et osteklede over natten for å fjerne overflødig væske. Til baking, for eksempel sernik (polsk ostekake), fungerer den nesten identisk."
                        }
                    }
                },
                {
                    name: "Cottage cheese",
                    description: "drained",
                    match: 60,
                    color: "#c8570a",
                    impact:
                        "Too watery and grainy as-is. Drain thoroughly in a fine sieve for 2–3 hours, then blend until smooth. Tangier than twaróg — reduce any lemon in the recipe.",

                    translations: {
                        no: {
                            name: "Cottage cheese",
                            description: "Avrent",
                            impact:
                                "For vannaktig og kornete som den er. La den renne godt av i en finmasket sil i 2–3 timer, og kjør den deretter i blender til den blir glatt. Den er syrligere enn twaróg – reduser mengden sitron i oppskriften."
                        }
                    }
                }
            ]
        },

        "śmietana 18%": {
            name: "Śmietana 18%",
            available: false,
            stores: {},

            translations: {
                no: {
                    name: "Śmietana 18%",
                    description: "Polsk syrnet fløte med 18 % fett"
                }
            },

            alternatives: [
                {
                    name: "Rømme",
                    description: "Norwegian sour cream, 20%",
                    match: 85,
                    color: "#5a7a2d",
                    impact:
                        "Slightly thicker and more acidic. Dilute with a little milk (1 tbsp per 100g) to loosen the texture. Works well in soups, sauces, and baked goods.",

                    translations: {
                        no: {
                            name: "Rømme",
                            description: "Norsk rømme, 20 % fett",
                            impact:
                                "Litt tykkere og syrligere enn śmietana. Spe med litt melk (1 ss per 100 g) for å få en løsere konsistens. Egner seg godt i supper, sauser og bakverk."
                        }
                    }
                },
                {
                    name: "Crème fraîche",
                    description: "18–30%",
                    match: 75,
                    color: "#5a7a2d",
                    impact:
                        "Richer and less tangy than śmietana. Reduce quantity by 10–15% and thin with milk. Best for hot dishes — it doesn't curdle when heated.",

                    translations: {
                        no: {
                            name: "Crème fraîche",
                            description: "18–30 % fett",
                            impact:
                                "Fyldigere og mindre syrlig enn śmietana. Reduser mengden med 10–15 % og spe med litt melk. Best egnet til varme retter – den skiller seg ikke ved oppvarming."
                        }
                    }
                }
            ]
        }
    },


    // UKRAINIAN
    ukrainian: {
        "buckwheat groats": {
            name: "Buckwheat groats",
            description: "Whole buckwheat kernels, also known as kasha",
            available: true,
            stores: {
                Oslo: [
                    "Eastern European grocery shops",
                    "International food shops",
                    "Meny (selected stores)"
                ]
            },
            translations: {
                no: {
                    name: "Bokhvete",
                    description: "Hele bokhvetekorn, også kjent som kasha",
                    stores: {
                        Oslo: [
                            "Østeuropeiske matbutikker",
                            "Internasjonale matbutikker",
                            "Meny (utvalgte butikker)"
                        ]
                    }
                }
            }
        },

        salo: {
            name: "Salo",
            description: "Traditional Ukrainian cured pork fat",
            available: false,
            stores: {},

            translations: {
                no: {
                    name: "Salo",
                    description: "Tradisjonelt ukrainsk saltet og speket svinefett"
                }
            },

            alternatives: [
                {
                    name: "Italian lardo (cured pork fat)",
                    description: "Meny deli or specialty stores",
                    match: 75,
                    color: "#5a7a2d",
                    impact:
                        "Lardo is the closest available equivalent — cured white pork fat, sliced thin. Less commonly seasoned with garlic than salo. Use on dark bread or in cooking exactly as you would salo.",

                    translations: {
                        no: {
                            name: "Italiensk lardo (saltet og speket svinefett)",
                            description: "Ferskvaredisken hos Meny eller spesialbutikker",
                            impact:
                                "Lardo er det nærmeste tilgjengelige alternativet – hvitt, saltet og speket svinefett som skjæres i tynne skiver. Det er sjeldnere krydret med hvitløk enn salo. Bruk det på mørkt brød eller i matlaging på samme måte som salo."
                        }
                    }
                },
                {
                    name: "Norwegian fenalår fat trimmings",
                    description: "or smoked pork belly",
                    match: 45,
                    color: "#9b1c1c",
                    impact:
                        "Norwegian cured pork belly (sideflesk) has the right fat-to-meat ratio but is smoked rather than salt-cured. A rough substitute for cooking — not ideal for the classic raw salo-on-bread preparation.",

                    translations: {
                        no: {
                            name: "Fettrester fra norsk fenalår",
                            description: "Eller røkt sideflesk",
                            impact:
                                "Norsk speket svinekjøtt (sideflesk) har et passende forhold mellom fett og kjøtt, men er røkt i stedet for kun saltet. Det fungerer som en grov erstatning i matlaging, men egner seg ikke særlig godt til den klassiske serveringen av rå salo på brød."
                        }
                    }
                }
            ]
        },

        "kvass": {
            name: "Kvass",
            description: "fermented bread drink",
            available: false,
            stores: {},

            translations: {
                no: {
                    name: "Kvass",
                    description: "Fermentert drikk laget av brød"
                }
            },

            alternatives: [
                {
                    name: "Imported bottled kvass — Ochakovo or Nikola brand",
                    description: "Eastern European grocery stores in Oslo",
                    match: 88,
                    color: "#5a7a2d",
                    impact:
                        "Bottled Russian kvass (Ochakovo, Nikola) is available at Eastern European and Russian grocery stores in Oslo and Bergen. Sold in 1–2L bottles. Use for drinking or as a cooking liquid in okroshka.",

                    translations: {
                        no: {
                            name: "Importert kvass på flaske – Ochakovo eller Nikola",
                            description: "Østeuropeiske matbutikker i Oslo",
                            impact:
                                "Kvass på flaske fra russiske merker som Ochakovo og Nikola finnes i østeuropeiske og russiske matbutikker i Oslo og Bergen. Selges i flasker på 1–2 liter. Kan drikkes som den er eller brukes som væske i matlaging, for eksempel i okrosjka."
                        }
                    }
                },
                {
                    name: "Dark non-alcoholic malt beer — Clausthaler Dark or Erdinger Dunkel N/A",
                    description: "Meny, Vinmonopolet",
                    match: 50,
                    color: "#9b1c1c",
                    impact:
                        "Dark malt beers share kvass's roasted, slightly bitter character. Works for drinking as a substitute. For cooking in borscht or okroshka, dilute 50/50 with water and add a splash of apple cider vinegar.",

                    translations: {
                        no: {
                            name: "Mørkt alkoholfritt maltøl – Clausthaler Dark eller Erdinger Dunkel N/A",
                            description: "Meny, Vinmonopolet",
                            impact:
                                "Mørkt maltøl har den samme ristede og lett bitre karakteren som kvass. Fungerer som erstatning når drikken skal serveres. Til matlaging i borsjtsj eller okrosjka bør du blande det med like mye vann og tilsette litt eplecidereddik."
                        }
                    }
                },
                {
                    name: "Kombucha",
                    description: "dark or ginger variety — health food stores, Meny",
                    match: 40,
                    color: "#9b1c1c",
                    impact:
                        "Kombucha shares the light fizz and fermented tanginess of kvass. Flavour differs (more tea-forward), but works as a drink substitute. Not recommended for savoury cooking.",

                    translations: {
                        no: {
                            name: "Kombucha",
                            description: "Mørk variant eller ingefærvariant – helsekostbutikker og Meny",
                            impact:
                                "Kombucha har den samme lette kullsyren og fermenterte syrligheten som kvass. Smaken er annerledes og har et tydeligere preg av te, men fungerer som drikkealternativ. Anbefales ikke til matlaging i salte retter."
                        }
                    }
                }
            ]
        },

        "sour cherries": {
            name: "Sour cherries",
            description: "Tart cherries used in Ukrainian cooking",
            available: true,
            stores: {
                Oslo: [
                    "International food shops",
                    "Frozen fruit sections",
                    "Eastern European grocery shops"
                ]
            },
            translations: {
                no: {
                    name: "Surkirsebær",
                    description: "Syrlige kirsebær som brukes i ukrainsk matlaging",
                    stores: {
                        Oslo: [
                            "Internasjonale matbutikker",
                            "Frysedisken",
                            "Østeuropeiske matbutikker"
                        ]
                    }
                }
            }
        }
    },


};
