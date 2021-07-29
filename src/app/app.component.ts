import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwa-serves-worker';

  posts: any = [];

  constructor(private postsService: PostsService) {
  }

  ngOnInit() {
    this.getPosts()
  }

  getPosts() {
    this.postsService.getPosts().subscribe((res) => {
      this.posts = res;
    })
  }
}
