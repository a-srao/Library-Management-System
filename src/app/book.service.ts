import { Injectable } from '@angular/core';
import { Book } from './book';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseurl='http://localhost:8090';
  constructor(private http:HttpClient,
    private router: Router
    ) { }

  getBookList():Observable<Book[]>{
    return this.http.get<Book[]>(`${this.baseurl}/findAll`);
  }
 
  

  createBook(book :Book):Observable<object>{
return this.http.post(`${this.baseurl}/save`,book)
  }

  getBookById(id: number): Observable<Book> {
    const url = `${this.baseurl}/findById/${id}`;
    return this.http.get<Book>(url);
  }

  updateBook(id: number, book: Book): Observable<any> {
    const url = `${this.baseurl}/update`;
    return this.http.put(url, book);
  }

  deleteBook(id:number):Observable<any>{
    return this.http.delete(`${this.baseurl}/bookDelete/${id}`);
  }

  searchBook(name:string):Observable<any>{
    return this.http.get<Book>(`${this.baseurl}/findBook/${name}`);
  }
}
