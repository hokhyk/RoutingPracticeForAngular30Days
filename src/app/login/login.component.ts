import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name = '';

  constructor(private router: Router,
    private route: ActivatedRoute // 注入當前路由
    ) { }

  ngOnInit() {
    // <!-- 使用 querystring URL notation 表示法 --> 获取参数
      // 第一種方式（較推薦）
      this.route.queryParams.subscribe((queryParams) => {
        console.log(queryParams['id']);
      });
      // 第二種方式
      console.log(this.route.snapshot.queryParams['id']);

  // <!-- 使用 matrix URL notation 表示法 -->获取参数 網址格式：http://localhost:4200/products;id=101
      // 第一種方式
      console.log(this.route.params['id']);
      // 第二種方式
      console.log(this.route.snapshot.params['id']);

  }

  /**
   * 按下登入的按鈕時會觸發的函式
   *
   * @memberof LoginComponent
   */
  login(): void {

    this.router.navigate([''], {
      queryParams: {
        name: this.name
      }
    });

    this.router.navigateByUrl('home');
    this.router.navigate(['home']);
    this.router.navigate(['..', 'home'], {
      relativeTo: this.route
  });

  // <!-- 使用 matrix URL notation 表示法 --> 網址格式：http://localhost:4200/products;id=101
  this.router.navigate(['products', { id: 101 }]);

  }

}
