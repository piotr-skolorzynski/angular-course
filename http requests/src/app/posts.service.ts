import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

//można też klasycznie zarejestrować w app.module providers
@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title, content };
    this.http
      .post<{ name: string }>(
        'https://ng-complete-guide-2d4c2-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        postData
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    //to co zwracamy jest observable więc w komponencie trzeba się zasubskrybować
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-2d4c2-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map((responseData) => {
          const postsArray = [] as Post[];

          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({
                ...responseData[key],
                id: key,
              });
            }
          }

          return postsArray;
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      'https://ng-complete-guide-2d4c2-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
    );
  }
}
