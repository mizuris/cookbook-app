import React from "react";
import { CardContent, Typography } from "@material-ui/core";

function RecipeCollapse({ summary, instructions }) {
  return (
    <CardContent>
      <Typography paragraph>Description:</Typography>
      <Typography
        paragraph
        variant="body1"
        dangerouslySetInnerHTML={{ __html: summary }}
      ></Typography>
      <Typography paragraph>Preparation:</Typography>
      
      {instructions[0].steps.map((step) => {
        return (
          <ul key={step.number}>
            <li>{step.step}</li>
          </ul>
        );
      })}
    </CardContent>
  );
}

export default RecipeCollapse;
