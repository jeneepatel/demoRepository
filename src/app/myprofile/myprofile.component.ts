import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {

  public modules : any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    // this.http.get<any>('http://localhost:3000').subscribe(data => {
    //   this.modules=data.modules;
    // })

    this.modules={modules: [
      {
        module: "alert",
      },
      {
        module: "updatenotification",
        position: "top_bar"
      },
      {
        module: "clock",
        position: "top_left"
      },
      {
        module: "calendar",
        header: "US Holidays",
        position: "top_left",
        config: {
          calendars: [
            {
              symbol: "calendar-check",
              url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"					}
          ]
        }
      },
      {
        module: "compliments",
        position: "lower_third"
      },
      {
        module: "currentweather",
        position: "top_right",
        config: {
          location: "New York",
          locationID: "",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
          appid: "YOUR_OPENWEATHER_API_KEY"
        }
      },
      {
        module: "weatherforecast",
        position: "top_right",
        header: "Weather Forecast",
        config: {
          location: "New York",
          locationID: "5128581",  //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
          appid: "YOUR_OPENWEATHER_API_KEY"
        }
      },
      {
        module: "newsfeed",
        position: "bottom_bar",
        config: {
          feeds: [
            {
              title: "New York Times",
              url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
            }
          ],
          showSourceTitle: true,
          showPublishDate: true,
          broadcastNewsFeeds: true,
          broadcastNewsUpdates: true
        }
      },
    ]};
  }

}
