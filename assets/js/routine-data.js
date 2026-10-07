"use strict";

const RUTINA = {
            "LUNES": {
                titulo: "PECHO & HOMBRO",
                duracion: "50-55 min",
                ejercicios: [
                    { nombre: "Press plano con barra", series: "4", reps: "8-10", tipo: "Compuesto", musculo: "Pectoral mayor", smartworkout: "press-de-banca" },
                    { nombre: "Press inclinado con mancuernas", series: "3", reps: "8-10", tipo: "Compuesto", musculo: "Pectoral superior", smartworkout: "press-inclinado-con-mancuernas" },
                    { nombre: "Cristos en polea", series: "3", reps: "10-12", tipo: "Aislamiento", musculo: "Pectoral interno", smartworkout: "apertura-de-pecho-con-mancuernas" },
                    { nombre: "Press militar con barra", series: "3", reps: "8-10", tipo: "Compuesto", musculo: "Deltoides anterior", smartworkout: "press-militar" },
                    { nombre: "Laterales en banco inclinado", series: "3", reps: "10-12", tipo: "Aislamiento", musculo: "Deltoides lateral", smartworkout: "lateral-raise" },
                    { nombre: "Pull face con cuerda", series: "3", reps: "12-15", tipo: "Aislamiento", musculo: "Hombro posterior", smartworkout: "reverse-fly" }
                ]
            },
            "MARTES": {
                titulo: "PIERNA COMPLETA",
                duracion: "70-80 min",
                ejercicios: [
                    { nombre: "Sentadilla libre con barra", series: "4", reps: "8-10", tipo: "Compuesto", musculo: "Cuádriceps/Glúteo", smartworkout: "sentadilla" },
                    { nombre: "Prensa + Extensión piernas (SS)", series: "3", reps: "10-12", tipo: "Superserie", musculo: "Cuádriceps", smartworkout: "leg-press" },
                    { nombre: "Búlgaro con mancuernas", series: "3", reps: "10-12", tipo: "Compuesto", musculo: "Cuádriceps/Glúteo", smartworkout: "split-squat" },
                    { nombre: "Femoral sentado + ROM (SS)", series: "3", reps: "10-12", tipo: "Superserie", musculo: "Isquiotibiales", smartworkout: "leg-curl-seated" },
                    { nombre: "Hip Thrust con barra", series: "3", reps: "8-10", tipo: "Compuesto", musculo: "Glúteo mayor", smartworkout: "hip-thrust" },
                    { nombre: "Patada en polea baja", series: "3", reps: "12-15", tipo: "Aislamiento", musculo: "Glúteo", smartworkout: "cable-kickback" },
                    { nombre: "Pantorrilla en prensa", series: "4", reps: "12-15", tipo: "Aislamiento", musculo: "Gemelos/Sóleo", smartworkout: "calf-raise" },
                    { nombre: "Pantorrilla parada en polea", series: "3", reps: "12-15", tipo: "Aislamiento", musculo: "Gemelos", smartworkout: "standing-calf-raise" }
                ]
            },
            "MIERCOLES": {
                titulo: "ESPALDA & BÍCEPS",
                duracion: "50-55 min",
                ejercicios: [
                    { nombre: "Pulldown prono en máquina", series: "3", reps: "8-12", tipo: "Compuesto", musculo: "Dorsal ancho", smartworkout: "lat-pulldown" },
                    { nombre: "Remo mancuerna + Pulldown neutro (SS)", series: "3", reps: "8-12", tipo: "Superserie", musculo: "Dorsal/Romboides", smartworkout: "dumbbell-row" },
                    { nombre: "Remo parado con barra", series: "3", reps: "8-10", tipo: "Compuesto", musculo: "Trapecio/Romboides", smartworkout: "barbell-row" },
                    { nombre: "Pull over con cuerda en polea", series: "3", reps: "10-12", tipo: "Aislamiento", musculo: "Dorsal/Serrato", smartworkout: "cable-pullover" },
                    { nombre: "Curl predicador + Copa cable (SS)", series: "3", reps: "10-12", tipo: "Superserie", musculo: "Bíceps braquial", smartworkout: "preacher-curl" },
                    { nombre: "Curl mancuernas en banco inclinado", series: "3", reps: "10-12", tipo: "Aislamiento", musculo: "Bíceps cabeza larga", smartworkout: "incline-curl" },
                    { nombre: "Remo declinado", series: "3", reps: "8-10", tipo: "Compuesto", musculo: "Dorsal/Espalda baja", smartworkout: "decline-row" }
                ]
            },
            "JUEVES": {
                titulo: "HOMBRO & TRÍCEPS",
                duracion: "50-55 min",
                ejercicios: [
                    { nombre: "Press militar en máquina (Smith)", series: "3", reps: "8-12", tipo: "Compuesto", musculo: "Deltoides anterior", smartworkout: "smith-press" },
                    { nombre: "Pájaros en banco inclinado", series: "3", reps: "10-12", tipo: "Aislamiento", musculo: "Deltoides posterior", smartworkout: "reverse-fly" },
                    { nombre: "Laterales + Pull face (SS)", series: "3", reps: "12-15", tipo: "Superserie", musculo: "Deltoides lateral/posterior", smartworkout: "lateral-raise" },
                    { nombre: "Predicador + Press francés (SS)", series: "3", reps: "8-12", tipo: "Superserie", musculo: "Tríceps cabeza larga", smartworkout: "skull-crusher" },
                    { nombre: "Extensión tríceps con cuerda en polea", series: "3", reps: "10-12", tipo: "Aislamiento", musculo: "Tríceps", smartworkout: "triceps-rope-extension" },
                    { nombre: "Cables cruzados tríceps", series: "3", reps: "10-12", tipo: "Aislamiento", musculo: "Tríceps cabeza lateral", smartworkout: "triceps-cable" }
                ]
            },
            "VIERNES": {
                titulo: "ANTEBRAZOS & ABDOMINALES",
                duracion: "35-40 min",
                ejercicios: [
                    { nombre: "Curl martillo con mancuernas", series: "3", reps: "12", tipo: "Aislamiento", musculo: "Braquiorradial", smartworkout: "hammer-curl" },
                    { nombre: "Curl reverso con barra", series: "3", reps: "12-15", tipo: "Aislamiento", musculo: "Braquiorradial", smartworkout: "reverse-curl" },
                    { nombre: "Extensión de muñeca con barra", series: "3", reps: "12-15", tipo: "Aislamiento", musculo: "Extensor carpi", smartworkout: "wrist-extension" },
                    { nombre: "Flexión de muñeca con mancuerna", series: "3", reps: "12-15", tipo: "Aislamiento", musculo: "Flexor", smartworkout: "wrist-curl" },
                    { nombre: "Pronación/Supinación con disco", series: "2", reps: "15", tipo: "Aislamiento", musculo: "Antebrazo", smartworkout: "pronation-supination" },
                    { nombre: "Crunch + Elevación piernas (SS)", series: "3", reps: "15 c/u", tipo: "Core", musculo: "Recto abdominal", smartworkout: "crunch" },
                    { nombre: "Plancha lateral alternada", series: "3", reps: "20-30 seg", tipo: "Core", musculo: "Oblicuos", smartworkout: "side-plank" },
                    { nombre: "Cable Wood Chop", series: "3", reps: "12-15", tipo: "Core", musculo: "Oblicuos", smartworkout: "wood-chop" },
                    { nombre: "Decline Crunch", series: "3", reps: "12-15", tipo: "Core", musculo: "Recto abdominal", smartworkout: "decline-crunch" }
                ]
            }
        };
