import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "@environments/environment"
import { Label } from 'src/app/shared/models/label.model';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Label[]> {
    return this.http.get<Label[]>(`${environment.apiUrl}/labels`);
  }
  
  create(label: Label): void {
    this.http.post(`${environment}/label`, label);
  }

}
