import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-usu',
  templateUrl: './show-usu.component.html',
  // styleUrls: ['./show-usu.component.css']
})
export class ShowUsuComponent implements OnInit {
  constructor(private service: SharedService) { }

  UsuarioList: any = [];
  ModalTitle: string | undefined;
  ActivateAddEditUsuComp: boolean = false;
  usu: any;

  ngOnInit(): void {
    this.refreshUsuList();
  }

  addClick() {
    this.usu = {
      UsuarioId: 0,
      UsuarioNombre: '',
      UsuarioDocumento: '',
      UsuarioPassword: '',
      UsuarioGenero: '',
      UsuarioEdad: '',
      UsuarioFecha_nacimiento: '',
      UsuarioTelefono: '',
      Eps: '',
      Rol: '',
      // UsuarioCreated_at: '',
    };
    this.ModalTitle = 'Agregar Usuario';
    this.ActivateAddEditUsuComp = true;
  }

  editClick(item: any) {
    this.usu = item;
    console.log(this.usu);
    this.ModalTitle = 'Editar Usuario';
    this.ActivateAddEditUsuComp = true;
  }

  deleteClick(item: { UsuarioId: any }) {
    if (confirm('¿¿Está seguro??')) {
      this.service.deleteUsuario(item.UsuarioId).subscribe((data) => {
        alert(data.toString());
        this.refreshUsuList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditUsuComp = false;
    this.refreshUsuList();
  }

  refreshUsuList() {
    this.service.getUsuarioList().subscribe((data) => {
      this.UsuarioList = data;
    });
  }
}
