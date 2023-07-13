from django.urls import re_path
from UsuariosApp import views

urlpatterns = [
    # url(r"^role/$", views.roleApi),
    # url(r"^role/([0-9]+)$", views.roleApi)
    re_path(r"^eps/$", views.epsApi),
    re_path(r"^eps/([0-9]+)$", views.epsApi),
    re_path(r"^rol/$", views.rolApi),
    re_path(r"^rol/([0-9]+)$", views.rolApi),
    re_path(r"^usuario/$", views.usuarioApi),
    re_path(r"^usuario/([0-9]+)$", views.usuarioApi)
]
