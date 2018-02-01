import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { UserService } from "../shared/services/user.service";
import { User } from "../shared/models/user";

@Injectable()
export class AboutUsersResolve implements Resolve<User[]> {

	constructor(private service: UserService) {}

	resolve(route: ActivatedRouteSnapshot){
		return this.service.getUsers().then(users => users);
	}
}