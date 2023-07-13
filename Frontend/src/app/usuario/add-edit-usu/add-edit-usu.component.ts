import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-usu',
  templateUrl: './add-edit-usu.component.html',
  // styleUrls: ['./add-edit-usu.component.css']
})
export class AddEditUsuComponent {
  constructor(private service: SharedService) { }

  @Input() usu: any;
  UsuarioId: number | undefined;
  UsuarioNombre: string | undefined;
  UsuarioDocumento: string | undefined;
  UsuarioPassword: string | undefined;
  UsuarioGenero: string | undefined;
  UsuarioEdad: number | undefined;
  UsuarioFecha_nacimiento: string | undefined;
  UsuarioTelefono: string | undefined;
  Eps: string | undefined;
  Rol: string | undefined;
  UsuarioCreated_at: string | undefined;

  genres: any = [];
  epsList: { EpsId: number; EpsNombre: string }[] = [];
  rolList: { RolId: number; RolNombre: string }[] = [];

  ngOnInit(): void {
    this.loadGenres();
    this.loadEpsList();
    this.loadRolList();
  }

  loadGenres() {
    const genres = [
      { id: 1, nombre: 'Masculino' },
      { id: 2, nombre: 'Femenino' },
      { id: 3, nombre: 'Otro' },
    ];
    this.genres = genres;
  }

  loadEpsList() {
    this.service.getAllEpsNombres().subscribe((data: any[]) => {
      this.epsList = data;

      this.UsuarioId = this.usu.UsuarioId;
      this.UsuarioNombre = this.usu.UsuarioNombre;
      this.UsuarioDocumento = this.usu.UsuarioDocumento;
      this.UsuarioPassword = this.usu.UsuarioPassword;
      this.UsuarioGenero = this.usu.UsuarioGenero;
      this.UsuarioEdad = this.usu.UsuarioEdad;
      this.UsuarioFecha_nacimiento = this.usu.UsuarioFecha_nacimiento;
      this.UsuarioTelefono = this.usu.UsuarioTelefono;
      this.Eps = this.usu.Eps;
      this.Rol = this.usu.Rol;
      this.UsuarioCreated_at = this.usu.UsuarioCreated_at;

      this.epsList = data.map((item: any) => {
        return { EpsId: item.EpsId, EpsNombre: item.EpsNombre };
      });
    });
  }

  loadRolList() {
    this.service.getAllRolNombres().subscribe((data: any[]) => {
      this.rolList = data;

      this.UsuarioId = this.usu.UsuarioId;
      this.UsuarioNombre = this.usu.UsuarioNombre;
      this.UsuarioDocumento = this.usu.UsuarioDocumento;
      this.UsuarioPassword = this.usu.UsuarioPassword;
      this.UsuarioGenero = this.usu.UsuarioGenero;
      this.UsuarioEdad = this.usu.UsuarioEdad;
      this.UsuarioFecha_nacimiento = this.usu.UsuarioFecha_nacimiento;
      this.UsuarioTelefono = this.usu.UsuarioTelefono;
      this.Eps = this.usu.Eps;
      this.Rol = this.usu.Rol;
      this.UsuarioCreated_at = this.usu.UsuarioCreated_at;

      this.rolList = data.map((item: any) => {
        return { RolId: item.RolId, RolNombre: item.RolNombre };
      });
    });
  }

