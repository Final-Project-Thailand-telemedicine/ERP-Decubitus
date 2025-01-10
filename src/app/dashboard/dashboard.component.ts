import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule} from '@angular/material/icon';
import { faCoffee, faDashboard } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TopWidgetsComponent } from '../top-widgets/top-widgets.component';
import { PatientNumbersComponent } from '../patient-numbers/patient-numbers.component';
import { WoundNumbersComponent } from '../wound-numbers/wound-numbers.component';
import { PatientDetailComponent } from '../patient-detail/patient-detail.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [MatIconModule , FontAwesomeModule,TopWidgetsComponent,PatientNumbersComponent,WoundNumbersComponent,PatientDetailComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  faDashboard = faDashboard;
  faCoffee = faCoffee;

}
