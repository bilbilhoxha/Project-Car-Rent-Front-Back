
package com.bh.online.service;

import com.bh.online.dto.ProductDto;
import com.bh.online.exception.ProductNotFoundException;
import com.bh.online.entity.Product;
import com.bh.online.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    public List<ProductDto> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return convertToProductDtoList(products);
    }

    public ProductDto createProduct(ProductDto productDto) {
        Product product = convertToProduct(productDto);
        Product savedProduct = productRepository.save(product);
        return convertToProductDto(savedProduct);
    }

    public ProductDto getProductById(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));
        return convertToProductDto(product);
    }

    public ProductDto updateProduct(Long id, ProductDto productDTO) {
        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));

        existingProduct.setProductName(productDTO.getProductName());
        existingProduct.setDescription(productDTO.getDescription());
        existingProduct.setPrice(productDTO.getPrice());

        Product updatedProduct = productRepository.save(existingProduct);
        return convertToProductDto(updatedProduct);
    }

    public void deleteProduct(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product not found with id: " + id));
        productRepository.delete(product);
    }

    private ProductDto convertToProductDto(Product product) {
        ProductDto productDTO = new ProductDto();
        productDTO.setId(product.getId());
        productDTO.setProductName(product.getProductName());
        productDTO.setDescription(product.getDescription());
        productDTO.setPrice(product.getPrice());
        return productDTO;
    }

    private List<ProductDto> convertToProductDtoList(List<Product> products) {
        return products.stream()
                .map(this::convertToProductDto)
                .collect(Collectors.toList());
    }

    private Product convertToProduct(ProductDto productDto) {
        Product product = new Product();
        product.setProductName(productDto.getProductName());
        product.setDescription(productDto.getDescription());
        product.setPrice(productDto.getPrice());
        return product;
    }
}
