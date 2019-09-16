import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export default class AuthService {
    user: Observable<firebase.User>;
    authenticatedUser: firebase.User;
    constructor(private afAuth: AngularFireAuth, private router: Router) {
        this.user = afAuth.authState;
    }

    get currentUserId(): string {
        return this.authenticatedUser !== null ? this.authenticatedUser.uid : '';
    }


    loign(email: string, passwrod: string) {
        this.afAuth.auth.signInWithEmailAndPassword(email, passwrod)
            .then(_ => {
                this.authenticatedUser = _.user;
                this.router.navigate(['booking']);
            });
    }

    logout() {
        this.afAuth.auth.signOut()
            .then(_ => {
                this.router.navigate(['login']);
            });
    }
}
