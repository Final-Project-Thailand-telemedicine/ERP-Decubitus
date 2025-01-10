import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-patient-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.scss']
})
export class PatientDetailComponent {
  transactions = [
    {
      id: 1,
      name: "สรวิชญ์ เลยวานิชย์เจริญ",
      position: "ก้น",
      wound: "แผลกดทับระดับที่ 3",
      status: "รอการตรวจจากผู้เชี่ยวชาญ"
    },
    {
      id: 2,
      name: "สรวิชญ์ เลยวานิชย์เจริญ",
      position: "ก้น",
      wound: "แผลกดทับระดับที่ 3",
      status: "ผ่านการตรวจเรียบร้อย"
    },
    {
      id: 3,
      name: "สรวิชญ์ เลยวานิชย์เจริญ",
      position: "ก้น",
      wound: "แผลกดทับระดับที่ 3",
      status: "รอการตรวจจากผู้เชี่ยวชาญ"
    }
  ];

}
