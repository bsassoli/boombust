import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import Container from "./Container";

const SimpleNotification = (props) => {
    
    const theme = useTheme();
  return (
    <Box bgcolor="alternate.main">
      <Container maxWidth={600}>
        <Card
          sx={{
            padding: 2,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <List sx={{ p: 0 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemIcon 
                sx={{
                  color: theme.palette.error.light,
                  minWidth: "auto",
                  marginRight: 2,
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width={24}
                  height={24}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
                  
                </svg>
              </ListItemIcon>
              <ListItemText
                primary={"There is a problem!"}
                secondary={props.message}
                primaryTypographyProps={{ fontWeight: 700 }}
                sx={{ m: 0 }}
              />
            </ListItem>
          </List>
          <Box 
            color={theme.palette.text.secondary} 
            
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={20}
              height={20}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Box>
        </Card>
      </Container>
    </Box>
  );
};

export default SimpleNotification;
