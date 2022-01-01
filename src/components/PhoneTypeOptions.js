import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import AddIcon from "@material-ui/icons/Add";
import { blue } from "@material-ui/core/colors";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { BookContext } from "../context/books";
import styled from "styled-components";
import Product from "./Product";
import { mobile } from "../responsive";

const PhoneTypes = [
  "iPhone11",
  "iPhone11 Pro",
  "iPhone11 Pro Max",
  "iPhone12",
  "iPhone12 Pro",
  "iPhone12 Pro Max",
  "iPhone12 Mini",
  "iPhone13",
  "iPhone13 Pro",
  "iPhone13 Pro Max",
  "iPhone13 Mini",
];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select Your Phone Type</DialogTitle>
      <List sx={{ pt: 0 }}>
        {PhoneTypes.map((phonetype) => (
          <ListItem
            button
            onClick={() => handleListItemClick(phonetype)}
            key={phonetype}
          >
            <ListItemAvatar>
              <Avatar>
                <img
                  src={require("../assets/iphone-icon.png")}
                  style={{
                    maxHeight: "30px",
                  }}
                />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={phonetype} />
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

const Books = () => {
  //Dialog section
  //
  const [open, setOpen] = React.useState(true);
  const [selectedValue, setSelectedValue] = React.useState(PhoneTypes[0]);
  const [phonetype, setPhonetype] = useState(PhoneTypes[0]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    console.log(value);

    setOpen(false);
    if (value === "iPhone11") {
      setSelectedValue("iphone11");
      setPhonetype(value);
    } else if (value === "iPhone11 Pro Max") {
      setSelectedValue("iphone11promax");
      setPhonetype(value);
    } else if (value === "iPhone11 Pro") {
      setSelectedValue("iphone11pro");
      setPhonetype(value);
    } else if (value === "iPhone12") {
      setSelectedValue("iphone12");
      setPhonetype(value);
    } else if (value === "iPhone12 Pro") {
      setSelectedValue("iphone12pro");
      setPhonetype(value);
    } else if (value === "iPhone12 Pro Max") {
      setSelectedValue("iphone12promax");
      setPhonetype(value);
    } else if (value === "iPhone12 Mini") {
      setSelectedValue("iphone12mini");
      setPhonetype(value);
    } else if (value === "iPhone13") {
      setSelectedValue("iphone13");
      setPhonetype(value);
    } else if (value === "iPhone13 Pro") {
      setSelectedValue("iphone13pro");
      setPhonetype(value);
    } else if (value === "iPhone13 Pro Max") {
      setSelectedValue("iphone13promax");
      setPhonetype(value);
    } else if (value === "iPhone13 Mini") {
      setSelectedValue("iphone13mini");
      setPhonetype(value);
    }
  };
  console.log(selectedValue);

  //Item Section
  //
  const [Category, setCategory] = useState(PhoneTypes[0]);
  const [field, setField] = useState(PhoneTypes[0]);

  const { books } = useContext(BookContext);

  const handleInputChange = (event) => {
    setField(event.target.value);
    setCategory(event.target.value);
  };
  // general input change
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  console.log(books);
  if (!books.length) {
    return <h3>No Books Available</h3>;
  }

  const Container = styled.div`
    margin-top: -20px;
    background-color: #f8f8f8;
  `;
  const ContainerBlank = styled.div`
    height: 50px;
  `;
  const Title = styled.h1`
    font-family: Roboto;

    margin-top: 10px;
    text-align: center;
  `;
  const ProductContainer = styled.div`
    height: auto;
  `;

  const ContainerForProduct = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  `;
  const ProductItem = styled.div`
    flex: 1;
    margin: 10px;
    min-width: 100px;
    height: 230px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border-radius: 12px;
    overflow: hidden;
    text-align: left;
  `;
  const ProductTitle = styled.h1`
    text-align: left;
    font-family: Roboto;
    font-weight: light;
    position: absolute;
    color: black;
    top: 2vh;
    left: 2vh;
    font-size: 16px;
  `;
  const FilterContainer = styled.div`
    bottom: -40px;
    align-items: center;
    justify-content: center;
    display: flex;
    position: relative;
  `;
  return (
    <Container>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
      <ProductContainer>
        <FilterContainer>
          <Button variant="outlined" onClick={handleClickOpen}>
            Change The Phone Type
          </Button>
        </FilterContainer>
        <ContainerBlank></ContainerBlank>
        <Title>{phonetype}</Title>

        {books
          .filter(
            (book) => book.category === selectedValue && book.quantity !== 0
          )
          .map(({ image: image, id, title }) => (
            <Link
              to={`cases/${id}`}
              style={{ display: "inline-block", width: "50%", height: "100%" }}
            >
              <ProductItem style={{ backgroundColor: "#FFFFFF" }}>
                <ProductTitle> {title}</ProductTitle>
                {/* <ProductSubtitle>All series included</ProductSubtitle> */}

                <iphonePicSection>
                  <img
                    src={image}
                    style={{
                      marginTop: "100px",
                      maxHeight: "150px",
                      marginLeft: "50px",
                    }}
                  />
                </iphonePicSection>
              </ProductItem>
            </Link>
          ))}
      </ProductContainer>
    </Container>
  );
};

export default Books;
