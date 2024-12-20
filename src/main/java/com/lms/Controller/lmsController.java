package com.lms.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.lms.Entity.lmsEntity;
import com.lms.Repository.lmsRepository;


@RestController
@CrossOrigin(origins="http://localhost:4200/")
public class lmsController {
@Autowired
lmsRepository lms;

@GetMapping("/findAll")
public List<lmsEntity> fetch()
{
	return lms.findAll();
}

@GetMapping("/findById/{id}")
public ResponseEntity<lmsEntity> findById(@PathVariable Integer id) {
    Optional<lmsEntity> entity = lms.findById(id);

    if (entity.isPresent()) {
        return ResponseEntity.ok(entity.get());
    } else {
        return ResponseEntity.notFound().build();
    }
}

@PostMapping("/save")
public lmsEntity create(@RequestBody lmsEntity book )
{
	return lms.save(book);
}
@PutMapping("/update")
public String updateBook(@RequestBody lmsEntity book)
{
	Optional<lmsEntity> book1=lms.findById(book.getBook_id());
	if(book1.isPresent()) {
		book1.get().setBook_id(book.getBook_id());
		book1.get().setBook_name(book.getBook_name());
	    book1.get().setBook_author(book.getBook_author());
	    book1.get().setBook_edition(book.getBook_edition());	 
	    lms.save(book1.get());
	    return "Book updated";
	}
	return "Update failed";
}

@DeleteMapping("/bookDelete/{id}")
public ResponseEntity<String> delete(@PathVariable Integer id) {
	 lms.deleteById(id);
	 return new ResponseEntity<>("Book deleted successfully", HttpStatus.OK);
	 
	
}

@GetMapping("/findBook/{book_name}")
public ResponseEntity<List<lmsEntity>> searchByBookName(@PathVariable String book_name) {
    List<lmsEntity> books = lms.findByBookNameIgnoreCase(book_name);
    return new ResponseEntity<>(books, HttpStatus.OK);
}

//@GetMapping("/findBook")
//public ResponseEntity<List<lmsEntity>> searchByBookName(@RequestParam String book_name) {
//    List<lmsEntity> entities = lms.findByBookName(book_name);
//
//    if (!entities.isEmpty()) {
//        return ResponseEntity.ok(entities);
//    } else {
//        return ResponseEntity.notFound().build();
//    }
//}
//	return new ResponseEntity<List<lmsEntity>>(lms.findByBookName(book_name), HttpStatus.OK);
//
//}

//@GetMapping("/search/{bookname}")
//public ResponseEntity<List<lmsEntity>> searchByBookName(@RequestParam String bookName) {
//    List<lmsEntity> books = lms.findByBookName(bookName);
//
//    if (!books.isEmpty()) {
//        return ResponseEntity.ok(books);
//    } else {
//        return ResponseEntity.notFound().build();
//    }

}
