import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './post.model';
import { catchError, map } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

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
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');

    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-complete-guide-2d4c2-default-rtdb.europe-west1.firebasedatabase.app/posts.json',
        {
          //w ten sposób można rozpisać dowolne nagłówki
          headers: new HttpHeaders({
            'Custom-Header': 'Hello',
          }),
          params: searchParams,
        }
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
        }),
        //po ohandlowaniu ten operator również potrzebuje dotrzeć do subscribe
        //w związku z czym potrzenuje wrapera w postaci observable tzn. throwError
        catchError((errorRes) => {
          //Send to analytics server
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      'https://ng-complete-guide-2d4c2-default-rtdb.europe-west1.firebasedatabase.app/posts.json'
    );
  }
}
