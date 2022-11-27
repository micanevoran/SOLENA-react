# <img src="https://github.com/micanevoran/SOLENA/blob/master/img/logo.svg" alt="SOLENA - Soluciones Energéticas Ambientales" width=25%>
<img src="https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green">

Este proyecto fue creado con [Create React App](https://github.com/facebook/create-react-app).

Se trata de un e-commerce dedicado a la venta de productos relacionados a energía solar. 

## Librerías Utilizadas

- [react-router-dom](https://reactrouter.com/en/main): librería utilizada para definir las rutas de navegación dentro de la aplicación
- [Firebase](https://firebase.google.com): plataforma de servicios utilizada para el almacenamiento de la información relativa a los productos disponibles para la venta, y también para la generación y almacenamiento de órdenes a partir delas compras realizadas por el usuario. 

### Funcionalidades del Proyecto

En la pagina principal del proyecto se puede visualizar el listado de productos disponibles para la compra. 

En la barra superior de navegación, se puede acceder a las distintas categorías de productos, para obtener una lista de productos filtrada según se correspondan con la característica seleccionada.

Al presionar en el botón "ver detalle" de un producto, se puede acceder a la información del producto, con la posibilidad de agregar al carrito la cantidad requerida del producto seleccionado. No se podrá aumentar la cantidad seleccionada de un producto cuando ésta supere el stock disponible para el mismo. 

Una vez agregado el producto, se ofrece al usuario ir al carrito o seguir agregando productos. 

A medida que el usuario vaya agregando productos, en el ícono de carrito (ubicado en la esquina superior derecha de la barra superior de navegación) se podrá visualizar la cantidad de unidades que el usuario tiene en el carrito hasta el momento. 
El carrito es accesible en todo momento para el usuario, donde podrá ver el detalle de los productos que tiene en él y, en caso de que aún esté vacío, se le mostrará un link hacia la página principal de la aplicación, para que comience a agregar productos. Aquí también el usuario podrá visualizar el total a pagar por el carrito armado y podrá eliminar cualquier producto agregado o eliminar todos los productos del carrito a la vez. 

Una vez que el usuario esté conforme con los productos agregados al carrito, podrá continuar al checkout de la compra, donde se le pedirá que complete sus datos para generar la orden. No podrá enviar el formulario si alguno de los campos está vacío o si el mail no coincide en los dos campos donde se lo solicita. 

Una vez enviado el formulario, se genera una orden de compra, cuyo ID es compartido al usuario para poder darle trackeabilidad a su pedido. 

## Acceso al Deploy del Proyecto
Se puede acceder al deploy del proyecto desde el siguiente [Link](https://loquacious-froyo-b5b8b3.netlify.app/).

## Pasos para levantar el proyecto en local

1.  Clonar el repositorio

```
git clone https://github.com/micanevoran/SOLENA-react.git
```

2. Instalar las dependencias

```
npm install react-router-dom
```

```
npm install firebase
```

3. Correr el proyecto en el navegador

```
npm start
```
