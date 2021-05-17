import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

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
                this.currentClasses = data.data;
        });
    }
}
