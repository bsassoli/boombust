import React, {useState, useEffect } from 'react';
import axios from "axios";

import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import Container from './Container';


const SimpleTable = (props) => {
  const theme = useTheme();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`/web/signals/`);
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  

  return (
    <Container>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 750 }} aria-label="simple table">
          <TableHead sx={{ bgcolor: "alternate.dark" }}>
            <TableRow>
              <TableCell>
                <Typography
                  variant={"caption"}
                  fontWeight={700}
                  sx={{ textTransform: "uppercase" }}
                >
                  Asset
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={"caption"}
                  fontWeight={700}
                  sx={{ textTransform: "uppercase" }}
                >
                  Opening Price
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={"caption"}
                  fontWeight={700}
                  sx={{ textTransform: "uppercase" }}
                >
                  Closing Price
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={"caption"}
                  fontWeight={700}
                  sx={{ textTransform: "uppercase" }}
                >
                  Signal
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  variant={"caption"}
                  fontWeight={700}
                  sx={{ textTransform: "uppercase" }}
                >
                  Date
                </Typography>
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {data && data.map((item) => (
              <TableRow
                key={item.id}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell component="th" scope="row">
                  <Typography variant={"subtitle2"} fontWeight={700}>
                    {item.asset}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={"text.secondary"} variant={"subtitle2"}>
                    {item.opening_price}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={"text.secondary"} variant={"subtitle2"}>
                    {item.closing_price}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    variant={"caption"}
                    fontWeight={700}
                    sx={{ color: theme.palette.success.main }}
                  >
                    {item.signal}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={"text.secondary"} variant={"subtitle2"}>
                    {item.date}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default SimpleTable;
