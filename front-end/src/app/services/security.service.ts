import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class SecurityService {
    isLogged = false;
    isStudent = false;
    loggedName = "";
    logCount = 0;
    error = "";
    studentFormation = 0;
    baseUrl = 'http://localhost:8000';

    constructor(private http: HttpClient) {
    }

    connect(email) {
        this.http.get<any>(this.baseUrl + "/connect?email=" + email)
            .subscribe(data => {
                if (data.isLogged) {
                    this.isStudent = data.isStudent;
                    this.loggedName = `${data.data.firstName} ${data.data.lastName}`;
                    this.studentFormation = data.data.formation;
                    this.isLogged = true;
                    this.error = "";
                } else {
                    this.error = "Utilisateur inconnu";
                }
            });
    }

    disconnect() {
        this.isLogged = false;
        this.isStudent = false;
        this.error = "";
    }
}
