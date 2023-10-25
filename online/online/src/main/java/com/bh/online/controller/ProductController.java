// ProductController.java
package com.bh.online.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.bh.online.dto.ProductDto;
import com.bh.online.exception.ProductNotFoundException;
import com.bh.online.model.Product;
import com.bh.online.repository.ProductRepository;
import java.util.HashMap;
import java.util.stream.Collectors;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    // GET: Get all products
    @GetMapping
    public List<ProductDto> getAllProducts() {
        List<Product> products = productRepository.findAll();
        List<ProductDto> productDtos = convertToProductDtoList(products); // Updated variable name
        return productDtos;
    }

    // POST: Create a product
    @PostMapping
    public ProductDto createProduct(@RequestBody ProductDto productDto) {
        Product product = convertToProduct(productDto);
        Product savedProduct = productRepository.save(product);
        return convertToProductDto(savedProduct);
    }

    // GET: Get a product by ID
    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));
        ProductDto productDTO = convertToProductDto(product);
        return ResponseEntity.ok(productDTO);
    }

    // PUT: Update a product
    @PutMapping("/{id}")
    public ResponseEntity<ProductDto> updateProduct(@PathVariable Long id, @RequestBody ProductDto productDTO) {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));

        // Update the fields of the existing product with values from the DTO
        existingProduct.setProductName(productDTO.getProductName());
        existingProduct.setDescription(productDTO.getDescription());
        existingProduct.setPrice(productDTO.getPrice());

        Product updatedProduct = productRepository.save(existingProduct);
        ProductDto updatedProductDto = convertToProductDto(updatedProduct);
        return ResponseEntity.ok(updatedProductDto);
    }

    // DELETE: Delete a product by ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));

        productRepository.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }


    //convertToProductDto(Product product): This method takes a Product entity and converts it into a ProductDto.
    private ProductDto convertToProductDto(Product product) {
        ProductDto productDTO = new ProductDto();
        productDTO.setId(product.getId());
        productDTO.setProductName(product.getProductName());
        productDTO.setDescription(product.getDescription());
        productDTO.setPrice(product.getPrice());
        return productDTO;
    }

    //convertToProductDtoList(List<Product> products): This method takes a list of

    //Product entities and maps them to a list of ProductDto using the convertToProductDto() method.
    private List<ProductDto> convertToProductDtoList(List<Product> products) {
        return products.stream()
                .map(this::convertToProductDto)
                .collect(Collectors.toList());
    }


    //convertToProduct(ProductDto productDto): This method takes a ProductDto and converts it into a Product entity,
    //which can be persisted in the database.

    private Product convertToProduct(ProductDto productDto) {
        Product product = new Product();
        product.setProductName(productDto.getProductName());
        product.setDescription(productDto.getDescription());
        product.setPrice(productDto.getPrice());
        return product;
    }
}
