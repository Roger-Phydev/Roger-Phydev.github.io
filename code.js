
/* Header open-close config */
const symbol = document.querySelector(".header__icon");
let header_state = 1;
symbol.addEventListener("click",()=>{ /* To open and close the menu */
    let icons = symbol.children;
    header_state = (header_state+1)%2;
    icons[header_state].setAttribute("style","display\n none;");
    icons[(header_state+1)%2].setAttribute("style","display\n inline-block;");
    let options = document.querySelector(".header__links-container");
    if(header_state){
        options.setAttribute("style","top: -1000px");
        symbol.setAttribute("style","background-image: linear-gradient(90deg, var(--sec-reduced),var(--sec-reduced), var(--sec-color) );");
    }else{
        options.setAttribute("style","top:10dvh");
        symbol.setAttribute("style","background-image: linear-gradient(0deg, var(--sec-color),var(--sec-reduced), var(--sec-reduced));");
    }
});
/* Printing my actual age */
let today = new Date(Date());
const birth = new Date(1996,4,10);
let age = today.getFullYear()-birth.getFullYear();
if(today.getMonth()<birth.getMonth()||(today.getMonth()==birth.getMonth()&&today.getDay()<birth.getDay())){
    age-=1;
}
document.getElementById("Who").children[1].innerHTML = `Mi nombre completo es <strong>Brian Rogelio Parra Hernández</strong>. Nací en <strong>Ciudad de México, México</strong>. Tengo <strong>${age} años</strong> y sigo recidiendo aquí en la actualidad. Entre mis habilidades se encuentran el <strong>trabajo en equipo, la responsabilidad, la resiliencia y el ser proactivo</strong>.`;

