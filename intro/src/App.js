import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import { Container, Row } from 'reactstrap';
import Navi from './Navi';
import CategoryList from './CategoryList';
import ProdouctList from './ProdouctList';
import { Col } from 'reactstrap'


export default class App extends Component {

  state = { currentCategory: "" }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName })
  }

  render() {
    let productInfo = { title: "Ürün Listesi" };
    let categoryInfo = { title: "Katagori Listesi" };
    return (
      <div>
        <Container>
          <Row>
            <Navi title="Navigation Bar" />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProdouctList currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}