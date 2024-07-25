package com.lms.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.lms.Entity.lmsEntity;

@Repository
public interface lmsRepository extends JpaRepository<lmsEntity, Integer> {
List<lmsEntity> findAll();
@Query("SELECT e FROM lmsEntity e WHERE e.book_name = :bookName")
List<lmsEntity> findByBookNameIgnoreCase(@Param("bookName")String book_name);


}
