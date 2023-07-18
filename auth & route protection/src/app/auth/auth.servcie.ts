import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

//dane zwracane przez firebase
interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAosLQqnEdW8H5k4v8GzzWMVavpTsSSGII",
      //dane wymagane do uwierzytelnienia w firebase poprzez hasło i email
      { email, password, returnSecureToken: true }
    );
  }
}
