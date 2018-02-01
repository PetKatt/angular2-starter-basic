import { Injectable } from "@angular/core";
import { Router, Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { UserService } from "../shared/services/user.service";
import { User } from "../shared/models/user";

@Injectable()
export class AboutUserResolve implements Resolve<User> {

	constructor(private service: UserService, private router: Router) {}

	resolve(route: ActivatedRouteSnapshot){
		let username = route.params["username"];
		return this.service.getUser(username).then(user => {
			if (user) {
				return user;
			} else {
				// navigate the user back to the about page
				this.router.navigate(["/about"]);
				
			}
		});
	}
}