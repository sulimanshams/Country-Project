import { Typography , Box } from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"
import React from "react";

function Header() {
  return (
    <div
      style={{
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap:2,
        height: "100vh",
        fontFamily:"Be Vietnam Pro , sans-serif",
        fontWeight:500,
        fontSize:"1.5rem",
        lineHeight:"1.5",
        marginLeft:"-700px",
        marginTop:"-250px"
      }}
    >
      <Typography variant="h4" style={{fontWeight:500}}>Country Quiz</Typography>


      <Box sx={{
        display:"flex",
        alignItems:"center",
        gap:1,
          background: "linear-gradient(to right, #F3A4FF, #FF6F91)",
          px:2,
          py:0.5,
          borderRadius:"999px",
          fontWeight:500,
          fontSize:"1rem",
          

      }}>
            <EmojiEventsIcon sx={{fontSize:20}} />
            <Typography variant="body1" sx={{fontWeight:500}}>1/10 Points</Typography>
      </Box>
    </div>

    
  );
}

export default Header;
