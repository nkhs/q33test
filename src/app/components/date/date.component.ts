import { Component } from "@angular/core";

@Component({
  selector: "date",
  templateUrl: "./date.component.html",
  styleUrls: ["./date.component.css"]
})
export class DateComponent {
  dayOfWeek: string;
  dateOfDay: number;
  month: string;
  year: number;

  ngOnInit(): void {
    const d = new Date();

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const monthsOfYear = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    this.year = d.getFullYear();
    this.dayOfWeek = daysOfWeek[d.getDay()];
    this.dateOfDay = d.getDate();
    this.month = monthsOfYear[d.getMonth()];
  }
}
