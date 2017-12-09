import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    template: `
        <div class="jumbotron">
            <div *ngIf="user">
                <h2>{{user.name}}</h2>
            

                <div class="form-group">
                    <input type="text" [(ngModel)]="editName" class="form-control">
                </div>

                <div class="form-group text-center">
                    <button (click)="cancel()" class="btn btn-danger">Cancel</button>
                    <button (click)="save()" class="btn btn-success">Save</button>
                </div>
            </div>
        </div>
    `
})

export class DashboardUserDetailsComponent implements OnInit{
    user: User;
    editName: string;

    constructor(private service: UserService, 
                private route: ActivatedRoute,
                private router: Router) {}

    ngOnInit(){
        
        this.route.params.forEach(params => {
            let username = params['username'];

            this.service.getUser(username).then(user => {
                console.log(user);
                this.user = user;
                this.editName = user.name;
            });
        });
    }

    save(){
        this.user.name = this.editName;
        this.router.navigate(['/dashboard/users']);
    }

    cancel(){
        this.router.navigate(['/dashboard/users']);
    }
}