import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule} from '@angular/material/icon';




@Component({
  selector: 'app-table',
  standalone: true,
  imports: [MatIconModule,MatDialogModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {

}
