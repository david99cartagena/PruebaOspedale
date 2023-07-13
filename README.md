# Prueba Ospedale

## Construido con 🛠️
Herramientas utilizadas

- [node. js] - version v18.15.0, Entorno en tiempo de ejecución multiplataforma para la capa del servidor ( en el lado del servidor )
- [Angular] - version 15.2.7, Framework de Frontend
- [typescript] - version 4.9.5

- [Python] 3.9.13, Python es un lenguaje de programación de alto nivel, interpretado y de propósito general. Se destaca por su sintaxis clara y legible, lo que facilita la escritura y comprensión del código.
- [Django] 4.2, Framework de Backend

- [Git] - version 2.40.0, Sistema de control de versiones
- [MySQL Workbench] 8.0.32, Workbench, también conocido como MySQL Workbench, es una herramienta de diseño y administración visual para bases de datos MySQL
- [Postman] 10.16.0, Postman es una herramienta de colaboración y prueba de API que permite a los desarrolladores probar, documentar y compartir fácilmente APIs.

# (Obligatorio) usar  
> git clone 

## Backend

## Crear un entorno virtual en Django

Sigue estos pasos para crear un entorno virtual en Django:

1. Abre una terminal o línea de comandos en el directorio raíz de tu proyecto Django.
2. Asegúrate de tener instalado `virtualenv`. Si no lo tienes instalado, puedes hacerlo ejecutando el siguiente comando (requiere tener `pip` instalado):

```sh
	pip install virtualenv
```
```sh
	virtualenv nombre_entorno
```
```sh
	pip install -r requirements.txt
```
> Recuerda ejecutar todo en el virtualenv. Si no ves un prefijo `(myvenv)` en tu consola tienes que activar tu virtualenv. Explicamos cómo hacerlo en el capítulo de **Instalación de Django** en la sección **Trabajar con virtualenv**. Basta con escribir `myvenv\Scripts\activate` en Windows o `source myvenv/bin/activate` en Mac OS / Linux.

	(myvenv) ~/djangoproyecto$ django-admin startproject mysite .

> El punto `.` es crucial porque le dice al script que instale Django en el directorio actual (para el cual el punto `.` sirve de abreviatura).

> **Nota** Cuando escribas los comandos de arriba acuérdate de que sólo tienes que escribir la parte que empieza por `django-admin`. La parte de `(myvenv) ~/djangoproyecto$` que mostramos aquí es sólo un ejemplo del mensaje que aparecerá en tu línea de comandos.

    djangoproyecto

    ├───mysite
	│        __init__.py
	│        asgi.py
    │        settings.py
    │        urls.py
    │        wsgi.py
    ├───nombre_entorno
	├───manage.py
    └───requirements.txt

> **Nota**: en tu estructura de directorios, también verás el directorio `myvenv` que creamos anteriormente.

`manage.py` es un script que ayuda con la administración del sitio. Con él podremos iniciar un servidor web en nuestro ordenador sin necesidad de instalar nada más, entre otras cosas.

El archivo `settings.py` contiene la configuración de tu sitio web.

Recuerdas cuando hablamos de una cartera que debía comprobar dónde entregar una carta? El archivo `urls.py` contiene una lista de los patrones utilizados por `urlresolver`.

## Cambiar la configuración

Vamos a hacer algunos cambios en `mysite/settings.py`. Abre el archivo usando el editor de código que has instalado anteriormente.

**Nota**: Ten en cuenta que `settings.py` es un archivo normal, como cualquier otro. Puedes abrirlo con el editor de texto.

En `settings.py`, encuentra la línea que contiene `TIME_ZONE` y modifícala para elegir tu zona horaria. Por ejemplo:

Un código de idioma tiene dos partes: el idioma, p.ej. `en` para inglés. Django viene con muchas traducciones preparadas.

Si quieres un idioma diferente, cambia el código de idioma cambiando la siguiente línea:

```python
LANGUAGE_CODE = 'es'
```

También tenemos que añadir una ruta para archivos estáticos. (Veremos todo acerca de archivos estáticos y CSS más adelante.) Ve al *final* del archivo, y justo debajo de la entrada `STATIC_URL`, añade una nueva llamada `STATIC_ROOT`:

```python
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / 'static' 
```

## Configurar una base de datos

Hay una gran variedad de opciones de bases de datos para almacenar los datos de tu sitio. Utilizaremos la que viene por defecto, `sqlite3`.

Esta ya está configurado en esta parte de tu archivo `mysite/settings.py`:

```python
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}
```

Recuerda que el comando `makemigrations` se utiliza para generar las migraciones en base a los cambios realizados en los modelos de tu aplicación. Una vez generadas las migraciones, puedes aplicarlas a la base de datos utilizando el comando `migrate`.

```sh
	python manage.py makemigrations
```

Para crear una base de datos para nuestro blog, ejecutemos lo siguiente en la consola: `python manage.py migrate` (necesitamos estar en el directorio de `djangoproyecto` que contiene el archivo `manage.py`). Si eso va bien, deberías ver algo así:

    (myvenv) ~/djangoproyecto$ python manage.py migrate
    Operations to perform:
      Apply all migrations: auth, admin, contenttypes, sessions
    Running migrations:
      Rendering model states... DONE
      Applying contenttypes.0001_initial... OK
      Applying auth.0001_initial... OK
      Applying admin.0001_initial... OK
      Applying admin.0002_logentry_remove_auto_add... OK
      Applying contenttypes.0002_remove_content_type_name... OK
      Applying auth.0002_alter_permission_name_max_length... OK
      Applying auth.0003_alter_user_email_max_length... OK
      Applying auth.0004_alter_user_username_opts... OK
      Applying auth.0005_alter_user_last_login_null... OK
      Applying auth.0006_require_contenttypes_0002... OK
      Applying auth.0007_alter_validators_add_error_messages... OK
      Applying auth.0008_alter_user_username_max_length... OK
      Applying auth.0009_alter_user_last_name_max_length... OK
      Applying sessions.0001_initial... OK

## Iniciar el servidor

Debes estar en el directorio que contiene el archivo `manage.py` (en la carpeta `djangoproyecto`). En la consola, podemos iniciar el servidor web ejecutando `python manage.py runserver`:

    (myvenv) ~/djangoproyecto$ python manage.py runserver

Ahora necesitas revisar que tu website se está ejecutando. Abre tu navegador (Firefox, Chrome, Safari, Internet Explorer, o cualquiera que uses) y escribe esta dirección:

http://127.0.0.1:8000/

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
Iniciar proyecto o ejecutarlo con un navegador predeterminado. Navegue a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambia cualquiera de los archivos de origen.

```sh
ng serve -open or ng s -o
```

( Opcional ) Iniciar proyecto con x puerto
```sh
ng serve -o --port=4300
```

Generar Artefactos o Componentes de una App Angular
```sh
ng generate component mi-componente
```
