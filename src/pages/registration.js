import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import AdminForm from "./../components/registrationForm/admin";
import StudentForm from "./../components/registrationForm/student";

export default function Register() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  return (
    <div>
      <center>
        <div>
          <h1>Registration</h1>
        </div>
        <div
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            marginTop: "10px",
          }}
        >
          <Button
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={(event) => setAnchorEl(event.currentTarget)}
            style={{ color: "blue", border: "2px solid blue" }}
          >
            {selectedIndex === 3
              ? "Admin"
              : selectedIndex === 2
              ? "Teacher"
              : "Student"}
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={(event) => setAnchorEl(null)}
          >
            <MenuItem onClick={(event) => handleMenuItemClick(event, 3)}>
              Admin
            </MenuItem>
            <MenuItem onClick={(event) => handleMenuItemClick(event, 2)}>
              Teacher
            </MenuItem>
            <MenuItem onClick={(event) => handleMenuItemClick(event, 0)}>
              Student
            </MenuItem>
          </Menu>
        </div>
        <div>
          {selectedIndex === 3 ? (
            <AdminForm />
          ) : selectedIndex === 2 ? (
            "Teacher"
          ) : (
            <StudentForm />
          )}
        </div>
      </center>
    </div>
  );
}
