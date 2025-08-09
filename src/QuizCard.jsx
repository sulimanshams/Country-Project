import React, { useState } from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import axios from "axios";

const QuizCard = ({ questionData }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (index) => {
    setSelected(index);
  };

  return (
    <Box sx={{
         backgroundColor: "#2c2c5a",
        borderRadius: 3,
        padding: 3,
        width: 400,
        color: "white",
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
    }}>
      <Stack direction="row" spacing={1} mb={3}>
        {[...Array(10)].map((_, i) => {
          <Box
            key={1}
            sx={{
              width: 32,
              height: 32,
              borderRadius: "50%",
              background:
                i + 1 === questionData.currentQuestion
                  ? "linear-gradient(90deg, #F15F79 0%, #AB27F9 100%)"
                  : "#4A4A6A",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              fontWeight: "bold",
              opacity: i + 1 > questionData.totalQuestions ? 0.3 : 1,
            }}
          >
            {i + 1}
          </Box>;
        })}
      </Stack>

                <Typography variant="h6" mb={3}>
                    Which country does this flag {questionData.flag} belong to ?
                </Typography>


                <Stack>
                    {questionData.options.map((option, index) => {
                        <Button key={index} variant="contained" fullWidth  onClick={() => handleSelect(index)}
                        sx={{
                             backgroundColor:
                               selected === index
                               ? "linear-gradient(90deg, #F15F79 0%, #AB27F9 100%)"
                               : "#3f3f6f",
                               textTransform:"none",
                               color:"white",
                               justifyContent:"space-between",
                               fontWeight:"medium",
                               boxShadow:"none",
                                "&:hover": {
                                backgroundColor:
                                selected === index ? undefined : "#5a5a8a",
                                boxShadow: "none",
                            },
                        }}          
                        >
                                {option}
                                {selected===index && {
                                    <Box
                                    component="span"
                                    sx={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: "50%",
                                    border: "2px solid white",
                                    backgroundColor: "#68d391",
                                    marginLeft: 1,
                                    }}
                                />
                                }}
                        </Button>
                    })}
                </Stack>
    </Box>
  );
};

export default QuizCard;
