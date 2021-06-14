import { Injectable } from '@angular/core';
import { Auth } from "aws-amplify";
import { CognitoUser } from 'amazon-cognito-identity-js';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _user: CognitoUser;

  constructor() { }

  public async getUser(): Promise<CognitoUser> {
    if (!this._user) {
      this._user = await Auth.currentAuthenticatedUser();
    }
    return this._user;
  }

  public async signOut() {
    await Auth.signOut();
  }
}
