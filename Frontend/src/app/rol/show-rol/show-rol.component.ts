import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-rol',
  templateUrl: './show-rol.component.html',
  // styleUrls: ['./show-rol.component.css']
})
export class ShowRolComponent {
  constructor(private service: SharedService) { }
  RolList: any = [];
  ModalTitle: string | undefined;
  ActivateAddEditRolComp: boolean = false;
  rol: any;

  ngOnInit(): void {
    this.refreshRolList();
  }

  refreshRolList() {
    this.service.getRolList().subscribe((data) => {
      this.RolList = data;
    });
  }

  addClick() {
    this.rol = {
      RolId: 0,
      RolNombre: '',
    };
    this.ModalTitle = 'Agregar Rol';
    this.ActivateAddEditRolComp = true;
  }

  editClick(item: any) {
    this.rol = item;
    this.ModalTitle = 'Editar Rol';
    this.ActivateAddEditRolComp = true;
  }

  deleteClick(item: any) {
    if (confirm('¿¿Está seguro??')) {
      this.service.deleteRol(item.RolId).subscribe((data) => {
        alert(data.toString());
        this.refreshRolList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditRolComp = false;
    this.refreshRolList();
  }
}
