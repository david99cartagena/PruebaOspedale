from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.

class tb_Eps(models.Model):
    EpsId = models.AutoField(primary_key=True, null=False)
    EpsNombre = models.CharField(max_length=100, null=False)

class tb_Roles(models.Model):
    RolId = models.AutoField(primary_key=True, null=False)
    RolNombre = models.CharField(max_length=100, null=False)

class tb_Usuarios(models.Model):
    UsuarioId = models.AutoField(primary_key=True, null=False)
    UsuarioNombre = models.CharField(max_length=100, null=False)
    UsuarioDocumento = models.IntegerField(null=False)
    UsuarioPassword = models.CharField(max_length=100, null=False)
    UsuarioGenero = models.CharField(max_length=50, null=False)
    UsuarioEdad = models.IntegerField(null=False)
    UsuarioFecha_nacimiento = models.DateField(null=False)
    UsuarioTelefono = models.IntegerField(null=False)
    Eps = models.ForeignKey(tb_Eps, on_delete=models.CASCADE)
    Rol = models.ForeignKey(tb_Roles, on_delete=models.CASCADE)
    UsuarioCreated_at = models.DateTimeField(auto_now_add=True, null=False)