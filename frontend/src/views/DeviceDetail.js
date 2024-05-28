import { Box, Text } from "@chakra-ui/react";
import { getDeviceDetail } from "../store/actionCreators/gpsAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import moment from "moment";
import "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { chartColor } from "../assets/chartColor";
import ChartDataLabels from "chartjs-plugin-datalabels";
import ReactLoading from "react-loading";
import "../assets/style.css";

const DeviceDetail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { deviceDetail, deviceDetailLoading } = useSelector(
    (store) => store.rootReducer.gpsReducer
  );
  const { id } = useParams();
  const [type, setType] = useState("");
  const [total, setTotal] = useState(0);

  useEffect(() => {
    dispatch(getDeviceDetail(id)).then((resp) => {
      if (resp.length > 0) {
        setType(resp[0].device_type);
      }
    });
  }, []);

  const list = useMemo(() => {
    return deviceDetail;
  }, [deviceDetail]);

  const isLoading = useMemo(() => {
    return deviceDetailLoading;
  }, [deviceDetailLoading]);

  const data = useMemo(() => {
    let locationTime = {};
    deviceDetail.forEach((el) => {
      if (locationTime.hasOwnProperty(el.location)) {
        locationTime = {
          ...locationTime,
          [el.location]: locationTime[el.location] + 1,
        };
      } else {
        locationTime = {
          ...locationTime,
          [el.location]: 1,
        };
      }
    });

    const labels = [];
    const datasets = [
      {
        label: "% Time spent on each location",
        data: [],
        backgroundColor: [],
        hoverOffset: 4,
      },
    ];

    let tempTotal = 0;

    Object.entries(locationTime).forEach((el) => {
      tempTotal += el[1];
    });

    setTotal(tempTotal);

    Object.entries(locationTime).forEach((el, idx) => {
      labels.push(el[0]);
      datasets[0].data.push(el[1]);
      datasets[0].backgroundColor.push(chartColor[idx]);
    });
    return {
      labels,
      datasets,
    };
  }, [deviceDetail]);

  const options = {
    tooltips: {
      enabled: false,
    },
    plugins: {
      datalabels: {
        formatter: (value, ctx) => {
          const datapoints = ctx.chart.data.datasets[0].data;
          const total = datapoints.reduce(
            (total, datapoint) => total + datapoint,
            0
          );
          const percentage = (value / total) * 100;
          return percentage.toFixed(2) + "%";
        },
        color: "#fff",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Box w={"100vw"} h={"100vh"} p={"60px"}>
      {!isLoading ? (
        list.length > 0 ? (
          <Box className="deviceDetailContainer">
            <Grid
              templateRows={"repeat(4, 1fr)"}
              templateColumns={"repeat(3,1fr)"}
              w={"100%"}
              columnGap={4}
            >
              <GridItem rowSpan={1} colSpan={3} className="gridItem">
                <Box>
                  <Text className="deviceId">{id}</Text>
                  <Text className="deviceType">{type}</Text>
                </Box>
                <Box className="buttonContainer">
                  <Button onClick={() => navigate("/")}>Back</Button>
                </Box>
              </GridItem>
              <GridItem rowSpan={3} colSpan={1}>
                <Table className="deviceListTable">
                  <Thead>
                    <Tr>
                      <Th className="headText">Timestamp</Th>
                      <Th className="headText">Location</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {list.map((el) => {
                      return (
                        <Tr>
                          <Td className="rowText">
                            {moment
                              .utc(el.timestamp)
                              .format("DD-MM-YYYY hh:mm:ss")}
                          </Td>
                          <Td className="rowText">{el.location}</Td>
                        </Tr>
                      );
                    })}
                  </Tbody>
                </Table>
              </GridItem>
              <GridItem rowSpan={3} colSpan={2}>
                <Box className="chartContainer">
                  <Box className="chartBox">
                    {data.labels.length > 0 && (
                      <Chart
                        type="pie"
                        data={data}
                        height={"400px"}
                        width={"400px"}
                        options={options}
                        plugins={[ChartDataLabels]}
                      />
                    )}
                  </Box>
                  <Box className="chartDetailBox">
                    <Text>% Time spent on each location</Text>
                    {data.labels.length > 0 &&
                      data.labels.map((el, idx) => {
                        return (
                          <Box className="textContainer">
                            <Box
                              backgroundColor={
                                data.datasets[0].backgroundColor[idx]
                              }
                              className="colorDetail"
                            />
                            <Text>{el}</Text>
                            <Text>
                              : {(data.datasets[0].data[idx] / total) * 100}%
                            </Text>
                          </Box>
                        );
                      })}
                  </Box>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        ) : (
          <Box
            w={"100%"}
            h={"100%"}
            display={"flex"}
            alignItems={"center"}
            flexDir={"column"}
            justifyContent={"center"}
          >
            <Text color={"white"} fontSize={"48px"}>
              There is no device with id {id}
            </Text>
            <Button
              onClick={() => navigate("/")}
              w={"120px"}
              h={"60px"}
              fontSize={"28px"}
            >
              Back
            </Button>
          </Box>
        )
      ) : (
        <Box
          w={"100%"}
          h={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <ReactLoading type={"bubbles"} color="#fff" />
        </Box>
      )}
    </Box>
  );
};

export default DeviceDetail;