  addUsuario() {
    var val = {
      UsuarioId: this.UsuarioId,
      UsuarioNombre: this.UsuarioNombre,
      UsuarioDocumento: this.UsuarioDocumento,
      UsuarioPassword: this.UsuarioPassword,
      UsuarioGenero: this.UsuarioGenero,
      UsuarioEdad: this.UsuarioEdad,
      UsuarioFecha_nacimiento: this.UsuarioFecha_nacimiento,
      UsuarioTelefono: this.UsuarioTelefono,
      Eps: this.Eps,
      Rol: this.Rol,
      UsuarioCreated_at: this.UsuarioCreated_at,
    };

    this.service.addUsuario(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  updateUsuario() {
    var val = {
      UsuarioId: this.UsuarioId,
      UsuarioNombre: this.UsuarioNombre,
      UsuarioDocumento: this.UsuarioDocumento,
      UsuarioPassword: this.UsuarioPassword,
      UsuarioGenero: this.UsuarioGenero,
      UsuarioEdad: this.UsuarioEdad,
      UsuarioFecha_nacimiento: this.UsuarioFecha_nacimiento,
      UsuarioTelefono: this.UsuarioTelefono,
      Eps: this.Eps,
      Rol: this.Rol,
      UsuarioCreated_at: this.UsuarioCreated_at,
    };

    this.service.updateUsuario(val).subscribe((res) => {
      alert(res.toString());
    });
  }
}

/* export class AddEditUsuComponent implements OnInit {
  @Input() usu: any;
  UsuarioId: number | undefined;
  UsuarioNombre: string | undefined;
  UsuarioDocumento: string | undefined;
  UsuarioPassword: string | undefined;
  UsuarioGenero: string | undefined;
  UsuarioEdad: number | undefined;
  UsuarioFecha_nacimiento: string | undefined;
  UsuarioTelefono: string | undefined;
  Eps: string | undefined;
  Rol: string | undefined;
  UsuarioCreated_at: string | undefined;
  genres = [
    { id: 1, nombre: 'Masculino' },
    { id: 2, nombre: 'Femenino' },
    { id: 3, nombre: 'Otro' }
  ];
  epsList: any[] = [];
  rolList: any[] = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {
    this.loadEpsList();
    this.loadRolList();
  }

  loadEpsList() {
    this.service.getAllEpsNombres().subscribe((data: any[]) => {
      this.epsList = data;
      this.assignUserValues();
    });
  }

  loadRolList() {
    this.service.getAllRolNombres().subscribe((data: any[]) => {
      this.rolList = data;
      this.assignUserValues();
    });
  }

  assignUserValues() {
    if (this.usu) {
      this.UsuarioId = this.usu.UsuarioId;
      this.UsuarioNombre = this.usu.UsuarioNombre;
      this.UsuarioDocumento = this.usu.UsuarioDocumento;
      this.UsuarioPassword = this.usu.UsuarioPassword;
      this.UsuarioGenero = this.usu.UsuarioGenero;
      this.UsuarioEdad = this.usu.UsuarioEdad;
      this.UsuarioFecha_nacimiento = this.usu.UsuarioFecha_nacimiento;
      this.UsuarioTelefono = this.usu.UsuarioTelefono;
      this.Eps = this.usu.Eps;
      this.Rol = this.usu.Rol;
      this.UsuarioCreated_at = this.usu.UsuarioCreated_at;
    }
  }

  addUsuario() {
    const val = {
      UsuarioId: this.UsuarioId,
      UsuarioNombre: this.UsuarioNombre,
      UsuarioDocumento: this.UsuarioDocumento,
      UsuarioPassword: this.UsuarioPassword,
      UsuarioGenero: this.UsuarioGenero,
      UsuarioEdad: this.UsuarioEdad,
      UsuarioFecha_nacimiento: this.UsuarioFecha_nacimiento,
      UsuarioTelefono: this.UsuarioTelefono,
      Eps: this.Eps,
      Rol: this.Rol,
      UsuarioCreated_at: this.UsuarioCreated_at,
    };

    this.service.addUsuario(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  updateUsuario() {
    const val = {
      UsuarioId: this.UsuarioId,
      UsuarioNombre: this.UsuarioNombre,
      UsuarioDocumento: this.UsuarioDocumento,
      UsuarioPassword: this.UsuarioPassword,
      UsuarioGenero: this.UsuarioGenero,
      UsuarioEdad: this.UsuarioEdad,
      UsuarioFecha_nacimiento: this.UsuarioFecha_nacimiento,
      UsuarioTelefono: this.UsuarioTelefono,
      Eps: this.Eps,
      Rol: this.Rol,
      UsuarioCreated_at: this.UsuarioCreated_at,
    };

    this.service.updateUsuario(val).subscribe((res) => {
      alert(res.toString());
    });
  }
} */
