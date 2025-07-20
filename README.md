# Prueba Ospedale

**Descripción corta del proyecto:**
Sistema CRUD para gestión de **Roles**, **EPS** y **Usuarios**, desarrollado como prueba técnica.

---

## 🚀 Tecnologías Utilizadas

| Herramienta        | Versión  | Descripción                                                |
| ------------------ | -------- | ---------------------------------------------------------- |
| Node.js            | v18.15.0 | Entorno de ejecución para JavaScript del lado del servidor |
| Angular            | 15.2.7   | Framework para aplicaciones web frontend                   |
| TypeScript         | 4.9.5    | Superset de JavaScript con tipado estático                 |
| Bootstrap          | 4.0      | Framework CSS para diseño responsivo                       |
| Python             | 3.9.13   | Lenguaje de programación interpretado                      |
| Django             | 4.2      | Framework web backend para Python                          |
| Visual Studio Code | —        | Editor de código fuente                                    |
| Git                | 2.40.0   | Sistema de control de versiones                            |
| MySQL Workbench    | 8.0.32   | Herramienta visual para diseño y administración de MySQL   |
| Postman            | 10.16.0  | Herramienta para pruebas y documentación de APIs           |

---

## 📄 Clonar el Proyecto

```sh
git clone https://github.com/david99cartagena/PruebaOspedale.git
```

---

## 🖥️ Configuración del Backend (Django)

### 🔹 Crear entorno virtual

1. Instala `virtualenv` si no lo tienes:

```sh
pip install virtualenv
```

2. Crea el entorno virtual:

```sh
virtualenv nombre_entorno
```

3. Activa el entorno virtual:

- **Windows**:
  ```sh
  nombre_entorno\Scripts\activate
  ```
- **Linux/Mac**:
  ```sh
  source nombre_entorno/bin/activate
  ```

4. Instala dependencias:

```sh
pip install -r requirements.txt
```

---

### 🔹 Estructura del proyecto

```
djangoproyecto/
│
├───nombre_entorno/       # ✅ Entorno virtual Python (no forma parte del repositorio)
├───mysite/               # ✅ Directorio principal del proyecto Django
│   ├── __init__.py       # Marca el directorio como un paquete de Python
│   ├── asgi.py           # Configuración para ASGI (deploy asincrónico)
│   ├── settings.py       # Configuración general del proyecto (bases de datos, apps, etc.)
│   ├── urls.py           # URLs principales del proyecto
│   └── wsgi.py           # Configuración para WSGI (deploy tradicional)
├── manage.py             # ✅ Script de utilidad para manejar el proyecto (comandos Django)
└── requirements.txt      # ✅ Lista de dependencias para instalar con pip
```

---

### 🔹 Configuraciones recomendadas

Edita `settings.py`:

- Idioma

```python
LANGUAGE_CODE = 'es'
```

- Zona horaria

```python
TIME_ZONE = 'America/Bogota'
```

- Archivos estáticos

```python
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'static'
```

---

### 🔹 Base de datos

Por defecto se utiliza SQLite:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

> También puedes usar MySQL si lo prefieres.

---

### 🔹 Migraciones

Genera y aplica las migraciones:

```sh
python manage.py makemigrations
```

```sh
python manage.py migrate
```

Si todo esta bien, deberías ver algo así:

    (myvenv) ~/djangoproyecto$ python manage.py migrate
    Operations to perform:
      Apply all migrations: auth, admin, contenttypes, sessions
    Running migrations:
      Rendering model states... DONE
      Applying contenttypes.0001_initial... OK
      Applying auth.0001_initial... OK
      Applying admin.0001_initial... OK

---

### 🔹 Iniciar servidor

Ejecuta el siguiente comando:

```sh
python manage.py runserver
```

Abre tu navegador y visita:

> [http://127.0.0.1:8000](http://127.0.0.1:8000)

## 📌 Notas finales

- `manage.py` es el archivo para la gestión de comandos del proyecto.
- `urls.py` define las rutas del sitio.
- `settings.py` incluye toda la configuración del entorno.

---

## Frontend

(Obligatorio) Instalar dependecias
```sh
npm install
```

Versiones de angular y node js
```sh
node -v o node –version
```

```sh
ng version
```

( Opcional ) Instalar angular cli
```sh
npm install @angular/cli
```

## ( Obligatorio ) 
Iniciar proyecto o ejecutarlo con un navegador predeterminado.
Navegue a 
> http://localhost:4200/ 

La aplicación se recargará automáticamente si cambia cualquiera de los archivos de origen.

```sh
ng serve -open or ng s -o
```

( Opcional ) Iniciar proyecto con x puerto
```sh
ng serve
ng serve -o --port=4300
ng serve -o --port=4300
```

Generar Artefactos o Componentes de una App Angular
```sh
ng generate component mi-componente
```

## Imagenes del aplicacion

> Creacion y preparacion de Backend
![](https://raw.githubusercontent.com/david99cartagena/PruebaOspedale/main/Media/Screenshot_1.png)

> Creacion y preparacion de Frontend
![](https://raw.githubusercontent.com/david99cartagena/PruebaOspedale/main/Media/Screenshot_12.png)

> Data de Rol Eps y Usuario desde Postman
![](https://raw.githubusercontent.com/david99cartagena/PruebaOspedale/main/Media/Screenshot_2.png)

![](https://raw.githubusercontent.com/david99cartagena/PruebaOspedale/main/Media/Screenshot_3.png)

![](https://raw.githubusercontent.com/david99cartagena/PruebaOspedale/main/Media/Screenshot_4.png)

> Data en Base de datos MySQL Workbench
![](https://raw.githubusercontent.com/david99cartagena/PruebaOspedale/main/Media/Screenshot_11.png)

> Visualizacion desde un navegador FireFox
![](https://raw.githubusercontent.com/david99cartagena/PruebaOspedale/main/Media/Screenshot_6.png)

![](https://raw.githubusercontent.com/david99cartagena/PruebaOspedale/main/Media/Screenshot_7.png)

![](https://raw.githubusercontent.com/david99cartagena/PruebaOspedale/main/Media/Screenshot_8.png)

![](https://raw.githubusercontent.com/david99cartagena/PruebaOspedale/main/Media/Screenshot_9.png)
