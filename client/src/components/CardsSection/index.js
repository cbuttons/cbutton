import React, { Component } from "react";

import SearchIcon from "@material-ui/icons/Search";
import { InputBase, Button, Snackbar, Typography } from "@material-ui/core";
import CardMaterial from "@material-ui/core/Card";

import Card from "./Card";
import "./cardsSection.css";
import "./PrimeryButton/button.css";
import PrimeryButton from "./PrimeryButton";
import { withFirebase } from "../../containers/Firebase";
import parse from 'html-react-parser';

class CardSection extends Component {
  state = {
    searchValue: [],
    rerender: true,
    allData: [],
    openSnackBar: false,
    // mb:
    // {

    // }
  };

  componentDidMount() {
    const dataArr = [];

    this.props.firebase.db
      .collection("chariyData")
      .get()
      .then(snapshot => {
        snapshot.forEach(doc => {
          console.log(doc.data());
          dataArr.push(doc.data());
        });
      })
      .then(() => {
        this.setState({
          allData: dataArr,
          searchValue: dataArr.map(ele => ele.id)
        });
      })
      .catch(err => {
        console.log("Error getting documents", err);
      });
  }

  addToBtn = () => {
    this.setState({ rerender: true });
  };

  handleClick = async () => {
    this.setState({
      openSnackBar: true
    });
  };

  handleClose = async () => {
    this.setState({
      openSnackBar: false
    });
  };
  render() {
    const {
      state: { searchValue, allData, mb}
    } = this;

    return (
      <div className="cards-container">
        <section className="card-container__search-section">
          <SearchIcon className="card-container__search-section-icon" />
          <InputBase
            className="card-container__search-section-input"
            placeholder="Search thousands of charities"
            onChange={e => {
              this.setState({
                searchValue: allData
                  .filter(ele =>
                    ele.head
                      .toLowerCase()
                      .startsWith(e.target.value.toLowerCase())
                  )
                  .map(({ id }) => id)
              });
              // var par = parse(ele.code)
              // this.setState({to:par.props.data-to })
              // console.log(par)
            }}
          />
        </section>
        {allData.map(
          (ele, index) =>
            searchValue.includes(ele.id) && (
              <Card
                icon={ele.icon}
                head={ele.head}
                text={ele.text}
                id={ele.id}
                code={ele.code}
                key={index}
                addToBtn={this.addToBtn}
                allData={allData}
                openSnackBar={this.state.openSnackBar}
                code={ele.code}
                mb_to={ele.mb_to}
                mb_amount={ele.mb_amount}
                mb_buttonData={ele.mb_buttonData}
                mb_buttonID={ele.mb_buttonID}
                mb_clientID={ele.mb_clientID}
                mb_currency={ele.mb_currency}
                mb_label={ele.mb_label}
                mb_to={ele.mb_to}
                mb_type={ele.mb_type}
              />
            )
        )}
        <PrimeryButton
          addToBtn={this.addToBtn}
          handleClickPrimery={this.handleClick}
          handleClosePrimery={this.handleClose}
        />
      </div>
    );
  }
}

const FirebaseCardSection = withFirebase(CardSection);

export default FirebaseCardSection;
