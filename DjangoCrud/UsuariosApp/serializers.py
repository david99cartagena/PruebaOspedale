from rest_framework import serializers
from UsuariosApp.models import tb_Roles, tb_Eps, tb_Usuarios

class EpsSerializer(serializers.ModelSerializer):
    class Meta:
        model = tb_Eps
        fields = ("EpsId", "EpsNombre")

class RolesSerializer(serializers.ModelSerializer):
    class Meta:
        model = tb_Roles
        fields = ("RolId", "RolNombre")

class UsuariosSerializer(serializers.ModelSerializer):
    class Meta:
        model = tb_Usuarios
        fields = (
            "UsuarioId",
            "UsuarioNombre",
            "UsuarioDocumento",
            "UsuarioPassword",
            "UsuarioGenero",
            "UsuarioEdad",
            "UsuarioFecha_nacimiento",
            "UsuarioTelefono",
            "Eps",
            "Rol",
            "UsuarioCreated_at",
        )
