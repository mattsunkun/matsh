import { Box, Link } from '@mui/material';
// import { Link } from 'react-router-dom';
import React from 'react';

const LinkLine: React.FC<{ link: string, line: string, isSameTab?: boolean, isUnderLine?: boolean, headingLine?: string }> = (props) => {

  return (
    <>
      <Box
        margin={2}
      >
        {props?.headingLine}{<Link
          underline={props.isUnderLine ? "always" : "none"}
          color="inherit"
          href={props.link}
          target={props.isSameTab ? "_self" : "_blank"}
        >
          {props.line}
        </Link>}
      </Box>
    </>
  );
};

export default LinkLine;