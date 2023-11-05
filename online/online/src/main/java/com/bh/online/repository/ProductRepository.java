package com.bh.online.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.bh.online.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

}
