import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import autoBind from '../utils/auto-bind';
import * as productActions from '../../actions/product-actions';
import data from '../../data/data';
import HomeSVG from '../../assets/icomoon/SVG/home.svg';
import ChartSVG from '../../assets/icomoon/SVG/stats-bars.svg';

import './dashboard.scss';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: data[0],
    };

    autoBind.call(this, Dashboard);
  }

  componentDidMount() {
    const selected = this.props.productCreate(data);
    this.setState({
      selectedProduct: selected[0],
    });
  }

  handleTablePopulate(sales) {
    return sales.map((sale) => {
      return (
      <tr key={sale.id} className='sales-row'>
        <td>{sale.weekEnding}</td>
        <td>{`$${sale.retailSales}`}</td>
        <td>{`$${sale.wholesaleSales}`}</td>
        <td>{sale.unitsSold}</td>
        <td>{`$${sale.retailerMargin}`}</td>
      </tr>
      );
    });
  }

  render() {
    const { selectedProduct } = this.state;

    return (
      <div className='dashboard'>
        <div className='content-wrapper'>
          <aside className='panel'>
            <div className='product-info'>
              <figure className='product-figure'>
                <img src={selectedProduct.image}/>
                <h2>{selectedProduct.title}</h2>
                <figcaption className='caption'>
                  {selectedProduct.subtitle}
                </figcaption>
              </figure>
              <div className='list-wrapper'>
                <ul className='tags-list'>
                  { selectedProduct.tags.map(tag => <li className='tag' key={tag}>{tag}</li>) }
                </ul>
              </div>
              <nav className='panel-nav'>
                <ul>
                  <li>
                    <Link to='/'>
                      <HomeSVG className='icomoon-svgs'></HomeSVG>   OVERVIEW
                    </Link>
                  </li>
                  <li>
                    <Link to='/'>
                      <ChartSVG className='icomoon-svgs'></ChartSVG>   SALES
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </aside>
          <table className='sales-table'>
            <tbody>
              <tr className='header-row'>
                <th>WEEK ENDING</th>
                <th>RETAIL SALES</th>
                <th>WHOLESALE SALES</th>
                <th>UNITS SOLD</th>
                <th>RETAILER MARGIN</th>
              </tr>
              { this.handleTablePopulate(selectedProduct.sales) }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  productCreate: PropTypes.func,
  products: PropTypes.array,
};

const mapStateToProps = state => ({
  products: state.products,
});

const mapDispatchToProps = dispatch => ({
  productCreate: product => dispatch(productActions.productCreateRequest(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
