# t3_act5_react
**Autor:** Azael Hernandez Uvera  
**Carrera:** Ingeniería en Sistemas Computacionales  
**Programacion Web** 7SD  


## Descripción del proyecto

Este proyecto fue desarrollado utilizando React con Vite como parte de la práctica de introducción al framework.

La aplicación consiste en una lista de tareas donde el usuario puede agregar nuevas actividades y eliminarlas cuando ya no sean necesarias. Durante el desarrollo se aplicaron conceptos básicos de React como componentes, props, estado con useState, eventos y renderizado dinámico de listas.

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- CSS

## Funcionalidades

- Creación de componentes funcionales.
- Uso de props para pasar información entre componentes.
- Manejo de estado utilizando useState.
- Agregar tareas mediante eventos.
- Eliminar tareas de la lista.
- Renderizado dinámico utilizando map().
- Uso de keys para identificar elementos dentro de una lista.

## Componentes utilizados

### App.jsx

Es el componente principal de la aplicación. Contiene la lógica para agregar, mostrar y eliminar tareas utilizando useState.

### Tarjeta.jsx

Es un componente que recibe información mediante props y muestra el nombre del usuario en pantalla.

## Respuestas del cuestionario

### a) ¿Qué diferencia hay entre props y state en React?

Las props son datos que un componente recibe de otro componente y sirven para enviar información. Estos valores no se modifican dentro del componente que los recibe.

El state es información interna de un componente que puede cambiar durante la ejecución de la aplicación. Cuando el estado cambia, React actualiza automáticamente la interfaz.

En este proyecto se utilizaron props en el componente Tarjeta y state para manejar la lista de tareas.

---

### b) ¿Por qué es importante usar una key al renderizar una lista de elementos?

La key permite que React identifique cada elemento de una lista de forma única. Esto ayuda a que React pueda actualizar correctamente los elementos cuando existen cambios como agregar o eliminar información.

En este proyecto se utilizó una key para identificar cada tarea creada dinámicamente.

---

### c) Explica con tus propias palabras qué hace la función useState y da un ejemplo de dónde la usaste en tu mini aplicación.

useState es un hook de React que permite crear variables de estado dentro de un componente funcional. Estas variables pueden cambiar y cuando cambian React vuelve a renderizar la información actualizada.

En la aplicación se utilizó para guardar las tareas agregadas por el usuario y controlar el texto escrito en el campo de entrada.
Ejemplo:

```javascript
const [tareas, setTareas] = useState([])
```
---
### d) Enlace del repositorio de GitHub
https://github.com/AzaelJoestar/t3_act5_react

### e) Enlace del proyecto ya desplegado en GitHub Pages
https://azaeljoestar.github.io/t3_act5_react/
