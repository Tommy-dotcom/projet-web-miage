import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Cours} from "../classes/classe";

@Injectable()
export class CalendarService {
    currentSelection = null;
    currentClasses = [];
    baseUrl = 'http://localhost:8000';

    constructor(private http: HttpClient) {
    }

    fetchCurrentClasses() {
        this.http.get<any>(this.baseUrl + "/classe/formation/" + this.currentSelection)
            .subscribe(data => {
                this.currentClasses = [];

                data.data.forEach(e => {
                    let cours = new Cours();
                    cours.classeType = e.classeType;
                    cours.title = e.title;
                    cours.happen_at = e.happen_at;
                    cours.duration = e.duration;
                    cours.creatorFirstName = e.creatorFirstName;
                    cours.creatorLastName = e.creatorLastName;
                    cours.modalityName = e.modalityName;

                    this.currentClasses.push(cours);
                });
        });
    }
}
