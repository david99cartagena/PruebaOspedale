import { Component } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-eps',
  templateUrl: './show-eps.component.html',
  // styleUrls: ['./show-eps.component.css']
})
export class ShowEpsComponent {
  constructor(private service: SharedService) { }

  EpsList: any = [];
  ModalTitle: string | undefined;
  ActivateAddEditEpsComp: boolean = false;
  eps: any;

  ngOnInit(): void {
    this.refreshEpsList();
  }

  refreshEpsList() {
    this.service.getEpsList().subscribe((data) => {
      this.EpsList = data;
    });
  }

  addClick() {
    this.eps = {
      EpsId: 0,
      EpsNombre: '',
    };
    this.ModalTitle = 'Agregar Eps';
    this.ActivateAddEditEpsComp = true;
  }

  editClick(item: any) {
    this.eps = item;
    this.ModalTitle = 'Editar Eps';
    this.ActivateAddEditEpsComp = true;
  }

  deleteClick(item: any) {
    if (confirm('¿¿Está seguro??')) {
      this.service.deleteEps(item.EpsId).subscribe((data) => {
        alert(data.toString());
        this.refreshEpsList();
      });
    }
  }

  closeClick() {
    this.ActivateAddEditEpsComp = false;
    this.refreshEpsList();
  }
}
