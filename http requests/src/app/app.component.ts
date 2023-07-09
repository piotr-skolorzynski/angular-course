import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs-compat/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  private postsURL =
    'https://ng-complete-guide-2d4c2-default-rtdb.europe-west1.firebasedatabase.app/posts.json';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.http.post(this.postsURL, postData).subscribe((responseData) => {
      console.log(responseData);
    });
  }

  onFetchPosts() {
    this.fetchPosts();
  }

  onClearPosts() {
    // Send Http request
  }

  private fetchPosts() {
    this.http
      .get(this.postsURL)
      .pipe(
        map((responeData) => {
          const postsArray = [];

          for (const key in responeData) {
            if (responeData.hasOwnProperty(key)) {
              postsArray.push({
                ...responeData[key],
                id: key,
              });
            }
          }

          return postsArray;
        })
      )
      .subscribe((posts) => {
        console.log(posts);
      });
  }
}
