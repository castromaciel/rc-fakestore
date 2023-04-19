<h2> Estructura Básica (O por tipos de carpetas)</h2>

```
rc-fakestore
└─ src
  ├─ components
    ├─ Navbar
      ├── Navbar.js
      ├── navbar.css
    ├─ ProductCard
      ├── ProductCard.js
      ├── product-card.css
  ├─ helpers
    ├── filterById.js
  ├─ hooks
    ├── useProducts.js
  ├─ pages
    ├─ Home
      ├── Home.js
    ├─ Login
      ├── Login.js
  ├─ services
    ├─ users
      ├── getProducts.js
  ├── App.js
  ├── index.css
  ├── index.js
```

<h3> <code>components</code> </h3>

<p>
  Dentro de la carpeta de <code>components</code>, de su traducción literal 'componentes', ubicaremos los componentes comunes dentro de la aplicación, tales como botones, inputs, etc. Cada uno de estos componentes, tiene su carpeta con su nombre especifico, su respectivo test y hoja de estilos.
</p>

<h3> <code>helpers</code> </h3>

<p>
  Dentro de la carpeta de <code>helpers</code>, colocamos las funciones que utilizamos a lo largo de la aplicación. Esta carpeta se crea con la finalidad de evitar la duplicidad de funciones en nuestros componentes.
</p>

<h3> <code>hooks</code> </h3>

<p>
  La carpeta <code>hooks</code> contiene todos los custom hooks que utilizamos en nuestro proyecto. Esta es una carpeta muy útil en proyectos tanto básicos como grandes, ya que casi todos los proyectos tendrán múltiples hooks personalizados.
</p>

<h3> <code>pages</code> (Opcional) </h3>

<p>
  En <code>pages</code> ubicaremos las páginas de nuestro proyecto (en caso de que tengan).
</p>

<h3> <code>routes</code> (Opcional) </h3>

<p>
  En la carpeta <code>routes</code>, llevaremos a cabo la configuracion del enrutamiento y redirecciones de la aplicación.
</p>

<h3> <code>services</code> (Opcional) </h3>

<p>
  La ultima carpeta dentro de esta estructura, es la carpeta <code>services</code>. Aquí crearemos las carpetas necesarias con las peticiones al servidor. En el ejemplo se creó una carpeta de users dentro de services. Esto significa que haremos peticiones de usuarios. Podemos tener un metodo get, para obtener los usuarios, o un post para crear los mismos.
</p>

<p> Leer nota completa en <a href="https://castromaciel-blog.netlify.app/docs/react-folder-structure/" target="_blank"> Estructura de carpetas react </a>
