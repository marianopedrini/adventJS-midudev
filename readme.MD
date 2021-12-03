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
