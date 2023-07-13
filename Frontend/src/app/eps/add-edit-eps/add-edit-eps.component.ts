import { Component, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-eps',
  templateUrl: './add-edit-eps.component.html',
  // styleUrls: ['./add-edit-eps.component.css']
})
export class AddEditEpsComponent {

  constructor(private service: SharedService) { }

  @Input()
  eps: any;
  EpsId: number | undefined;
  EpsNombre: string | undefined;

  ngOnInit(): void {
    this.EpsId = this.eps.EpsId;
    this.EpsNombre = this.eps.EpsNombre;
  }

  addEps() {
    var val = {
      EpsId: this.EpsId,
      EpsNombre: this.EpsNombre,
    };
    this.service.addEps(val).subscribe((res) => {
      alert(res.toString());
    });
  }

  updateEps() {
    var val = {
      EpsId: this.EpsId,
      EpsNombre: this.EpsNombre,
    };
    this.service.updateEps(val).subscribe((res) => {
      alert(res.toString());
    });
  }
}
