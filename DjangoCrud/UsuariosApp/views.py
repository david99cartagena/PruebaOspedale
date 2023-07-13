from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser

from UsuariosApp.models import tb_Eps, tb_Roles, tb_Usuarios
from UsuariosApp.serializers import EpsSerializer, RolesSerializer, UsuariosSerializer

# Create your views here.

@csrf_exempt
def epsApi(request, id=0):
    if request.method == "GET":
        eps = tb_Eps.objects.all()
        eps_serializer = EpsSerializer(eps, many=True)
        return JsonResponse(eps_serializer.data, safe=False)

    elif request.method == "POST":
        eps_data = JSONParser().parse(request)
        eps_serializer = EpsSerializer(data=eps_data)
        if eps_serializer.is_valid():
            eps_serializer.save()
            return JsonResponse("Eps Agregado exitosamente !!", safe=False)
        return JsonResponse("No se pudo agregar.", safe=False)

    elif request.method == "PUT":
        eps_data = JSONParser().parse(request)
        eps = tb_Eps.objects.get(EpsId=eps_data["EpsId"])
        eps_serializer = EpsSerializer(eps, data=eps_data)
        if eps_serializer.is_valid():
            eps_serializer.save()
            return JsonResponse("Eps Actualizado con éxito !!", safe=False)
        return JsonResponse("Error al actualizar.", safe=False)

    elif request.method == "DELETE":
        eps = tb_Eps.objects.get(EpsId=id)
        eps.delete()
        return JsonResponse("Eps Borrado exitosamente !!", safe=False)

@csrf_exempt
def rolApi(request, id=0):
    if request.method == "GET":
        roles = tb_Roles.objects.all()
        roles_serializer = RolesSerializer(roles, many=True)
        return JsonResponse(roles_serializer.data, safe=False)

    elif request.method == "POST":
        rol_data = JSONParser().parse(request)
        rol_serializer = RolesSerializer(data=rol_data)
        if rol_serializer.is_valid():
            rol_serializer.save()
            return JsonResponse("Rol Agregado exitosamente !!", safe=False)
        return JsonResponse("No se pudo agregar.", safe=False)

    elif request.method == "PUT":
        rol_data = JSONParser().parse(request)
        rol = tb_Roles.objects.get(RolId=rol_data["RolId"])
        rol_serializer = RolesSerializer(rol, data=rol_data)
        if rol_serializer.is_valid():
            rol_serializer.save()
            return JsonResponse("Rol Actualizado con éxito !!", safe=False)
        return JsonResponse("Error al actualizar.", safe=False)

    elif request.method == "DELETE":
        rol = tb_Roles.objects.get(RolId=id)
        rol.delete()
        return JsonResponse("Borrado exitosamente !!", safe=False)

@csrf_exempt
def usuarioApi(request, id=0):
    if request.method == "GET":
        usuarios = tb_Usuarios.objects.all()
        usuarios_serializer = UsuariosSerializer(usuarios, many=True)
        return JsonResponse(usuarios_serializer.data, safe=False)

    elif request.method == "POST":
        usuario_data = JSONParser().parse(request)
        usuario_serializer = UsuariosSerializer(data=usuario_data)
        if usuario_serializer.is_valid():
            usuario_serializer.save()
            return JsonResponse("Agregado exitosamente !!", safe=False)
        return JsonResponse("No se pudo agregar.", safe=False)

    elif request.method == "PUT":
        usuario_data = JSONParser().parse(request)
        usuario = tb_Usuarios.objects.get(UsuarioId=usuario_data["UsuarioId"])
        usuario_serializer = UsuariosSerializer(usuario, data=usuario_data)
        if usuario_serializer.is_valid():
            usuario_serializer.save()
            return JsonResponse("Actualizado con éxito !!", safe=False)
        return JsonResponse("Error al actualizar.", safe=False)

    elif request.method == "DELETE":
        usuario = tb_Usuarios.objects.get(UsuarioId=id)
        usuario.delete()
        return JsonResponse("Borrado exitosamente !!", safe=False)
