
import { BookService } from '../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../book';
import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent  {
  id: number;
  book: Book = new Book(); 

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];

 
    this.bookService.getBookById(this.id).subscribe((data: Book) => {
      this.book = data;
    });
  }

  onSubmit() {
    console.log(this.book); 

    
    this.bookService.updateBook(this.id, this.book).subscribe(
      (data) => {
        console.log(data); 
        this.router.navigate(['/books']);
      },
      (error) => {
        console.error(error); 
     
      }
    );
    this.router.navigate(['/fetch']);
  }

 
   
  
}
