import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-rol',
  templateUrl: './add-edit-rol.component.html',
  // styleUrls: ['./add-edit-rol.component.css']
})
export class AddEditRolComponent {
  constructor(private service: SharedService) { }

  @Input()
  rol: any;
  RolId: number | undefined;
  RolNombre: string | undefined;

  ngOnInit(): void {
    this.RolId = this.rol.RolId;
    this.RolNombre = this.rol.RolNombre;
  }

  addRol() {
    var val = {
      RolId: this.RolId,
      RolNombre: this.RolNombre,
    };
    this.service.addRol(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  updateRol() {
    var val = {
      RolId: this.RolId,
      RolNombre: this.RolNombre,
    };
    this.service.updateRol(val).subscribe((res) => {
      alert(res.toString());
    });
  }
}
