import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  public gname: any;
  public result: any;
  public loading: any = true;
  public errorMessage: any;
  public styl: any;
  public hits:any;

  constructor(private userService: UserService,private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.loading = false;
    this.userService.gname$.subscribe(newGroceryname => this.gname = newGroceryname);
    console.log(this.gname)
    this.userService.getRecipe(this.gname).subscribe({
      next: (res) =>{
        console.log(res);
        this.result = res;
        this.hits=this.result.hits;
        // console.log(this.hits);
        
        // this.temperature = this.myWeather.main.temp;
        // this.minTemp =this.myWeather.main.temp_min;
        // this.maxTemp =this.myWeather.main.temp_max;
        // this.wind =this.myWeather.wind.speed;
        // this.humidity =this.myWeather.main.humidity;
      },
    
      error: (error) => console.log(error.message),
    
      complete: () => console.log('API call completed')
    })
  }


  setMessage(msg: any, color: any) {
    this.errorMessage = msg;
    this.styl = {
      backgroundColor: color,
    }
    setTimeout(() => {
      this.errorMessage = null;
    }, 4000);
  }
}
