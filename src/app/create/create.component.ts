import { Component } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
constructor(private books:BookService,
  private router: Router){}
newBook:Book=new Book();
 ngOnInit():void{

 }

 saveBook() {
  this.books.createBook(this.newBook).subscribe(
    data => {
      console.log(data);
    },
    error => {
      console.log(error);
    }
  );
}

onSubmit() {
  console.log(this.newBook); 
  this.saveBook();
  this.router.navigate(['/fetch']);
}

// navigateToFetchPage() {
//   this.router.navigate(['/fetch']);
// }
}