/* Setting info about my repository exercises  continues at line # */
const repositoryLinks = ['https://github.com/Roger-Phydev','https://github.com/Roger-Phydev/Exercises-ejercicios/blob/main/00_Lista_de_informaci%C3%B3n.md','https://github.com/Roger-Phydev/Exercises-ejercicios-2/blob/main/00_lista%20_de_informacion.md','https://github.com/Roger-Phydev/Exercises-ejercicios','https://github.com/Roger-Phydev/Exercises-ejercicios-2'];
const list1 = [
    'FIZBUZZ\n\n Escribe un programa que muestre por consola (con un print): los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión), sustituyendo lo siguiente:\n * Múltiplos de 3 por la palabra "fizz". \n * Múltiplos de 5 por la palabra "buzz".\n * Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".',
    'ANAGRAMAS\n\n Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Bool) según sean o no anagramas.\n* Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.\n* NO hace falta comprobar que ambas palabras existan.\n* Dos palabras exactamente iguales no son anagrama.',
    'FIBONACCI\n\n Escribe un programa que imprima los 50 primeros números de la sucesión de Fibonacci empezando en 0. La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores: 0, 1, 1, 2, 3, 5, 8, 13...',
    'PRIMOS\n\n Escribe un programa que se encargue de comprobar si un número es o no primo. Hecho esto, imprime los números primos entre 1 y 100.',
    'POLÍGONOS\n\n Crea una única función (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono:\n * La función recibirá por parámetro sólo UN polígono a la vez. \n* Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.\n * Imprime el cálculo del área de un polígono de cada tipo.',
    'INVERSIÓN DE CADENAS\n\n Crea un programa que invierta el orden de una cadena de texto sin usar funciones propias del lenguaje que lo hagan de forma automática. Si le pasamos "Hola mundo" nos retornaría "odnum aloH"',
    'CONTANDO PALABRAS\n\n Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.\n * Los signos de puntuación no forman parte de la palabra.\n * Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.\n * No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.\n NOTA: existen dos versiones de este ejercicio. En 7_1 se resuelve el problema usando expresiones regulares.',
    'DECIMAL A BINARIO\n\n Crea un programa se encargue de transformar un número decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.',
    'CÓDIGO MORSE\n\n Crea un programa que sea capaz de transformar texto natural a código morse y viceversa:\n * Debe detectar automáticamente de qué tipo se trata y realizar la conversión.\n * En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".\n * El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.',
    'EXPRESIONES EQUILIBRADAS\n\n Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados:\n * Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.\n * Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.\n * Expresión balanceada: { [ a * ( c + d ) ] - 5 }\n * Expresión NO balanceada: { a * ( c + d ) ] - 5 }',
    'ELIMINAR CARACTERES\n\n Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados:\n * Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.\n * Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.\n * Expresión balanceada: { [ a * ( c + d ) ] - 5 }\n * Expresión NO balanceada: { a * ( c + d ) ] - 5 }',
    'PALÍNDROMOS\n\n Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2):\n * out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.\n * out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.',
    'FACTORIAL RECURSIVO\n\n Escribe una función que calcule y retorne el factorial de un número dado de forma recursiva.',
    'NÚMEROS DE ARMSTRONG\n\n Escribe una función que calcule si un número dado es un número de Armstrong(o también llamado narcisista). Si no conoces qué es un número de Armstrong, debes buscar información al respecto.',
    '¿CUANTOS DÍAS?\n\n Crea una función que calcule y retorne cuántos días hay entre dos cadenas de texto que representen fechas:\n * Una cadena de texto que representa una fecha tiene el formato "dd/mm/yyyy".\n * La función recibirá dos String y retornará un Int.\n * La diferencia en días será absoluta (no importa el orden de las fechas).\n * Si una de las dos cadenas de texto no representa una fecha correcta se lanzará una excepción.',
    'LETRAS MAYÚSCULAS\n\n Crea una función que reciba un String de cualquier tipo y se encargue de poner en mayúscula la primera letra de cada palabra. No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.',
    'CARRERA DE OBSTACULOS\n\n Crea una función que evalúe si un/a atleta ha superado correctamente una carrera de obstáculos. La función recibirá dos parámetros:\n * Un array que sólo puede contener String con las palabras "run" o "jump"\n * Un String que represente la pista y sólo puede contener "_" (suelo) o "|" (valla)\n\n La función imprimirá cómo ha finalizado la carrera:\n * Si el/a atleta hace "run" en "_" (suelo) y "jump" en "|" (valla) será correcto y no variará el símbolo de esa parte de la pista.\n * Si hace "jump" en "_" (suelo), se variará la pista por "x".\n * Si hace "run" en "|" (valla), se variará la pista por "/".\n * La función retornará un Boolean que indique si ha superado la carrera. Para ello tiene que realizar la opción correcta en cada tramo de la pista.',
    'EL JUEGO DEL GATO\n\n Crea una función que analice una matriz 3x3 compuesta por "X" y "O" y retorne lo siguiente:\n * "X" si han ganado las "X"\n * "O" si han ganado los "O"\n * "Empate" si ha habido un empate.\n * "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta o si han ganado los 2.\n Nota: La matriz puede no estar totalmente cubierta. Se podría representar con un vacío "", por ejemplo.',
    'CONVERSOR DE TIEMPO\n\n Crea una función que reciba días, horas, minutos y segundos (como enteros) y retorne su resultado en milisegundos.',
    'PARANDO EL TIEMPO\n\n Crea una función que sume 2 números y retorne su resultado pasados unos segundos.\n * Recibirá por parámetros los 2 números a sumar y los segundos que debe tardar en finalizar su ejecución.',
    'CALCULADORA TXT\n\n Lee el fichero "Challenge21.txt" incluido en el proyecto, calcula su resultado e imprímelo:\n * El .txt se corresponde con las entradas de una calculadora.\n * Cada línea tendrá un número o una operación representada por un símbolo (alternando ambos).\n * Soporta números enteros y decimales.\n * Soporta las operaciones suma "+", resta "-", multiplicación "*" y división "/".\n * El resultado se muestra al finalizar la lectura de la última línea (si el .txt es correcto).\n * Si el formato del .txt no es correcto, se indicará que no se han podido resolver las operaciones.\n Nota: puede usarse algún archivo txt para probar el funcionamiento',
    'CONJUNTOS\n\n Crea una función que reciba dos array, un booleano y retorne un array.\n * Si el booleano es verdadero buscará y retornará los elementos comunes de los dos array.\n * Si el booleano es falso buscará y retornará los elementos no comunes de los dos array.\n * No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.',
    'MCD Y MCM\n\n Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra que calcule el mínimo común múltiplo (mcm) de dos números enteros.\n * No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.',
    'ITERACIÓN\n\n Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno). ¿De cuántas maneras eres capaz de hacerlo? Crea el código para cada una de ellas.',
    'PIEDRA, PAPEL Y TIJERAS\n\n Crea un programa que calcule quien gana más partidas al piedra, papel, tijera:\n * El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)\n * La función recibe un listado que contiene pares, representando cada jugada.\n * El par puede contener combinaciones de "R"(piedra), "P" (papel) o "S" (tijera).\n * Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".',
    'TRIÁNGULO Y CUADRADO\n\n Crea un programa que dibuje un cuadrado o un triángulo con asteriscos "*".\n * Indicaremos el tamaño del lado y si la figura a dibujar es una u otra.\n * EXTRA: ¿Eres capaz de dibujar más figuras?',
    'VECTORES ORTOGONALES\n\n Crea un programa que determine si dos vectores son ortogonales.\n * Los dos array deben tener la misma longitud.\n * Cada vector se podría representar como un array. Ejemplo: [1, -2]',
    'MÁQUINA EXPENDEDORA\n\n Simula el funcionamiento de una máquina expendedora creando una operación que reciba dinero (array de monedas) y un número que indique la selección del producto:\n * El programa retornará el nombre del producto y un array con el dinero de vuelta (con el menor número de monedas).\n * Si el dinero es insuficiente o el número de producto no existe, deberá indicarse con un mensaje y retornar todas las monedas.\n * Si no hay dinero de vuelta, el array se retornará vacío.\n * Para que resulte más simple, trabajaremos en céntavos con monedas de 5, 10, 50, 100 y 200.\n * Debemos controlar que las monedas enviadas estén dentro de las soportadas.',
    'ORDENAR LISTAS\n\n Crea una función que ordene y retorne una matriz de números. La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro adicional "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor o de mayor a menor. No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.',
    'MARCO DE PALABRAS\n\n Crea una función que reciba un texto y muestre cada palabra en una línea, formando un marco rectangular de asteriscos. ¿Qué te parece el reto? Se vería así:\n  **********\n  * ¿Qué   *\n  *  te     *\n  * parece *\n  * el     *\n  * reto?  *\n  **********',
    'AÑOS BISIESTOS\n\n Crea una función que imprima los 30 próximos años bisiestos siguientes a uno dado. Utiliza el menor número de líneas para resolver el ejercicio.',
    'EL SEGUNDO MÁS\n\n Dado un listado de números, encuentra el SEGUNDO más grande.',
    'CICLO SEXAGENARIO CHINO\n\n Crea un función, que dado un año, indique el elemento y animal correspondiente en el ciclo sexagenario del zodíaco chino:\n * Info: https://www.travelchinaguide.com/intro/astrology/60year-cycle.html \n * El ciclo sexagenario se corresponde con la combinación de los elementos: madera, fuego, tierra, metal, agua. Y los animales rata, buey, tigre, conejo, dragón, serpiente, caballo, oveja, mono, gallo, perro, cerdo (en este orden).\n * Cada elemento se repite dos años seguidos.\n * El último ciclo sexagenario comenzó en 1984 (Madera Rata).',
    'NÚMEROS PERDIDOS\n\n Dado un array de enteros ordenado y sin repetidos, crea una función que calcule y retorne todos los que faltan entre el mayor y el menor. Lanza un error si el array de entrada no es correcto.',
    'BATALLA POKEMON\n\n Crea un programa que calcule el daño de un ataque durante una batalla Pokémon.\n * La fórmula será la siguiente: daño = 50 * (ataque / defensa) * efectividad\n * Efectividad: x2 (súper efectivo), x1 (neutral), x0.5 (no es muy efectivo)\n * Sólo hay 4 tipos de Pokémon: Agua, Fuego, Planta y Eléctrico (buscar su efectividad)\n\nEl programa recibe los siguientes parámetros:\n * Tipo del Pokémon atacante.\n * Tipo del Pokémon defensor.\n * Ataque: Entre 1 y 100.\n * Defensa: Entre 1 y 100.',
    'ANILLOS DEL PODER\n\n ¡La Tierra Media está en guerra! En ella lucharán razas leales a Sauron contra otras bondadosas que no quieren que el mal reine sobre sus tierras. Cada raza tiene asociado un "valor" entre 1 y 5:\n * Razas bondadosas: Pelosos (1), Sureños buenos (2), Enanos (3), Númenóreanos (4), Elfos (5)\n * Razas malvadas: Sureños malos (2), Orcos (2), Goblins (2), Huargos (3), Trolls (5)\n\n Crea un programa que calcule el resultado de la batalla entre los 2 tipos de ejércitos:\n * El resultado puede ser que gane el bien, el mal, o exista un empate.\n * Dependiendo de la suma del valor del ejército y el número de integrantes.\n * Cada ejército puede estar compuesto por un número de integrantes variable de cada raza.\n * Tienes total libertad para modelar los datos del ejercicio.\n * Ej: 1 Peloso pierde contra 1 Orco; 2 Pelosos empatan contra 1 Orco; 3 Pelosos ganan a 1 Orco',
    'ZELDA\n\n Crea un programa que calcule cuántos años y días hay entre 2 juegos de Zelda que tú selecciones. Debes buscar cada uno de los títulos y su día de lanzamiento (si no encuentras el día exacto puedes usar el mes, o incluso inventártelo).',
    'BINARIO A DECIMAL\n\n Crea un programa se encargue de transformar un número binario a decimal sin utilizar funciones propias del lenguaje que lo hagan directamente.',
    'QUICK SORT\n\n Implementa uno de los algoritmos de ordenación más famosos: el "Quick Sort", creado por C.A.R. Hoare. Entender el funcionamiento de los algoritmos más utilizados de la historia nos ayuda a mejorar nuestro conocimiento sobre ingeniería de software. Dedícale tiempo a entenderlo, no únicamente a copiar su implementación.',
    'TRIÁNGULO DE PASCAL\n\n Crea una función que sea capaz de dibujar el "Triángulo de Pascal" indicándole únicamente el tamaño del lado.',
    'LEY DE OHM\n\n Crea una función que calcule el valor del parámetro perdido correspondiente a la ley de Ohm.\n * Enviaremos a la función 2 de los 3 parámetros (V, R, I), y retornará el valor del tercero (redondeado a 2 decimales).\n * Si los parámetros son incorrectos o insuficientes, la función retornará la cadena de texto "Invalid values".',
    'CONVERSOR DE TEMPERATURA\n\n Crea una función que transforme grados Celsius en Fahrenheit y viceversa. Para que un dato de entrada sea correcto debe poseer un símbolo "°" y su unidad ("C" o "F"). En caso contrario retornará un error.',
    'DULCE O TRUCO\n\n Este es un reto especial por Halloween. Deberemos crear un programa al que le indiquemos si queremos realizar "Truco o Trato" y un listado (array) de personas con las siguientes propiedades:\n * Nombre de la niña o niño\n * Edad\n * Altura en centímetros\n\nSi las personas han pedido truco, el programa retornará sustos (aleatorios) siguiendo estos criterios:\n * Un susto por cada 2 letras del nombre por persona\n * Dos sustos por cada edad que sea un número par\n * Tres sustos por cada 100 cm de altura entre todas las personas\n * Sustos: 🎃 👻 💀 🕷 🕸 🦇\nSi las personas han pedido trato, el programa retornará dulces (aleatorios) siguiendo estos criterios:\n\n * Un dulce por cada letra de nombre\n * Un dulce por cada 3 años cumplidos hasta un máximo de 10 años por persona\n * Dos dulces por cada 50 cm de altura hasta un máximo de 150 cm por persona\n * Dulces: 🍰 🍬 🍡 🍭 🍪 🍫 🧁 🍩',
    'BOOMERANGS\n\n Crea una función que retorne el número total de bumeranes de un array de números enteros e imprima cada uno de ellos. Un bumerán (búmeran, boomerang) es una secuencia formada por 3 números seguidos, en el que el primero y el último son iguales, y el segundo es diferente. Por ejemplo [2, 1, 2].\n * En el array [2, 1, 2, 3, 3, 4, 2, 4] hay 2 bumeranes ([2, 1, 2] y [4, 2, 4]).',
    'DEPÓSITO DE AGUA\n\n Dado un array de números enteros positivos, donde cada uno representa unidades de bloques apilados, debemos calcular cuantas unidades de agua quedarán atrapadas entre ellos.\n Ejemplo: Dado el array [4, 0, 3, 6, 1, 3].\n ▄▄▄▄⏹▄▄\n▄▄▄▄⏹▄▄\n⏹💧💧⏹▄▄▄\n⏹💧⏹⏹💧⏹\n ⏹💧⏹⏹💧⏹\n ⏹💧⏹⏹⏹⏹\n\n Representando bloque con ⏹︎ y agua con 💧, quedarán atrapadas 7 unidades de agua. Suponiendo que existe un suelo impermeable en la parte inferior que retiene el agua.',
    '¿DÓNDE ESTÁ EL ROBOT?\n\n Calcula dónde estará un robot (sus coordenadas finales) que se encuentra en una cuadrícula representada por los ejes "x" e "y".\n * El robot comienza en la coordenada (0, 0).\n * Para idicarle que se mueva, le enviamos un array formado por enteros (positivos o negativos) que indican la secuencia de pasos a dar.\n * Por ejemplo: [10, 5, -2] indica que primero se mueve 10 pasos, se detiene, luego 5, se detiene, y finalmente 2. El resultado en este caso sería (x: -5, y: 12)\n * Si el número de pasos es negativo, se desplazaría en sentido contrario al que está mirando.\n * Los primeros pasos los hace en el eje "y". Interpretamos que está mirando hacia la parte positiva del eje "y".\n * El robot tiene un fallo en su programación: cada vez que finaliza una secuencia de pasos gira 90 grados en el sentido contrario a las agujas del reloj.',
    'VOCAL MÁS COMÚN\n\n Crea un función que reciba un texto y retorne la vocal que más veces se repita. Si no hay vocales podrá devolver vacío.',
    'CALENDARIO CONCURSO\n\n ¿Conoces el calendario de adviento de la comunidad (https://adviento.dev)? 24 días, 24 regalos sorpresa relacionados con desarrollo de software, ciencia y tecnología desde el 1 de diciembre.\n Crea una función que reciba un objeto de tipo "Date" y retorne lo siguiente:\n * Si la fecha coincide con el calendario de aDEViento 2022: Retornará el regalo de ese día (a tu elección) y cuánto queda para que finalice el sorteo de ese día.\n * Si la fecha es anterior: Cuánto queda para que comience el calendario.\n * Si la fecha es posterior: Cuánto tiempo ha pasado desde que ha finalizado.\n\n Notas:\n* Tenemos en cuenta que cada día del calendario comienza a medianoche 00:00:00 y finaliza a las 23:59:59.\n * Debemos trabajar con fechas que tengan año, mes, día, horas, minutos y segundos.',
    'DETECTOR DE HANDLES\n\n Crea una función que sea capaz de detectar y retornar todos los handles de un texto usando solamente Expresiones Regulares. Debes crear una expresión regular para cada caso:\n * Handle usuario: Los que comienzan por "@"\n * Handle hashtag: Los que comienzan por "#"\n * Handle web: Los que comienzan por "www.", "http://", "https://" y finalizan con un dominio (.com, .es...)',
    'ENCRIPTACIÓN\n\n Crea una función que sea capaz de encriptar y desencriptar texto utilizando el algoritmo de encriptación de Karaca(debes buscar información sobre él).'
];
const list2 = [
    'LENGUAJE HACKER\n\n Escribe un programa que reciba un texto y transforme lenguaje natural a "lenguaje hacker" (conocido realmente como "leet" o "1337"). Este lenguaje se caracteriza por sustituir caracteres alfanuméricos.\n * Utiliza esta tabla (https://www.gamehouse.com/blog/leet-speak-cheat-sheet/) con el alfabeto y los números en "leet". (Usa la primera opción de cada transformación. Por ejemplo "4" para la "a")',
    'TENIS\n\n Escribe un programa que muestre cómo transcurre un juego de tenis y quién lo ha ganado. El programa recibirá una secuencia formada por "P1" (Player 1) o "P2" (Player 2), según quien gane cada punto del juego.\n * Las puntuaciones de un juego son "Love" (cero), 15, 30, 40, "Deuce" (empate), ventaja.\n * Ante la secuencia [P1, P1, P2, P2, P1, P2, P1, P1], el programa mostraría lo siguiente:\n > 15 - Love\n> 30 - Love\n> 30 - 15\n> 30 - 30\n> 40 - 30\n> Deuce\n> Ventaja P1\n> Ha ganado el P1\n * Si quieres, puedes controlar errores en la entrada de datos.\n * Consulta las reglas del juego si tienes dudas sobre el sistema de puntos.',
    'CONTRASEÑAS\n\n Escribe un programa que sea capaz de generar contraseñas de forma aleatoria. Podrás configurar generar contraseñas con los siguientes parámetros:\n * Longitud: Entre 8 y 16.\n * Con o sin letras mayúsculas.\n * Con o sin números.\n * Con o sin símbolos.\n\n Pudiendo combinar todos estos parámetros entre ellos.',
    'FIBONACCI PRIMO PAR\n\n Escribe un programa que, dado un número, compruebe y muestre si es primo, fibonacci y par. Ejemplos:\n * Con el número 2, nos dirá: "2 es primo, fibonacci y es par"\n * Con el número 7, nos dirá: "7 es primo, no es fibonacci y es impar"',
    'HOLA MUNDO\n\n Escribe un !Hola Mundo! en todos los lenguajes de programación que puedas. Seguro que hay algún lenguaje que te llama la atención y nunca has utilizado, o quizás quieres dar tus primeros pasos... ¡Pues este es el momento! A ver quién se atreve con uno de esos lenguajes que no solemos ver por ahí...',
    'PIEDRA,PAPEL,TIJERAS,LAGARTO,SPOK\n\n Crea un programa que calcule quien gana más partidas al piedra, papel, tijera, lagarto, spock.\n * El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)\n * La función recibe un listado que contiene pares, representando cada jugada.\n * El par puede contener combinaciones de "🗿" (piedra), "📄" (papel), "✂️" (tijera), "🦎" (lagarto) o "🖖" (spock).\n * Ejemplo. Entrada: [("🗿","✂️"), ("✂️","🗿"), ("📄","✂️")]. Resultado: "Player 2".\n * Debes buscar información sobre cómo se juega con estas 5 posibilidades.',
    'SOMBRERO SELECCIONADOR\n\n Crea un programa que simule el comportamiento del sombrero selccionador del universo mágico de Harry Potter.\n * De ser posible realizará 5 preguntas (como mínimo) a través de la terminal.\n * Cada pregunta tendrá 4 respuestas posibles (también a selecciona una a través de terminal).\n * En función de las respuestas a las 5 preguntas deberás diseñar un algoritmo que coloque al alumno en una de las 4 casas de Hogwarts: (Gryffindor, Slytherin , Hufflepuff y Ravenclaw)\n * Ten en cuenta los rasgos de cada casa para hacer las preguntas y crear el algoritmo seleccionador:Por ejemplo, en Slytherin se premia la ambición y la astucia.',
    'GENERADOR PSEUDO-ALEATORIO\n\n Crea un generador de números pseudoaleatorios entre 0 y 100.\n * No puedes usar ninguna función "random" (o semejante) del lenguaje de programación seleccionado.\n * Es más complicado de lo que parece...',
    'HETEROGRAMA,PARAGRAMA,PANGRAMA\n\n Crea 3 funciones, cada una encargada de detectar si una cadena de texto es un heterograma, un isograma o un pangrama.\n * Debes buscar la definición de cada uno de estos términos.',
    'PARÁMETROS URL\n\n Dada una URL con parámetros, crea una función que obtenga sus valores. No se pueden usar operaciones del lenguaje que realicen esta tarea directamente.\n * Ejemplo: En la url https://retosdeprogramacion.com?year=2023&challenge=0 los parámetros serían ["2023", "0"]',
    'VIERNES TRECE\n\n Crea una función que sea capaz de detectar si existe un viernes 13 en el mes y el año indicados.\n * La función recibirá el mes y el año y retornará verdadero o falso.',
    'ADIVINA LA PALABRA\n\n Crea un pequeño juego que consista en adivinar palabras en un número máximo de intentos:\n * El juego comienza proponiendo una palabra aleatoria incompleta. Por ejemplo "m_ur_d_v", y el número de intentos que le quedan\n * El usuario puede introducir únicamente una letra o una palabra (de la misma longitud que la palabra a adivinar)\n * Si escribe una letra y acierta, se muestra esa letra en la palabra. Si falla, se resta    uno al número de intentos\n * Si escribe una resolución y acierta, finaliza el juego, en caso contrario, se resta uno al número de intentos\n * Si el contador de intentos llega a 0, el jugador pierde\n * La palabra debe ocultar de forma aleatoria letras, y nunca puede comenzar ocultando más del 60%\n * Puedes utilizar las palabras que quieras y el número de intentos que consideres',
    'OCTAL Y HEX\n\n Crea una función que reciba un número decimal y lo trasforme a Octal y Hexadecimal.\n * No está permitido usar funciones propias del lenguaje de programación que realicen esas operaciones directamente.',
    'AUREBESH\n\n Crea una función que sea capaz de transformar Español al lenguaje básico del universo Star Wars: el "Aurebesh".\n * Puedes dejar sin transformar los caracteres que no existan en "Aurebesh".\n * También tiene que ser capaz de traducir en sentido contrario.',
    'PIEDRA,PAPEL,TIJERAS 2\n\n En este reto debes contruir un programa que permita jugar piedra papel o tijeras en un 2 de 3.',
    'ANÁLISIS DE TEXTOS\n\n Crea un programa que analice texto y obtenga:\n * Número total de palabras.\n * Longitud media de las palabras.\n * Número de oraciones del texto (cada vez que aparecen un punto).\n * Encuentre la palabra más larga.\n\n Todo esto utilizando un único bucle.',
    'LA TRIFUERZA\n\n ¡El nuevo "The Legend of Zelda: Tears of the Kingdom" ya está disponible! Crea un programa que dibuje una Trifuerza de "Zelda" formada por asteriscos.\n * Debes indicarle el número de filas de los triángulos con un entero positivo (n).\n * Cada triángulo calculará su fila mayor utilizando la fórmula 2n-1.',
    'PRIMOS GEMELOS\n\n Crea un programa que encuentre y muestre todos los pares de números primos gemelos en un rango concreto. El programa recibirá el rango máximo como número entero positivo.\n * Un par de números primos se considera gemelo si la diferencia entre ellos es exactamente 2. Por ejemplo (3, 5), (11, 13)\n * Ejemplo: Rango 14 (3, 5), (5, 7), (11, 13)',
    'ESPIRAL\n\n Crea una función que dibuje una espiral como la del ejemplo.\n * Únicamente se indica de forma dinámica el tamaño del lado.\n * Símbolos permitidos: ═ ║ ╗ ╔ ╝ ╚\n * Ejemplo espiral de lado 5 (5 filas y 5 columnas):\n* ════╗\n * ╔══╗║\n * ║╔╗║║\n * ║╚═╝║\n * ╚═══╝',
    'CIFRADO CÉSAR\n\n Crea un programa que realize el cifrado César de un texto y lo imprima. También debe ser capaz de descifrarlo cuando así se lo indiquemos.\n * Te recomiendo que busques información para conocer en profundidad cómo realizar el cifrado. Esto también forma parte del reto.',
    'CÓDIGO KONAMI\n\n Crea un programa que detecte cuando el famoso "Código Konami" se ha introducido correctamente desde el teclado. Si sucede esto, debe notificarse mostrando un mensaje en la terminal.',
    'CUENTA ATRÁS\n\n Crea una función que reciba dos parámetros para crear una cuenta atrás.\n * El primero, representa el número en el que comienza la cuenta.\n * El segundo, los segundos que tienen que transcurrir entre cada cuenta. Sólo se aceptan números enteros positivos.\n * El programa finaliza al llegar a cero.\n * Debes imprimir cada número de la cuenta atrás.',
    'MATEMÁTICAS\n\n Crea una función que reciba una expresión matemática (String) y compruebe si es correcta. Retornará true o false.\n * Para que una expresión matemática sea correcta debe poseer un número, una operación y otro número separados por espacios.\n * Tantos números y operaciones como queramos.\n * Números positivos, negativos, enteros o decimales.\n * Operaciones soportadas: + - * / %\n Ejemplos:\n * "5 + 6 / 7 - 4" -> true\n * "5 a 6" -> false',
    'CARACTER INFILTRADO\n\n Crea una función que reciba dos cadenas de texto casi iguales, a excepción de uno o varios caracteres. La función debe encontrarlos y retornarlos en formato lista/array.\n * Ambas cadenas de texto deben ser iguales en longitud.\n * Las cadenas de texto son iguales elemento a elemento.\n * No se pueden utilizar operaciones propias del lenguaje que lo resuelvan directamente.\n Ejemplos:\n * Me llamo mouredev / Me llemo mouredov -> ["e", "o"]\n * Me llamo.Brais Moure / Me llamo brais moure -> [" ", "b", "m"]',
    'T9\n\n Los primeros dispositivos móviles tenían un teclado llamado T9 con el que se podía escribir texto utilizando únicamente su teclado numérico (del 0 al 9). Crea una función que transforme las pulsaciones del T9 a su representación con letras.\n * Debes buscar cuál era su correspondencia original.\n * Cada bloque de pulsaciones va separado por un guión.\n * Si un bloque tiene más de un número, debe ser siempre el mismo.\n* Ejemplo: Entrada-> 6-666-88-777-33-3-33-888  Salida-> MOUREDEV',
    'ÁBACO\n\n Crea una función que sea capaz de leer el número representado por el ábaco.\n * El ábaco se representa por un array con 7 elementos.\n * Cada elemento tendrá 9 "O" (aunque habitualmente tiene 10 para realizar   operaciones) para las cuentas y una secuencia de "---" para el alambre.\n * El primer elemento del array representa los millones, y el último las unidades.\n * El número en cada elemento se representa por las cuentas que están a la izquierda del alambre.\nEjemplo de array y resultado:\n* ["O---OOOOOOOO",\n*  "OOO---OOOOOO",\n*  "---OOOOOOOOO",\n*  "OO---OOOOOOO",\n*  "OOOOOOO---OO",\n*  "OOOOOOOOO---",\n*  "---OOOOOOOOO"]\nResultado: 1.302.790',
    'COLUMNAS EXCEL\n\n Crea una función que calcule el número de la columna de una hoja de Excel teniendo en cuenta su nombre.\n * Las columnas se designan por letras de la "A" a la "Z" de forma infinita.\n * Ejemplos: A = 1, Z = 26, AA = 27, CA = 79.',
    'PERMUTACIONES\n\n Crea un programa que sea capaz de generar e imprimir todas las permutaciones disponibles formadas por las letras de una palabra.\n * Las palabras generadas no tienen por qué existir.\n * Deben usarse todas las letras en cada permutación.\n * Ejemplo: sol, slo, ols, osl, los, lso ',
    'COLORES \n\n Crea las funciones capaces de transformar colores HEX a RGB y viceversa.\nEjemplos:\n* RGB a HEX: r: 0, g: 0, b: 0 -> #000000\n* HEX a RGB: hex: #000000 -> (r: 0, g: 0, b: 0)\n* Si no existen combinaciones, retornar una lista vacía',
    'SUMAS\n\n Crea una función que encuentre todas las combinaciones de los números de una lista que suman el valor objetivo.\n * La función recibirá una lista de números enteros positivos y un valor objetivo.\n * Para obtener las combinaciones sólo se puede usar una vez cada elemento de la lista (pero pueden existir elementos repetidos en ella).\n * Ejemplo: Lista = [1, 5, 3, 2],  Objetivo = 6 Soluciones: [1, 5] y [1, 3, 2] (ambas combinaciones suman 6)\n * Si no existen combinaciones, retornar una lista vacía',
    'TRIPLES PITAGÓRICOS\n\n Crea una función que encuentre todos los triples pitagóricos (ternas) menores o iguales a un número dado.\n * Debes buscar información sobre qué es un triple pitagórico.\n * La función únicamente recibe el número máximo que puede aparecer en el triple.\n * Ejemplo: Los triples menores o iguales a 10 están formados por (3, 4, 5) y (6, 8, 10).',
    'MULTIPLICACIONES\n\n Crea un programa que sea capaz de solicitarte un número y se encargue de imprimir su tabla de multiplicar entre el 1 y el 10.\n * Debe visualizarse qué operación se realiza y su resultado.\n* Ej: \n*     1 x 1 = 1\n*     1 x 2 = 2\n*     1 x 3 = 3\n*     ... ',
    'CASA ENCANTADA\n\n Este es un reto especial por Halloween. Te encuentras explorando una mansión abandonada llena de habitaciones. En cada habitación tendrás que resolver un acertijo para poder avanzar a la siguiente. Tu misión es encontrar la habitación de los dulces.\n * Se trata de implementar un juego interactivo de preguntas y respuestas por terminal. (Tienes total libertad para ser creativo con los textos)\n* 🏰 Casa: La mansión se corresponde con una estructura cuadrada 4 x 4 que deberás modelar. Las habitaciones de puerta y dulces no tienen enigma. (16 habitaciones, siendo una de entrada y otra donde están los dulces)\n* Esta podría ser una representación:\n*   🚪⬜️⬜️⬜️\n*   ⬜️👻⬜️⬜️\n*   ⬜️⬜️⬜️👻\n*   ⬜️⬜️🍭⬜️\n* ❓ Enigmas: Cada habitación propone un enigma aleatorio que deberás responder con texto. Si no lo aciertas no podrás desplazarte.\n* 🧭 Movimiento: Si resuelves el enigma se te preguntará a donde quieres desplazarte (Ejemplo: norte/sur/este/oeste. Sólo deben proporcionarse las opciones posibles)\n* 🍭 Salida: Sales de la casa si encuentras la habitación de los dulces.\n* 👻 (Bonus) Fantasmas: Existe un 10% de que en una habitación aparezca un fantasma y tengas que responder dos preguntas para salir de ella.',
    'PUNTO DE ENCUENTRO\n\n Crea una función que calcule el punto de encuentro de dos objetos en movimiento en dos dimensiones.\n* Cada objeto está compuesto por una coordenada xy y una velocidad de desplazamiento (vector de desplazamiento) por unidad de tiempo (también en formato xy).\n* La función recibirá las coordenadas de inicio de ambos objetos y sus velocidades.\n* La función calculará y mostrará el punto en el que se encuentran y el tiempo que tardaron en lograrlo.\n* La función debe tener en cuenta que los objetos pueden no llegar a encontrarse.',
    'SIMULADOR DE CLIMA\n\n Crea una función que simule las condiciones climáticas (temperatura y probabilidad de lluvia) de un lugar ficticio al pasar un número concreto de días según estas reglas:\n* La temperatura inicial y el % de probabilidad de lluvia lo define el usuario.\n\n Cada día que pasa:\n* 10% de posibilidades de que la temperatura aumente o disminuya 2 grados.\n* Si la temperatura supera los 25 grados, la probabilidad de lluvia al día siguiente aumenta en un 20%.\n* Si la temperatura baja de 5 grados, la probabilidad de lluvia al día siguiente disminuye en un 20%.\n* Si llueve (100%), la temperatura del día siguiente disminuye en 1 grado.\n* La función recibe el número de días de la predicción y muestra la temperatura y si llueve durante todos esos días.\n* También mostrará la temperatura máxima y mínima de ese periodo y cuántos días va a llover.'
];
const info = {
    "1":list1,
    "2":list2
};
let buttons = document.querySelectorAll(".repository__button");
/* Download my resume */
buttons[0].addEventListener("click",()=>{
    const a = document.createElement("a");//creamos un a
    a.style.display = "none";
    a.target = "_blank";
    a.href = "cv/cv_brian_parra.pdf";
    a.download = "cv_brian_parra.pdf";//indicamos que descargar
    document.body.appendChild(a);//agregamos al cuerpo este elemento
    a.click();//le damos click
    document.body.removeChild(a);// lo removemos
});
/*Defining links working */
for(let i=0;i<5;i++){
    buttons[i+1].addEventListener("click",()=>{
        window.open(repositoryLinks[i]);
    })
};
/*Defining printLinks function */
function printLinks(bol,...linkClasses){
    let list = document.getElementById("search__links-container");
    list.innerHTML = "Links alternos:";//getting empty list
    if(bol){
        list.setAttribute("style","display:inline-block;");
        let frg = document.createDocumentFragment();
        linkClasses.forEach(array=>{//for each array creates a new li and a with the corresponding classes
            let l = document.createElement("li");
            let a = document.createElement("a");
            a.setAttribute("href",array[0]);//link
            a.setAttribute("target","_blank");
            a.classList.add("search__link");
            a.innerText = array[1];//text
            l.appendChild(a);//adding a to li
            l.classList.add(array[2]);//class
            frg.appendChild(l);//append to the fragment
        });
        list.appendChild(frg);//append the fragment
    }else{
        list.setAttribute("style","display:none;");
    }
}
/* Defining show info function and link to repository */
let link = "https://github.com/Roger-Phydev/Exercises-ejercicios/blob/main/01.py"; 
const inputs = document.querySelectorAll(".input"); //INPUTS
const rndm = document.querySelectorAll(".random");//BOXCHECK
let values = ["1","py",1],randomV = [false,false,false];//VALUES OF EVERYTHING
const showInfo = (v,r)=>{
    let textarea = document.getElementById("search--info");//taking the text area
    let url = `https://github.com/Roger-Phydev/Exercises-ejercicios`;
    let ls="1",la="py",n;
    if(!Number.isInteger(v[2])||v[2]<0||v[2]>50||(v[0]=="2"&&v[2]>35)){
        textarea.innerHTML = `Error\n\n Estas buscando un ejercicio inexistente. Debe ser un número entero para el ejercicio mayor a 0. En el caso de la lista, los ejercicios van del 1 al 50 y en el caso de la lista 2, del 1 al 35.\n\n Coloca un número válido`;
        return "error";
    }else{
        if(r.some(rn=>{
            if(rn){
                return true;
            }else{
                return false
            }
        })){//if there are at least one random value checked:
            textarea.innerHTML = `A probar suerte\n\n`;
            if(r[0]){//if list must be random
                if((r[2]||v[2]<=35)&&[false,true][Math.round(Math.random())]){
                    ls="2"//if it's selected the second one, changes the list number
                    textarea.innerHTML+=`Se buscará en una lista al azar, `;
                }
            }else{
                ls = v[0];//in other caso, just takes the value selected by the user
                textarea.innerHTML+=`Se buscará en la lista ${v[0]}, `;
            }
            if(r[2]){//if the exercise is randomized
                if(ls=="1"){
                    n = Math.ceil(50*Math.random());
                    n = n.toString();
                    if(n=='0'){n='01'}
                    if(n.length<2){
                        n = '0'+n;
                    }
                }else{
                    n = Math.ceil(35*Math.random());
                    n = n.toString();
                    if(n=='0'){n='01'}
                    if(n.length<2){
                        n = '0'+n;
                    }
                }
                textarea.innerHTML+=`un ejercicio al azar, `;
            }else{ // takes the value introduced by the user
                n=v[2].toString();
                if(n.length<2){
                    n = '0'+n;
                }
                textarea.innerHTML+=`el ejercicio ${v[2]}`
            }
            if(r[1]){//randomized the language
                if([false,true][Math.round(Math.random())]){
                    la = "js";
                }
                textarea.innerHTML+=`en un lenguaje al azar, `;
            }else{
                let lan = {
                    "py":"Python",
                    "js":"JavaScript"
                };
                la = v[1];
                textarea.innerHTML+=`en el lenguaje ${lan[v[1]]} `;
            }
            if(r[1]&&!r[0]&&!r[2]){
                textarea.innerHTML = info[v[0]][v[2]-1];
            }
        }else{//when there is no random, just show the respective info.
            ls = v[0];
            la = v[1];
            n=v[2].toString();
                if(n.length<2){
                    n = '0'+n;
                }
            textarea.innerHTML = info[v[0]][v[2]-1];
        }
    }
    if(ls==2){
        url=url+"-2";
    }
    url = url+'/blob/main/'+n+"."+la;
    if(ls==1){
        if(n=="07"&&la=="py"){
            printLinks(true,["https://github.com/Roger-Phydev/Exercises-ejercicios/blob/main/7_1.py","versión alterna","code"]);
            return url;
        }
        if(n=="21"&&la=="js"){
            printLinks(true,["https://github.com/Roger-Phydev/Exercises-ejercicios/blob/main/calc.html","archivo html","html"],["https://github.com/Roger-Phydev/Exercises-ejercicios/blob/main/calc.txt","ejemplo txt","code"]);
            return url;
        }
        if(n=="28"&&la=="js"){
            printLinks(true,["https://github.com/Roger-Phydev/Exercises-ejercicios/blob/main/vendmach.html","archivo html","html"],["https://github.com/Roger-Phydev/Exercises-ejercicios/blob/main/vendMach.css","archivo css","style"]);
            return url;
        }
    }else{
        if(n=="07"&&la=="js"){
            printLinks(true,["https://github.com/Roger-Phydev/Exercises-ejercicios-2/blob/main/Magichat.html","archivo html","html"]);
            return url;
        }
        if(n=="12"&&la=="js"){
            printLinks(true,["https://github.com/Roger-Phydev/Exercises-ejercicios-2/blob/main/words.html","archivo html","html"]);
            return url;
        }
        if(n=="15"&&la=="js"){
            printLinks(true,["https://github.com/Roger-Phydev/Exercises-ejercicios-2/blob/main/rsp.html","archivo html","html"]);
            return url;
        }
        if(n=="33"&&la=="js"){
            printLinks(true,["https://github.com/Roger-Phydev/Exercises-ejercicios-2/blob/main/hauntedhouse.html","archivo html","html"],["https://github.com/Roger-Phydev/Exercises-ejercicios-2/blob/main/hauntedhouse.css","archivo css","style"]);
            return url;
        }
    }
    printLinks(false);
    return url;
};
showInfo(values,randomV);
/*defining events for information */
inputs.forEach((inp,i)=>{
    inp.addEventListener("change",e=>{
        if(i==2){//updating in case of number
            values[i]=parseFloat(inputs[i].value);
        }else{//in other case
            values[i]=inputs[i].value;
        }
        link = showInfo(values,randomV);//showing
    });
});
rndm.forEach((r,i)=>{
    r.addEventListener("change",()=>{
        randomV[i]=rndm[i].checked;
        link = showInfo(values,randomV);
    })
});
/* operating the search button */
const search = document.getElementById("search");
search.addEventListener("click",()=>{
    if(link=="error"){
        document.getElementById("dialog").setAttribute("open","true");
    }else{
        window.open(link);
    }
})