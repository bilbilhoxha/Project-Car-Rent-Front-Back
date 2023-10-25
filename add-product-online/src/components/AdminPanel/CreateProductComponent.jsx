import React, { Component } from 'react';
import ProductService from '../../services/ProductService';

class CreateProductComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            productName: '',
            description: '',
            price: '',
        };

        this.changeProductNameHandler = this.changeProductNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.saveOrUpdateProduct = this.saveOrUpdateProduct.bind(this);
    }

    componentDidMount() {
        if (this.state.id === '_add') {
            // Initialize the state or set defaults for a new product.
            this.setState({
                productName: '',
                description: '',
                price: '',
            });
        } else {
            ProductService.getProductById(this.state.id).then((res) => {
                let product = res.data;
                this.setState({
                    productName: product.productName,
                    description: product.description,
                    price: product.price,
                });
            });
        }
    }

    saveOrUpdateProduct = (e) => {
        e.preventDefault();
        let product = {
            productName: this.state.productName,
            description: this.state.description,
            price: this.state.price,
        };

        if (this.state.id === '_add') {
            ProductService.createProduct(product).then((res) => {
                this.props.history.push('/products');
            });
        } else {
            // Pass the product ID as the first argument in the updateProduct function.
            ProductService.updateProduct(this.state.id, product).then((res) => {
                this.props.history.push('/products');
            });
        }
    };

    changeProductNameHandler = (event) => {
        this.setState({ productName: event.target.value });
    };

    changeDescriptionHandler = (event) => {
        this.setState({ description: event.target.value });
    };

    changePriceHandler = (event) => {
        this.setState({ price: event.target.value });
    };

    cancel() {
        this.props.history.push('/products');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Product</h3>;
        } else {
            return <h3 className="text-center">Update Product</h3>;
        }
    }

     
    
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {this.getTitle()}
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Product Name:</label>
                                        <input
                                            placeholder="Product Name"
                                            name="productName"
                                            className="form-control"
                                            value={this.state.productName}
                                            onChange={this.changeProductNameHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Description:</label>
                                        <input
                                            placeholder="Description"
                                            name="description"
                                            className="form-control"
                                            value={this.state.description}
                                            onChange={this.changeDescriptionHandler}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Price:</label>
                                        <input
                                            placeholder="Price"
                                            name="price"
                                            className="form-control"
                                            value={this.state.price}
                                            onChange={this.changePriceHandler}
                                        />
                                    </div>
                                    <button className="btn btn-success" onClick={this.saveOrUpdateProduct}>
                                        Save
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={this.cancel.bind(this)}
                                        style={{ marginLeft: "10px" }}
                                    >
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateProductComponent;
