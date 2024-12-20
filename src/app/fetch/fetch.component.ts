// import { Component } from '@angular/core';
// import { Book } from '../book';
// import { BookService } from '../book.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-fetch',
//   templateUrl: './fetch.component.html',
//   styleUrls: ['./fetch.component.css']
// })
// export class FetchComponent {
// book:Book[];
// // book: Book = new Book(); 
// searchQuery: string = ''; 

// constructor(private books:BookService,
//    private router:Router){}
// ngOnInit():void{
// this.getBookList();
// }
// private getBookList(){
//        this.books.getBookList().subscribe(data=>{
//          this.book=data;
//       })
//      }

//      updateBook(id:number){
//       this.router.navigate(['/update',id]);
//      }

//      deleteBook(id:number)
//      {
//       this.books.deleteBook(id).subscribe(data=>{
//         this.book=data;
//      })
//     }

//     // navigateToSearch(name: string) {
//     //   this.books.searchBook(name).subscribe(data => {
//     //     this.book = data;
//     //     this.router.navigate(['/search']); 
//     //   });
//     // }
//     onSearch() {
//       if (this.searchQuery.trim() !== '') {
//         this.books.searchBook(this.searchQuery).subscribe((data) => {
//           this.books = data;
//         });
//       } else {
        
//         this.loadAllBooks();
//       }
//     }

//     loadAllBooks() {
//       this.books.getBookList().subscribe((data) => {
//         this.books = data;
//       });
//     }
    
// }
import { Component } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';
import { Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';

@Component({
  selector: 'app-fetch',
  templateUrl: './fetch.component.html',
  styleUrls: ['./fetch.component.css']
})
export class FetchComponent {
  books: Book[]; 
  searchResults: Book[]; 
  searchQuery: string = '';

  constructor(private booksService: BookService, private router: Router,
    private confirmService:NgConfirmService) {}

  ngOnInit(): void {
    this.loadAllBooks();
  }

  private loadAllBooks() {
    this.booksService.getBookList().subscribe((data) => {
      this.books = data;
    });
  }

  updateBook(id: number) {
    this.router.navigate(['/update', id]);
  }

  deleteBook(id: number) {
    this.confirmService.showConfirm("Are You sure to delete book ?",
    ()=>{
      this.booksService.deleteBook(id).subscribe((data) => {
        this.loadAllBooks(); 
      })
    },
    () => {
      alert("Book deletion Cancelled!")
    })
   
  }
  //   //if(confirm('Are you sure to delete record?'))
  //   this.confirmService.showConfirm("Are you sure to delete record?",
  //     () => {
  //       this.bookService.deleteBook(id).subscribe(data => {
  //         console.log(data);
  //         this.getBooks();
  //       })
  //     },
  //     () => {
  //       alert("Cancelled delete service")
  //     }
  //   )
  // }
  // onSearch() {
  //   if (this.searchQuery.trim() !== '') {
  //     this.booksService.searchBook(this.searchQuery).subscribe((data) => {
  //       this.searchResults = data; 
  //     });
  //   } else {
  //     this.loadAllBooks(); 
  //   }
  // }
  onSearch() {
    if (this.searchQuery.trim() !== '') {
      this.booksService.searchBook(this.searchQuery).subscribe(
        (data) => {
          this.books = data; 
        },
        (error) => {
          console.error('Error searching for books:', error);
        }
      );
    } else {
      this.loadAllBooks();
    }
  }
}
