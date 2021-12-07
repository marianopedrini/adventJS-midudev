# Retos Midu

link:
https://adventjs.dev/

## 1- Ovejas

Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.

Por ejemplo, si tenemos las ovejas:

```javascript
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo' },
];
```

Al ejecutar el método debería devolver lo siguiente:

```javascript
const ovejasFiltradas = contarOvejas(ovejas);

console.log(ovejasFiltradas);

// [{ name: 'Navidad', color: 'rojo' },
// { name: 'Ki Na Ma', color: 'rojo' }]
```

## 2- Regalos

Te ha llegado una carta ✉️ con todos los regalos que debes preparar. El tema es que es una cadena de texto y es muy difícil de leer 😱. ¡Menos mal que han puesto cada regalo separado por espacio! (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)

Encima nos hemos dado cuenta que algunas palabras vienen con un \_ delante de la palabra, por ejemplo \_playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:

```javascript
const carta = 'bici coche balón _playstation bici coche peluche';
```

Al ejecutar el método debería devolver lo siguiente:

```javascript
const regalos = listGifts(carta)

console.log(regalos)
/_
{
bici: 2,
coche: 2,
balón: 1,
peluche: 1
}
_/

```

Ten en cuenta que los tests pueden ser más exhaustivos... 😝 ¡Cuidado con contar espacios vacíos!

## 3- Grinch

El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:

```javascript
'bici coche (balón) bici coche peluche'; // -> ✅
'(muñeca) consola bici'; // ✅

'bici coche (balón bici coche'; // -> ❌
'peluche (bici [coche) bici coche balón'; // -> ❌
'(peluche {) bici'; // -> ❌
'() bici'; // ❌
```

Crea una función que pasándole el texto de la carta, devuelva true si es válida y false si no lo es. ¡Y acaba con la travesura del Grinch!

## 4- Arbol de navidad

¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento 5, se pintaría esto:

```javascript
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
```

Creamos un triángulo de asteríscos \* con la altura proporcionada y, a los lados, usamos el guión bajo \_ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

Otro ejemplo con un árbol de altura 3:

```javascript
__*__
_***_
*****
__#__
__#__
```

Ten en cuenta que el árbol es un string y necesitas los saltos de línea \n para cada línea para que se forme bien el árbol.

## 5- Contando los días

Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.

Para ayudar a esto, vamos a crear una función que pasándole una instancia de **Date** nos diga el número de días que faltan.

Veamos unos ejemplos:

```javascript
const date1 = new Date('Dec 1, 2021');
daysToXmas(date1); // 24
const date2 = new Date('Dec 24, 2021 00:00:01');
daysToXmas(date2); // 1
const date3 = new Date('Dec 24, 2021 23:59:59');
daysToXmas(date3); // 1
const date4 = new Date('December 20, 2021 03:24:00');
daysToXmas(date4); // 5
```

El resultado tiene que ser un número entero y, como ves, aunque falte un segundo hasta el siguiente día, se entiende que todavía falta un día.

¡Pero ojo! También hay que indicar si la fecha es del mismo día (devolveríamos **0**) o si es una fecha futura (devolveríamos el número de días en negativo **-**):

```javascript
const date = new Date('Dec 25, 2021');
daysToXmas(date); // 0
const date1 = new Date('Dec 26, 2021');
daysToXmas(date1); // -1
const date2 = new Date('Dec 31, 2021');
daysToXmas(date2); // -6
const date3 = new Date('Jan 1, 2022 00:00:01');
daysToXmas(date3); // -7
const date4 = new Date('Jan 1, 2022 23:59:59');
daysToXmas(date4); // -7
```

Por cierto, la fecha de referencia para saber si es 25 de diciembre es **Dec 25, 2021**.

## 6- Buscando en el almacen

Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱

A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.

Si no se encuentra, se devuelve **null**.

Veamos unos ejemplos:

```javascript
sumPairs([3, 5, 7, 2], 10); // [3, 7]
sumPairs([-3, -2, 7, -5], 10); // null
sumPairs([2, 2, 3, 1], 4); // [2, 2]
sumPairs([6, 7, 1, 2], 8); // [6, 2]
sumPairs([0, 2, 2, 3, -1, 1, 5], 6); // [1, 5]
```

El resultado tiene que ser un array con dos números.

Una vez que tengas el resultado... ¿cómo podrías hacer que fuese lo más óptimo posible para no tener que recorrer las mismas situaciones dos veces 🤔?
